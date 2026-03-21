/* ═══════════════════════════════════════════════════
   SEC 2 — 3D GLOBE
   · 3D pin markers on accurate lat/lon positions
   · City names panel below globe (HTML, always clickable)
   · Button click → globe rotates to city → card opens
   · Auto-tour: centres each city perfectly → opens card
   · Drag / click as normal after tour
═══════════════════════════════════════════════════ */

/* ── shared rotation state tweened by GSAP ── */
const rotState = { rotY: 0.4, rotX: 0.08 };

/* ── tour control ── */
let _tourId     = 0;
let tourActive  = false;
let _tourRunner = null;   // assigned at end of initGlobe()

/* ── exposed from initGlobe so button clicks can rotate ── */
let _animToCityFn    = null;
let _setActiveCityFn = null;
let _hudEl           = null;
let _hidePinLabelFn  = null;

/** Called from core.js (scroll trigger) and flyThrough() */
function triggerGlobeTour() {
  if (!_tourRunner) return;   // globe not ready yet
  _tourId++;
  gsap.killTweensOf(rotState);
  closeCity();
  if (_hidePinLabelFn) _hidePinLabelFn();
  tourActive = true;
  setTimeout(function() { _tourRunner(_tourId); }, 80);
}

/* ═══════════════════════════════════════════════════
   CITY DATA — edit to add / change entries
═══════════════════════════════════════════════════ */
var CITIES = [
  {
    name:'San Jose', country:'USA', lat:37.34, lon:-121.89,
    role:'CyberOps Engineer',
    company:'Cisco Systems', icon:'🔵',
    industry:'Cybersecurity · Networking', industryCol:'#00aaff',
    status:'Full-Time · 2022–2023',
    metrics:[{val:'$57B',lbl:'Revenue'},{val:'85K+',lbl:'Employees'},{val:'−40%',lbl:'MTTR'}],
    impact:['Automated threat detection workflows cutting mean-time-to-respond by 40%',
            'Designed RESTful APIs for Odoo synchronisation across enterprise security toolchain',
            'Developed SIEM dashboards consumed by 3 regional NOC teams'],
    detail:"Joined Cisco's CyberOps division to harden enterprise network defences. Worked closely with SOC analysts and network architects to automate security response at scale across IOS and ASA infrastructure.",
    tags:['Splunk','Python','Cisco ASA','SIEM','REST API','IOS','Ansible'],
    link:'#', col:'#00aaff'
  },
  {
    name:'Valencia', country:'Spain', lat:39.47, lon:-0.38,
    role:'Senior DevOps Engineer',
    company:'CloudNest Solutions', icon:'🌐',
    industry:'Cloud Infrastructure · DevOps', industryCol:'#00f2ff',
    status:'Remote Contract · 2023–Present',
    metrics:[{val:'12+',lbl:'Clients'},{val:'99.98%',lbl:'Uptime SLA'},{val:'65%',lbl:'Cost Saved'}],
    impact:['Deployed containerised microservices across multi-cloud reducing costs 65%',
            'Led IaC migration from Bash to Terraform, cutting provisioning from 4h to 8 min',
            'Designed GitOps pipelines with zero-downtime blue-green deployments'],
    detail:'Remote-first DevOps consultancy working with European SaaS clients. Specialising in Kubernetes migrations, Terraform IaC, and CI/CD pipeline optimisation.',
    tags:['Kubernetes','Terraform','AWS','GCP','Ansible','GitLab CI','Helm','ArgoCD'],
    link:'#', col:'#00f2ff'
  },
  {
    name:'Tokyo', country:'Japan', lat:35.68, lon:139.69,
    role:'IoT & AI Research Lead',
    company:'ATHENA Project', icon:'🧠',
    industry:'AI · Hardware · IoT', industryCol:'#ff6688',
    status:'R&D · Self-Directed · 2023',
    metrics:[{val:'<200ms',lbl:'Latency'},{val:'7B',lbl:'LLM Params'},{val:'3',lbl:'Prototypes'}],
    impact:['Prototyped hardware-LLM fusion device with sub-200ms audio response',
            'Integrated RTOS scheduling with Python ML pipeline on edge CPU — no GPU required',
            'Achieved 94% intent recognition accuracy in noisy environments'],
    detail:"Self-directed R&D project. Built the ATHENA device — a standalone voice AI with real-time multi-turn context, LangChain reasoning, and custom low-power hardware.",
    tags:['Python','TensorFlow','LangChain','RTOS','C++','I2S Audio','IoT','EdgeAI'],
    link:'#', col:'#ff6688'
  },
  {
    name:'Prague', country:'Czech Republic', lat:50.08, lon:14.43,
    role:'Network Security Engineer',
    company:'SecureForge EU', icon:'🛡️',
    industry:'InfoSec · Zero-Trust', industryCol:'#00ff9d',
    status:'Contract · 2021–2022',
    metrics:[{val:'200+',lbl:'Audits Run'},{val:'0',lbl:'Breaches'},{val:'−55%',lbl:'Attack Surface'}],
    impact:['Implemented zero-trust architecture across 14-site enterprise network',
            'Automated weekly OWASP ZAP vulnerability scans integrated into CI/CD gates',
            'Reduced external attack surface 55% through network segmentation'],
    detail:'Contract engagement serving EU fintech and healthcare clients. Led network hardening, automated penetration testing, and GDPR/ISO 27001 compliance remediation.',
    tags:['Cisco IOS','Python','OWASP ZAP','Wireshark','Zero-Trust','Nmap','FortiGate','IPSec'],
    link:'#', col:'#00ff9d'
  },
  {
    name:'Douala', country:'Cameroon', lat:4.05, lon:9.77,
    role:'CTO & Co-Founder',
    company:'MisterComp Platform', icon:'🚀',
    industry:'SaaS · EdTech · Startup', industryCol:'#b44dff',
    status:'Founder · 2019–2021',
    metrics:[{val:'3×',lbl:'User Growth'},{val:'12mo',lbl:'0→Launch'},{val:'500+',lbl:'Users'}],
    impact:['Built entire tech stack from zero — Django REST backend, Angular SPA, AWS infra',
            'Drove 3× user growth in 12 months through data-driven iteration',
            'Designed RESTful APIs for Odoo ERP sync across Cameroonian SMEs'],
    detail:'Co-founded MisterComp, a B2B SaaS platform. Led product strategy, a team of 4, and cloud infra — from incorporation to 500+ active users in under 12 months.',
    tags:['Django','Angular','AWS','Docker','GitLab CI','PostgreSQL','Redis','Odoo'],
    link:'https://gitlab.com/mistercomp1/', col:'#b44dff'
  },
  {
    name:'Pune', country:'India', lat:18.52, lon:73.86,
    role:'Graduate Researcher',
    company:'MIT World Peace University', icon:'🎓',
    industry:'Academia · AI / ML Research', industryCol:'#f0c040',
    status:'M.Sc. · 2021–2023',
    metrics:[{val:'8.52',lbl:'CGPA'},{val:'3',lbl:'Papers'},{val:'Top 5%',lbl:'Cohort'}],
    impact:['M.Sc. Computer Science & Engineering — top 5% of cohort with 8.52 CGPA',
            'Researched AIOps automation; paper accepted at international DevOps symposium',
            'Designed cloud-native pipeline benchmarks comparing Kubernetes schedulers'],
    detail:'Full-time M.Sc. at Vishwanath Karad MIT World Peace University. Focus: AI/ML systems, cloud-native DevOps, AIOps. Research on predictive incident management.',
    tags:['Python','TensorFlow','Kubernetes','Prometheus','Research','Scikit-learn','LaTeX','GCP'],
    link:'#', col:'#f0c040'
  },
  {
    name:'Buea', country:'Cameroon', lat:4.15, lon:9.24,
    role:'Software Engineering Student',
    company:'College of Technology', icon:'💻',
    industry:'Academia · Computer Engineering', industryCol:'#ff9900',
    status:'B.Tech · 2016–2020',
    metrics:[{val:'4yr',lbl:'Duration'},{val:'6+',lbl:'Projects'},{val:'1st',lbl:'ICT Award'}],
    impact:['Built foundational expertise in systems programming, networking, and architecture',
            'Led team project: real-time campus event system in C++ and MySQL',
            'Represented faculty at national ICT challenge — awarded "Most Impactful Solution"'],
    detail:"B.Tech in Computer Engineering at CamTech Buea — the Silicon Valley of Cameroon. Developed core skills in low-level systems, network protocols, and full-stack development.",
    tags:['C++','Python','Java','MySQL','Networking','Linux','Algorithms','Systems'],
    link:'#', col:'#ff9900'
  }
];

/* ═══════════════════════════════════════════════════
   GLOBE INIT
═══════════════════════════════════════════════════ */
function initGlobe() {
  /* ── Move city-overlay into #s2 so modal is anchored to the globe section ── */
  var s2el = document.getElementById('s2');
  var overlayEl = document.getElementById('city-overlay');
  if (s2el && overlayEl && overlayEl.parentElement !== s2el) {
    s2el.appendChild(overlayEl);
  }

  var wrap   = document.getElementById('globe-wrap');
  var canvas = document.getElementById('globeCanvas');
  var W = wrap.clientWidth  || 560;
  var H = wrap.clientHeight || 560;

  /* ── renderer ── */
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  var scene = new THREE.Scene();
  var cam   = new THREE.PerspectiveCamera(40, W / H, 0.1, 100);
  cam.position.z = 3.2;

  /* ── lights ── */
  scene.add(new THREE.AmbientLight(0x334466, 4));

  var sunLight = new THREE.DirectionalLight(0xfff4e0, 1.6);
  sunLight.position.set(5, 3, 5);
  scene.add(sunLight);

  var fillLight = new THREE.DirectionalLight(0x0044aa, 0.35);
  fillLight.position.set(-5, -2, -3);
  scene.add(fillLight);

  var pointLight = new THREE.PointLight(0x00f2ff, 0.9, 15);
  pointLight.position.set(3, 3, 5);
  scene.add(pointLight);

  /* ── globe mesh ── */
  var globeMat = new THREE.MeshPhongMaterial({
    color: 0x020c22, emissive: 0x001530, emissiveIntensity: 1, shininess: 15
  });
  var globeMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 72, 72), globeMat);
  scene.add(globeMesh);

  /* ── textures ── */
  var loader = new THREE.TextureLoader();
  loader.crossOrigin = 'anonymous';
  var BASE = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/';

  loader.load(BASE + 'earth_atmos_2048.jpg', function(tex) {
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    globeMat.map = tex;
    globeMat.color.set(0xffffff);
    globeMat.emissive.set(0x000000);
    globeMat.emissiveIntensity = 0;
    globeMat.shininess = 22;
    globeMat.needsUpdate = true;
  });
  loader.load(BASE + 'earth_specular_2048.jpg', function(tex) {
    globeMat.specularMap = tex;
    globeMat.specular = new THREE.Color(0x4488aa);
    globeMat.needsUpdate = true;
  });
  loader.load(BASE + 'earth_normal_2048.jpg', function(tex) {
    globeMat.bumpMap = tex;
    globeMat.bumpScale = 0.012;
    globeMat.needsUpdate = true;
  });
  loader.load(BASE + 'earth_lights_2048.png', function(tex) {
    var nightMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.001, 72, 72),
      new THREE.MeshBasicMaterial({
        map: tex, blending: THREE.AdditiveBlending,
        transparent: true, opacity: 0.38, depthWrite: false
      })
    );
    nightMesh.userData.isNight = true;
    scene.add(nightMesh);
  });

  /* ── atmosphere ── */
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(1.002, 30, 30),
    new THREE.MeshBasicMaterial({ color: 0x0055ff, wireframe: true, transparent: true, opacity: 0.03 })
  ));
  [[1.10, 0.042, 0x00aaff, THREE.BackSide],
   [1.065, 0.072, 0x002288, THREE.BackSide],
   [1.145, 0.022, 0x00ff9d, THREE.BackSide]
  ].forEach(function(p) {
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(p[0], 32, 32),
      new THREE.MeshBasicMaterial({ color: p[2], transparent: true, opacity: p[1], side: p[3] })
    ));
  });

  /* ── coordinate helper ── */
  function ll2v(lat, lon, r) {
    r = r || 1.032;
    var phi   = (90 - lat) * Math.PI / 180;
    var theta = (lon + 180) * Math.PI / 180;
    return new THREE.Vector3(
      -Math.sin(phi) * Math.cos(theta) * r,
       Math.cos(phi) * r,
       Math.sin(phi) * Math.sin(theta) * r
    );
  }

  /* ═══════════════════════════════════════════════════
     3D PIN MARKERS
  ═══════════════════════════════════════════════════ */
  var cityGroup = new THREE.Group();
  var pulseDots = [];
  var rayCasts  = [];

  CITIES.forEach(function(city, i) {
    var surfPos = ll2v(city.lat, city.lon, 1.00);
    var headPos = ll2v(city.lat, city.lon, 1.10);
    var outDir  = headPos.clone().normalize();

    /* invisible hit sphere */
    var hit = new THREE.Mesh(
      new THREE.SphereGeometry(0.058, 8, 8),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
    );
    hit.position.copy(surfPos);
    hit.userData.city = city;
    rayCasts.push(hit);
    cityGroup.add(hit);

    /* glowing pin head */
    var head = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 14, 14),
      new THREE.MeshPhongMaterial({
        color: new THREE.Color(city.col),
        emissive: new THREE.Color(city.col),
        emissiveIntensity: 0.6,
        shininess: 90
      })
    );
    head.position.copy(headPos);
    city._pinHead = head;
    cityGroup.add(head);

    /* thin stick */
    var stickLen  = 0.10;
    var stickMid  = outDir.clone().multiplyScalar(1.05);
    var stick = new THREE.Mesh(
      new THREE.CylinderGeometry(0.004, 0.004, stickLen, 6),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(city.col), transparent: true, opacity: 0.7 })
    );
    stick.position.copy(stickMid);
    var up = new THREE.Vector3(0, 1, 0);
    stick.quaternion.setFromUnitVectors(up, outDir);
    cityGroup.add(stick);

    /* halo ring */
    var halo = new THREE.Mesh(
      new THREE.RingGeometry(0.034, 0.050, 24),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(city.col), transparent: true, opacity: 0.20, side: THREE.DoubleSide })
    );
    halo.position.copy(headPos);
    halo.lookAt(outDir.clone().multiplyScalar(2));
    city._halo = halo;
    cityGroup.add(halo);

    /* animated outer pulse ring */
    var pr = new THREE.Mesh(
      new THREE.RingGeometry(0.040, 0.060, 32),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(city.col), transparent: true, opacity: 0.30, side: THREE.DoubleSide })
    );
    pr.position.copy(headPos);
    pr.lookAt(outDir.clone().multiplyScalar(2));
    pr.userData.offset = i * 0.9;
    pulseDots.push(pr);
    cityGroup.add(pr);
  });
  scene.add(cityGroup);

  /* ── arcs between cities ── */
  var arcGroup = new THREE.Group();
  [[0,3],[1,5],[2,3],[3,4],[4,6],[0,5],[1,3],[2,5]].forEach(function(pair) {
    var ai = pair[0], bi = pair[1];
    if (!CITIES[ai] || !CITIES[bi]) return;
    var a    = ll2v(CITIES[ai].lat, CITIES[ai].lon);
    var b    = ll2v(CITIES[bi].lat, CITIES[bi].lon);
    var ctrl = new THREE.Vector3().addVectors(a, b).normalize().multiplyScalar(1.55);
    var pts  = new THREE.QuadraticBezierCurve3(a, ctrl, b).getPoints(60);
    arcGroup.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: 0x00f2ff, transparent: true, opacity: 0.12 })
    ));
  });
  scene.add(arcGroup);

  /* ── stars ── */
  var starPos = new Float32Array(1200 * 3);
  for (var si = 0; si < 1200; si++) {
    var sr = 5 + Math.random() * 10;
    var st = Math.random() * Math.PI * 2;
    var sp = Math.acos(2 * Math.random() - 1);
    starPos[si*3]   = sr * Math.sin(sp) * Math.cos(st);
    starPos[si*3+1] = sr * Math.cos(sp);
    starPos[si*3+2] = sr * Math.sin(sp) * Math.sin(st);
  }
  var sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.020, color: 0x99bbff, transparent: true, opacity: 0.5 })));

  /* ═══════════════════════════════════════════════════
     CITY NAMES PANEL — populate the HTML div
  ═══════════════════════════════════════════════════ */
  var panel = document.getElementById('city-list-panel');
  if (panel) {
    CITIES.forEach(function(city) {
      var btn = document.createElement('button');
      btn.className = 'clist-btn';
      btn.style.setProperty('--ccol', city.col);
      btn.innerHTML =
        '<span class="clist-icon">' + city.icon + '</span>' +
        '<div class="clist-text">' +
          '<span class="clist-name">' + city.name + '</span>' +
          '<span class="clist-role">' + city.role + '</span>' +
        '</div>' +
        /* Tron corner accents (pure HTML spans) */
        '<span class="clist-corner clist-corner-tl"></span>' +
        '<span class="clist-corner clist-corner-br"></span>';

      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        /* ── Tron fire animation ── */
        btn.classList.remove('btn-firing');
        void btn.offsetWidth; // force reflow so re-clicks retrigger
        btn.classList.add('btn-firing');
        setTimeout(function() { btn.classList.remove('btn-firing'); }, 750);

        /* ── Stop any running tour ── */
        _tourId++;
        gsap.killTweensOf(rotState);
        closeCity();
        if (_hidePinLabelFn) _hidePinLabelFn();
        tourActive = false;
        if (_hudEl) _hudEl.classList.remove('on');

        /* ── Highlight this city ── */
        CITIES.forEach(function(c) {
          if (c._panelBtn) c._panelBtn.classList.remove('tour-active');
          if (c._halo) c._halo.material.opacity = 0.20;
        });
        btn.classList.add('tour-active');
        if (city._halo) city._halo.material.opacity = 0.85;

        /* ── Rotate globe to city, then open card ── */
        if (_animToCityFn) {
          _animToCityFn(city).then(function() {
            showCity(city);
          });
        } else {
          showCity(city);
        }
      });

      panel.appendChild(btn);
      city._panelBtn = btn;
    });
  }

  /* ═══════════════════════════════════════════════════
     TOUR HUD
  ═══════════════════════════════════════════════════ */
  var hud = document.createElement('div');
  hud.id = 'globe-tour-hud';
  hud.innerHTML =
    '<div class="hud-dot"></div>' +
    '<span class="hud-label">SCANNING NEXUS</span>' +
    '<span class="hud-progress" id="hud-prog">1 / ' + CITIES.length + '</span>' +
    '<span class="hud-skip" id="hud-skip">SKIP ✕</span>';
  wrap.appendChild(hud);

  /* expose hud to module scope so button handler can hide it */
  _hudEl = hud;

  /* ═══════════════════════════════════════════════════
     PIN LABEL — shown during tour instead of modal card
  ═══════════════════════════════════════════════════ */
  var pinLabelEl = document.createElement('div');
  pinLabelEl.id = 'globe-pin-label';
  wrap.appendChild(pinLabelEl);

  function showPinLabel(city) {
    /* Project the pin-head world position to 2D canvas coords.
       After _animToCity the globe is stationary, so one snapshot is enough. */
    var localPos = ll2v(city.lat, city.lon, 1.16);
    var euler    = new THREE.Euler(rotState.rotX, rotState.rotY, 0, 'XYZ');
    var worldPos = localPos.clone().applyEuler(euler);
    var projected = worldPos.project(cam);          // NDC [-1..1]

    /* Only show if the pin is facing the camera */
    if (projected.z > 1) return;

    var wW = wrap.clientWidth  || W;
    var wH = wrap.clientHeight || H;
    var px = ( projected.x * 0.5 + 0.5) * wW;
    var py = (-projected.y * 0.5 + 0.5) * wH;

    pinLabelEl.style.left = px + 'px';
    pinLabelEl.style.top  = py + 'px';
    pinLabelEl.innerHTML  =
      '<span class="pnl-dot" style="background:' + city.col + ';box-shadow:0 0 8px ' + city.col + '"></span>' +
      '<div class="pnl-text">' +
        '<span class="pnl-name" style="color:' + city.col + '">' + city.name + '</span>' +
        '<span class="pnl-country">' + city.country + '</span>' +
        '<span class="pnl-role">' + city.role + '</span>' +
      '</div>';
    pinLabelEl.style.borderColor = city.col + '55';
    pinLabelEl.className = 'on';
  }

  function hidePinLabel() {
    pinLabelEl.classList.remove('on');
  }

  /* expose so module-level cancel paths can call it */
  _hidePinLabelFn = hidePinLabel;

  document.getElementById('hud-skip').addEventListener('click', function() {
    _tourId++;
    gsap.killTweensOf(rotState);
    closeCity();
    hidePinLabel();
    _endTour();
  });

  /* ═══════════════════════════════════════════════════
     RAYCASTER — click on 3D pins (also rotates to city)
  ═══════════════════════════════════════════════════ */
  var raycaster  = new THREE.Raycaster();
  var mouse2     = new THREE.Vector2();
  var clickLocked = false;

  canvas.addEventListener('click', function(e) {
    if (clickLocked || tourActive) return;
    var r = canvas.getBoundingClientRect();
    mouse2.x =  ((e.clientX - r.left) / r.width)  * 2 - 1;
    mouse2.y = -((e.clientY - r.top)  / r.height) * 2 + 1;
    raycaster.setFromCamera(mouse2, cam);
    var hits = raycaster.intersectObjects(rayCasts);
    if (hits.length) {
      var city = hits[0].object.userData.city;
      /* highlight panel button */
      CITIES.forEach(function(c) {
        if (c._panelBtn) c._panelBtn.classList.remove('tour-active');
        if (c._halo) c._halo.material.opacity = 0.20;
      });
      if (city._panelBtn) city._panelBtn.classList.add('tour-active');
      if (city._halo) city._halo.material.opacity = 0.85;
      /* rotate then reveal */
      _animToCity(city).then(function() { showCity(city); });
    }
  });

  /* ═══════════════════════════════════════════════════
     DRAG TO ROTATE
  ═══════════════════════════════════════════════════ */
  var dragging = false, prevMx = 0, prevMy = 0, dragDist = 0;

  /* Prevent browser scroll-pan interfering with globe drag on touch */
  canvas.style.touchAction = 'none';

  canvas.addEventListener('mousedown', function(e) {
    if (tourActive) return;
    dragging = true; prevMx = e.clientX; prevMy = e.clientY; dragDist = 0;
    e.preventDefault();
  });
  window.addEventListener('mouseup', function() {
    dragging = false; clickLocked = dragDist > 5;
  });
  window.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    var dx = e.clientX - prevMx, dy = e.clientY - prevMy;
    dragDist += Math.abs(dx) + Math.abs(dy);
    rotState.rotY += dx * 0.005;
    rotState.rotX += dy * 0.005;
    rotState.rotX  = Math.max(-1.2, Math.min(1.2, rotState.rotX));
    prevMx = e.clientX; prevMy = e.clientY;
  });

  /* ── Touch: always stop the tour on first touch, then start drag ── */
  canvas.addEventListener('touchstart', function(e) {
    /* If a tour is running, stop it so the user can take control */
    if (tourActive) {
      _tourId++;
      gsap.killTweensOf(rotState);
      closeCity();
      hidePinLabel();
      _endTour();
    }
    dragging = true;
    prevMx = e.touches[0].clientX;
    prevMy = e.touches[0].clientY;
    dragDist = 0;
  }, { passive: true });

  /* ── Touch end: short tap → raycast for 3D pins; long drag → ignore ── */
  canvas.addEventListener('touchend', function(e) {
    dragging = false;
    var wasDrag = dragDist > 10;
    clickLocked = wasDrag;
    if (!wasDrag && e.changedTouches.length) {
      /* Treat a short tap as a click on 3D pins */
      var t = e.changedTouches[0];
      var r = canvas.getBoundingClientRect();
      mouse2.x =  ((t.clientX - r.left) / r.width)  * 2 - 1;
      mouse2.y = -((t.clientY - r.top)  / r.height) * 2 + 1;
      raycaster.setFromCamera(mouse2, cam);
      var hits = raycaster.intersectObjects(rayCasts);
      if (hits.length) {
        var city = hits[0].object.userData.city;
        CITIES.forEach(function(c) {
          if (c._panelBtn) c._panelBtn.classList.remove('tour-active');
          if (c._halo) c._halo.material.opacity = 0.20;
        });
        if (city._panelBtn) city._panelBtn.classList.add('tour-active');
        if (city._halo) city._halo.material.opacity = 0.85;
        _animToCity(city).then(function() { showCity(city); });
      }
    }
  });

  /* ── Touch move: slightly higher sensitivity than mouse for finger drag ── */
  canvas.addEventListener('touchmove', function(e) {
    if (!dragging || !e.touches.length) return;
    var dx = e.touches[0].clientX - prevMx, dy = e.touches[0].clientY - prevMy;
    dragDist += Math.abs(dx) + Math.abs(dy);
    rotState.rotY += dx * 0.007;   /* 0.005 → 0.007: finger needs less resistance */
    rotState.rotX += dy * 0.007;
    rotState.rotX  = Math.max(-1.2, Math.min(1.2, rotState.rotX));
    prevMx = e.touches[0].clientX; prevMy = e.touches[0].clientY;
  }, { passive: true });

  /* ═══════════════════════════════════════════════════
     ANIMATION LOOP
  ═══════════════════════════════════════════════════ */
  var gt = 0;
  (function animGlobe() {
    requestAnimationFrame(animGlobe);
    gt += 0.003;

    if (!dragging && !tourActive) rotState.rotY += 0.0018;

    var rY = rotState.rotY, rX = rotState.rotX;

    globeMesh.rotation.y = rY; globeMesh.rotation.x = rX;
    cityGroup.rotation.y = rY; cityGroup.rotation.x = rX;
    arcGroup.rotation.y  = rY; arcGroup.rotation.x  = rX;

    for (var ci = 0; ci < scene.children.length; ci++) {
      var c = scene.children[ci];
      if (c.userData && c.userData.isNight) { c.rotation.y = rY; c.rotation.x = rX; }
    }

    /* pulse rings */
    for (var pi = 0; pi < pulseDots.length; pi++) {
      var pr  = pulseDots[pi];
      var ps  = 1 + 0.65 * Math.sin(gt * 2.2 + pr.userData.offset);
      pr.scale.setScalar(ps);
      pr.material.opacity = Math.max(0, (1.3 - ps) * 0.45);
    }

    /* arc shimmer */
    for (var ai = 0; ai < arcGroup.children.length; ai++) {
      arcGroup.children[ai].material.opacity = 0.06 + 0.09 * Math.sin(gt * 1.5 + ai * 0.55);
    }

    /* sun orbit */
    sunLight.position.x = 4 * Math.sin(gt * 0.2);
    sunLight.position.z = 4 * Math.cos(gt * 0.2);

    renderer.render(scene, cam);
  }());

  window.addEventListener('resize', function() {
    var nW = wrap.clientWidth, nH = wrap.clientHeight;
    if (!nW || !nH) return;
    renderer.setSize(nW, nH);
    cam.aspect = nW / nH;
    cam.updateProjectionMatrix();
  });

  /* ═══════════════════════════════════════════════════
     TOUR ENGINE
  ═══════════════════════════════════════════════════ */
  function _cityTargetRot(city) {
    var tY = -(city.lon + 90) * Math.PI / 180;
    while (tY >  Math.PI) tY -= 2 * Math.PI;
    while (tY < -Math.PI) tY += 2 * Math.PI;
    var tX = Math.max(-1.05, Math.min(1.05, city.lat * Math.PI / 180));
    return [tY, tX];
  }

  function _delay(ms) {
    return new Promise(function(resolve) { setTimeout(resolve, ms); });
  }

  function _animToCity(city) {
    var rot = _cityTargetRot(city);
    return new Promise(function(resolve) {
      gsap.to(rotState, { rotY: rot[0], rotX: rot[1], duration: 1.7, ease: 'power2.inOut', onComplete: resolve });
    });
  }

  /* expose to module scope so panel buttons can call it */
  _animToCityFn = _animToCity;

  function _setActiveCity(city, active) {
    CITIES.forEach(function(c) {
      if (c._panelBtn) c._panelBtn.classList.remove('tour-active');
      if (c._halo) c._halo.material.opacity = 0.20;
    });
    if (active && city) {
      if (city._panelBtn) city._panelBtn.classList.add('tour-active');
      if (city._halo) city._halo.material.opacity = 0.85;
    }
  }

  function _endTour() {
    tourActive = false;
    hud.classList.remove('on');
    hidePinLabel();
    CITIES.forEach(function(c) {
      if (c._panelBtn) c._panelBtn.classList.remove('tour-active');
      if (c._halo) c._halo.material.opacity = 0.20;
    });
  }

  async function _runTour(id) {
    hud.classList.add('on');

    for (var i = 0; i < CITIES.length; i++) {
      if (id !== _tourId) { _endTour(); return; }

      var city = CITIES[i];
      var prog = document.getElementById('hud-prog');
      if (prog) prog.textContent = (i + 1) + ' / ' + CITIES.length;

      await _animToCity(city);
      if (id !== _tourId) { _endTour(); return; }

      _setActiveCity(city, true);

      await _delay(200);
      if (id !== _tourId) { _endTour(); return; }

      /* Show pin label — no modal card during tour */
      showPinLabel(city);

      await _delay(2400);
      if (id !== _tourId) { _endTour(); return; }

      hidePinLabel();
      _setActiveCity(null, false);

      await _delay(350);
    }

    if (id === _tourId) {
      gsap.to(rotState, { rotX: 0.08, duration: 1.4, ease: 'power2.out' });
      _endTour();
    }
  }

  /* wire up the public entry point */
  _tourRunner = _runTour;

} /* end initGlobe */


/* ═══════════════════════════════════════════════════
   CITY MODAL — show / close
═══════════════════════════════════════════════════ */
function showCity(city) {
  document.getElementById('cm-city').textContent        = city.name + ', ' + city.country;
  document.getElementById('cm-logo').textContent         = city.icon || '🏢';
  document.getElementById('cm-logo').style.background    = 'linear-gradient(135deg,' + city.col + '18,' + city.col + '06)';
  document.getElementById('cm-logo').style.borderColor   = city.col + '33';
  document.getElementById('cm-company-name').textContent = city.company;

  var ind = document.getElementById('cm-industry');
  ind.textContent       = city.industry;
  ind.style.color       = city.industryCol || city.col;
  ind.style.borderColor = (city.industryCol || city.col) + '44';
  ind.style.background  = (city.industryCol || city.col) + '08';

  document.getElementById('cm-status-text').textContent = city.status || 'Active';
  document.getElementById('cm-role').textContent        = city.role;

  var mVals = ['cm-m1-val','cm-m2-val','cm-m3-val'];
  var mLbls = ['cm-m1-lbl','cm-m2-lbl','cm-m3-lbl'];
  (city.metrics || []).forEach(function(m, i) {
    document.getElementById(mVals[i]).textContent      = m.val;
    document.getElementById(mVals[i]).style.color      = city.col;
    document.getElementById(mVals[i]).style.textShadow = '0 0 12px ' + city.col + '55';
    document.getElementById(mLbls[i]).textContent      = m.lbl;
  });

  var impactEl = document.getElementById('cm-impact');
  impactEl.innerHTML = '';
  (city.impact || []).forEach(function(item) {
    var div = document.createElement('div');
    div.className = 'cm-impact-item';
    div.innerHTML = '<span class="cm-impact-arrow" style="color:' + city.col + '">▸</span><span>' + item + '</span>';
    impactEl.appendChild(div);
  });

  document.getElementById('cm-detail').textContent = city.detail || '';
  document.getElementById('cm-tags').innerHTML = (city.tags || [])
    .map(function(t) { return '<span class="cm-tag" style="border-color:' + city.col + '22;color:' + city.col + '">' + t + '</span>'; })
    .join('');

  var btn = document.getElementById('cm-btn-primary');
  btn.style.borderColor = city.col + '66';
  btn.style.color       = city.col;
  btn.onclick = function() {
    if (city.link && city.link !== '#') window.open(city.link, '_blank');
    else closeCity();
  };

  document.getElementById('cityModal').classList.add('on');
  document.getElementById('city-overlay').style.pointerEvents = 'all';
}

function closeCity() {
  document.getElementById('cityModal').classList.remove('on');
  setTimeout(function() {
    document.getElementById('city-overlay').style.pointerEvents = 'none';
    /* clear tour-active on all panel buttons when card closes manually */
    CITIES.forEach(function(c) {
      if (c._panelBtn) c._panelBtn.classList.remove('tour-active');
      if (c._halo) c._halo.material.opacity = 0.20;
    });
  }, 460);
}

document.getElementById('city-overlay').addEventListener('click', function(e) {
  if (e.target === document.getElementById('city-overlay')) closeCity();
});
