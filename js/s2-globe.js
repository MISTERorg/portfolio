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

/* ── currently open city — used for live language refresh ── */
let _openCity = null;

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
   CITY DATA — resume-accurate entries
   Each city has a unique `key` used for i18n lookups.
═══════════════════════════════════════════════════ */
var CITIES = [
  {
    key: 'valencia',
    name:'Valencia', country:'Spain', lat:39.47, lon:-0.38,
    role:'DevOps & Automation Engineer',
    company:'Óxido Verde', icon:'🔧',
    industry:'E-Commerce · ERP Integration', industryCol:'#00f2ff',
    status:'Hybrid Contract · Mar 2026–Present',
    metrics:[{val:'−60%',lbl:'Data Latency'},{val:'99.9%',lbl:'Uptime'},{val:'−30%',lbl:'Integration Cost'}],
    impact:[
      'Engineered Python Integration Hub syncing Odoo ERP with TikTok Shop, eBay & 7+ high-volume platforms',
      'Architected data transformation pipelines reducing inconsistencies by ~95% across JSON/XML & PostgreSQL',
      'Built RESTful API connectors automating order fulfillment and inventory reconciliation at scale'
    ],
    detail:'Leading DevOps & automation engineering at Óxido Verde, Valencia. Architecting real-time e-commerce data infrastructure connecting Odoo Community ERP with global marketplaces — delivering 60% latency reduction and 30% integration cost savings.',
    tags:['Python','Odoo','REST API','PostgreSQL','JSON/XML','TikTok Shop API','eBay API','Automation'],
    link:'#', col:'#00f2ff'
  },
  {
    key: 'tokyo',
    name:'Tokyo', country:'Japan', lat:35.68, lon:139.69,
    role:'Technical Support & Automation Engineer',
    company:'Hosono DE', icon:'🤖',
    industry:'AI Automation · LLMOps', industryCol:'#ff6688',
    status:'Hybrid Contract · Oct 2025–Jun 2026',
    metrics:[{val:'n8n+',lbl:'Automation Stack'},{val:'ISO 27001',lbl:'Compliance'},{val:'100%',lbl:'GDPR'}],
    impact:[
      'Built and deployed end-to-end n8n & Ansible/Semaphore automations for testing, tracking and server inventory',
      'Refined Hosono AI — internal LLM-driven agent automating data processing for a distributed international team',
      'Architected cloud-native IAM with MFA and least-privilege access achieving GDPR & ISO 27001 compliance'
    ],
    detail:'Hybrid automation engineering role in Tokyo. Deployed production n8n and Ansible/Semaphore workflows, refined an in-house LLM automation agent (Hosono AI), and engineered cloud-native IAM security frameworks across Shopify and Shopware ecosystems.',
    tags:['n8n','Ansible','Semaphore','LLM','IAM','GDPR','Shopify','Shopware','Jira','Slack'],
    link:'#', col:'#ff6688'
  },
  {
    key: 'prague',
    name:'Prague', country:'Czech Republic', lat:50.08, lon:14.43,
    role:'Data & Automation Engineer',
    company:'A-B InBev', icon:'⚗️',
    industry:'Data Engineering · Automation', industryCol:'#00ff9d',
    status:'Remote Contract · Feb 2024–Aug 2024',
    metrics:[{val:'2K+',lbl:'Candidates Screened'},{val:'92%',lbl:'Match Accuracy'},{val:'99.9%',lbl:'Data Integrity'}],
    impact:[
      'Automated screening of 2,000+ candidates via Make.com workflows, improving matching accuracy by 92%',
      'Reduced HR manual review time by 20+ hours through intelligent pipeline automation',
      'Built Python data pipelines (Pandas, NumPy) with Regex PII normalisation achieving 99.9% data integrity'
    ],
    detail:'Remote data engineering contract at A-B InBev, one of the world\'s largest beverage companies. Built automated HR screening workflows and enterprise-grade Python data pipelines for large-scale dataset standardisation across JSON/XML and PostgreSQL workflows.',
    tags:['Python','Make.com','Pandas','NumPy','Regex','PostgreSQL','Automation','Data Pipelines'],
    link:'#', col:'#00ff9d'
  },
  {
    key: 'sanjose',
    name:'San Jose', country:'USA', lat:37.34, lon:-121.89,
    role:'CyberOps Engineer',
    company:'Cisco Systems, Inc.', icon:'🔵',
    industry:'Cybersecurity · Networking', industryCol:'#00aaff',
    status:'Remote Contract · Jun 2023–Nov 2023',
    metrics:[{val:'−20%',lbl:'MTTR'},{val:'50+',lbl:'Sites Secured'},{val:'−60%',lbl:'Provision Time'}],
    impact:[
      'Enhanced SOAR playbooks and security workflows, reducing Mean Time to Respond (MTTR) by 20%',
      'Standardised and automated global security infrastructure via Ansible & Terraform across 50+ sites',
      'Mitigated high-risk incidents and slashed provisioning time by up to 60% through IaC automation'
    ],
    detail:'Remote CyberOps engineering at Cisco Systems\' global headquarters. Enhanced enterprise SOAR automation, hardened security workflows, and delivered Infrastructure-as-Code rollouts scaling network security across 50+ international sites.',
    tags:['Ansible','Terraform','SOAR','Python','IaC','Wireshark','Nmap','SIEM','Cisco IOS'],
    link:'#', col:'#00aaff'
  },
  {
    key: 'buea',
    name:'Buea', country:'Cameroon', lat:4.15, lon:9.24,
    role:'IT Support & Instructional Assistant',
    company:'College of Technology', icon:'📡',
    industry:'Academia · Network Engineering', industryCol:'#ff9900',
    status:'Onsite Contract · Dec 2022–Jun 2023',
    metrics:[{val:'89%',lbl:'Learning Gain'},{val:'100%',lbl:'Policy Compliance'},{val:'6+',lbl:'Lab Modules'}],
    impact:[
      'Provisioned and maintained enterprise-grade network infrastructure: routers, firewalls, and IAM systems',
      'Improved student learning efficiency by up to 89% through structured enterprise networking lab protocols',
      'Ensured full compliance with institutional security policies across all Cisco network infrastructure'
    ],
    detail:'Onsite Cisco IT support and instructional role at the College of Technology, Buea — the Silicon Valley of Cameroon. Maintained enterprise networking labs, designed structured curriculum materials, and mentored students in network engineering and security.',
    tags:['Cisco','Networking','Firewalls','IAM','Linux','TCP/IP','Routing','Security'],
    link:'#', col:'#ff9900'
  },
  {
    key: 'douala',
    name:'Douala', country:'Cameroon', lat:4.05, lon:9.77,
    role:'Lead DevOps Consultant & Full Stack Dev',
    company:'MisterComp · Rocket 234', icon:'🚀',
    industry:'SaaS · DevOps · Full Stack', industryCol:'#b44dff',
    status:'Consulting · Feb 2021–Present',
    metrics:[{val:'99.9%',lbl:'Uptime SLA'},{val:'−20%',lbl:'Release Cycles'},{val:'99.99%',lbl:'Availability'}],
    impact:[
      'Lead DevOps Consultant at MisterComp: defined technical strategy ensuring 99.9% operational continuity',
      'Full Stack Developer at Rocket 234: delivered scalable solutions with 99.99% system availability',
      'Spearheaded CI/CD pipeline automation and DevOps transformation, reducing release cycles by 20%+'
    ],
    detail:'Concurrent dual-role base in Douala. As Lead DevOps Consultant at MisterComp, defined technology strategy, cloud infrastructure, and cybersecurity services. As Full Stack Developer at Rocket 234, delivered production-grade full-stack platforms and orchestrated end-to-end SDLC.',
    tags:['Django','Angular','AWS','Docker','GitLab CI','PostgreSQL','Terraform','Ansible','Odoo'],
    link:'https://gitlab.com/mistercomp1/', col:'#b44dff'
  },
  {
    key: 'pune',
    name:'Pune', country:'India', lat:18.52, lon:73.86,
    role:'Graduate Researcher — M.Sc. Computer Science',
    company:'MIT World Peace University', icon:'🎓',
    industry:'Academia · AI / ML Research', industryCol:'#f0c040',
    status:'M.Sc. · Distinction (Top Tier) · 2021–2023',
    metrics:[{val:'Distinction',lbl:'Grade'},{val:'2×',lbl:'Merit Scholarship'},{val:'Top Tier',lbl:'Cohort'}],
    impact:[
      'Awarded M.Sc. in Computer Science with Distinction — Top Tier of cohort',
      'Received two consecutive merit-based scholarships recognising academic excellence',
      'Research focus: AIOps automation, cloud-native DevOps, distributed infrastructure and ML pipelines'
    ],
    detail:'Full-time M.Sc. Computer Science at Vishwanath Karad MIT World Peace University, Pune, India. Graduated with Distinction (Top Tier) and earned two consecutive merit-based scholarships. Specialised in AIOps, predictive automation, and cloud-native systems design.',
    tags:['Python','TensorFlow','Kubernetes','Prometheus','scikit-learn','AIOps','Research','GCP'],
    link:'#', col:'#f0c040'
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

      var iconSpan = document.createElement('span');
      iconSpan.className = 'clist-icon';
      iconSpan.textContent = city.icon;

      var textDiv = document.createElement('div');
      textDiv.className = 'clist-text';

      var nameSpan = document.createElement('span');
      nameSpan.className = 'clist-name';
      nameSpan.textContent = city.name;

      var roleSpan = document.createElement('span');
      roleSpan.className = 'clist-role';
      roleSpan.textContent = city.role;
      city._roleEl = roleSpan;   // store ref for language refresh

      textDiv.appendChild(nameSpan);
      textDiv.appendChild(roleSpan);

      var cornerTL = document.createElement('span');
      cornerTL.className = 'clist-corner clist-corner-tl';
      var cornerBR = document.createElement('span');
      cornerBR.className = 'clist-corner clist-corner-br';

      btn.appendChild(iconSpan);
      btn.appendChild(textDiv);
      btn.appendChild(cornerTL);
      btn.appendChild(cornerBR);

      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        /* ── Tron fire animation ── */
        btn.classList.remove('btn-firing');
        void btn.offsetWidth;
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
    /* Project the pin-head world position to 2D canvas coords. */
    var localPos = ll2v(city.lat, city.lon, 1.16);
    var euler    = new THREE.Euler(rotState.rotX, rotState.rotY, 0, 'XYZ');
    var worldPos = localPos.clone().applyEuler(euler);
    var projected = worldPos.project(cam);

    if (projected.z > 1) return;

    var wW = wrap.clientWidth  || W;
    var wH = wrap.clientHeight || H;
    var px = ( projected.x * 0.5 + 0.5) * wW;
    var py = (-projected.y * 0.5 + 0.5) * wH;

    var tr = getCityTranslated(city);

    pinLabelEl.style.left = px + 'px';
    pinLabelEl.style.top  = py + 'px';
    pinLabelEl.innerHTML  =
      '<span class="pnl-dot" style="background:' + city.col + ';box-shadow:0 0 8px ' + city.col + '"></span>' +
      '<div class="pnl-text">' +
        '<span class="pnl-name" style="color:' + city.col + '">' + city.name + '</span>' +
        '<span class="pnl-country">' + city.country + '</span>' +
        '<span class="pnl-role">' + tr.role + '</span>' +
      '</div>';
    pinLabelEl.style.borderColor = city.col + '55';
    pinLabelEl.className = 'on';
  }

  function hidePinLabel() {
    pinLabelEl.classList.remove('on');
  }

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
      CITIES.forEach(function(c) {
        if (c._panelBtn) c._panelBtn.classList.remove('tour-active');
        if (c._halo) c._halo.material.opacity = 0.20;
      });
      if (city._panelBtn) city._panelBtn.classList.add('tour-active');
      if (city._halo) city._halo.material.opacity = 0.85;
      _animToCity(city).then(function() { showCity(city); });
    }
  });

  /* ═══════════════════════════════════════════════════
     DRAG TO ROTATE
  ═══════════════════════════════════════════════════ */
  var dragging = false, prevMx = 0, prevMy = 0, dragDist = 0;

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

  canvas.addEventListener('touchstart', function(e) {
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

  canvas.addEventListener('touchend', function(e) {
    dragging = false;
    var wasDrag = dragDist > 10;
    clickLocked = wasDrag;
    if (!wasDrag && e.changedTouches.length) {
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

  canvas.addEventListener('touchmove', function(e) {
    if (!dragging || !e.touches.length) return;
    var dx = e.touches[0].clientX - prevMx, dy = e.touches[0].clientY - prevMy;
    dragDist += Math.abs(dx) + Math.abs(dy);
    rotState.rotY += dx * 0.007;
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

  _tourRunner = _runTour;

} /* end initGlobe */


/* ═══════════════════════════════════════════════════
   i18n HELPER — returns translated city content
   Falls back to the raw city object values if no
   translation key is found for the current language.
═══════════════════════════════════════════════════ */
function getCityTranslated(city) {
  var t = {};
  if (typeof I18N !== 'undefined' && typeof getLang === 'function') {
    t = I18N[getLang()] || {};
  }
  var k = city.key || '';
  return {
    role:     t['city-' + k + '-role']     || city.role,
    industry: t['city-' + k + '-industry'] || city.industry,
    status:   t['city-' + k + '-status']   || city.status,
    metrics:  (city.metrics || []).map(function(m, i) {
      return { val: m.val, lbl: t['city-' + k + '-m' + (i + 1) + '-lbl'] || m.lbl };
    }),
    impact:   (city.impact || []).map(function(item, i) {
      return t['city-' + k + '-i' + (i + 1)] || item;
    }),
    detail:   t['city-' + k + '-detail'] || city.detail,
  };
}

/* ── Refresh panel button role labels when language switches ── */
function refreshCityPanel() {
  CITIES.forEach(function(city) {
    if (city._roleEl) {
      city._roleEl.textContent = getCityTranslated(city).role;
    }
  });
}
window.refreshCityPanel = refreshCityPanel;


/* ═══════════════════════════════════════════════════
   CITY MODAL — show / close
═══════════════════════════════════════════════════ */
function showCity(city) {
  _openCity = city;
  var tr = getCityTranslated(city);

  /* ── get UI strings from i18n, with English fallbacks ── */
  var uiT = {};
  if (typeof I18N !== 'undefined' && typeof getLang === 'function') {
    uiT = I18N[getLang()] || {};
  }
  var s = function(key, fb) { return uiT[key] !== undefined ? uiT[key] : fb; };

  document.getElementById('cm-city').textContent        = city.name + ', ' + city.country;
  document.getElementById('cm-logo').textContent         = city.icon || '🏢';
  document.getElementById('cm-logo').style.background    = 'linear-gradient(135deg,' + city.col + '18,' + city.col + '06)';
  document.getElementById('cm-logo').style.borderColor   = city.col + '33';
  document.getElementById('cm-company-name').textContent = city.company;

  var ind = document.getElementById('cm-industry');
  ind.textContent       = tr.industry;
  ind.style.color       = city.industryCol || city.col;
  ind.style.borderColor = (city.industryCol || city.col) + '44';
  ind.style.background  = (city.industryCol || city.col) + '08';

  document.getElementById('cm-status-text').textContent = tr.status || 'Active';
  document.getElementById('cm-role').textContent        = tr.role;

  /* ── static section labels ── */
  var posLabel = document.querySelector('#cityModal .cm-role-label');
  if (posLabel) posLabel.textContent = s('cm-position-label', 'Position Held');

  var impactLabel = document.querySelector('#cityModal .cm-impact-block .cm-section-label');
  if (impactLabel) impactLabel.textContent = s('cm-impact-label', 'Key Impact');

  var overviewLabel = document.querySelector('#cityModal .cm-detail-block .cm-section-label');
  if (overviewLabel) overviewLabel.textContent = s('cm-overview-label', 'Overview');

  var stackLabel = document.querySelector('#cityModal .cm-tags-block .cm-section-label');
  if (stackLabel) stackLabel.textContent = s('cm-stack-label', 'Tech Stack');

  /* ── header close button ── */
  var closeXBtn = document.querySelector('#cityModal .cm-close');
  if (closeXBtn) closeXBtn.textContent = s('cm-close-x', '✕ CLOSE');

  /* ── footer close button ── */
  var closeFootBtn = document.querySelector('#cityModal .cm-btn-secondary');
  if (closeFootBtn) closeFootBtn.textContent = s('cm-btn-close', '← CLOSE');

  var mVals = ['cm-m1-val','cm-m2-val','cm-m3-val'];
  var mLbls = ['cm-m1-lbl','cm-m2-lbl','cm-m3-lbl'];
  (tr.metrics || []).forEach(function(m, i) {
    document.getElementById(mVals[i]).textContent      = m.val;
    document.getElementById(mVals[i]).style.color      = city.col;
    document.getElementById(mVals[i]).style.textShadow = '0 0 12px ' + city.col + '55';
    document.getElementById(mLbls[i]).textContent      = m.lbl;
  });

  var impactEl = document.getElementById('cm-impact');
  impactEl.innerHTML = '';
  (tr.impact || []).forEach(function(item) {
    var div = document.createElement('div');
    div.className = 'cm-impact-item';
    div.innerHTML = '<span class="cm-impact-arrow" style="color:' + city.col + '">▸</span><span>' + item + '</span>';
    impactEl.appendChild(div);
  });

  document.getElementById('cm-detail').textContent = tr.detail || '';
  document.getElementById('cm-tags').innerHTML = (city.tags || [])
    .map(function(t) { return '<span class="cm-tag" style="border-color:' + city.col + '22;color:' + city.col + '">' + t + '</span>'; })
    .join('');

  var btn = document.getElementById('cm-btn-primary');
  btn.style.borderColor = city.col + '66';
  btn.style.color       = city.col;
  btn.textContent       = s('cm-btn-view', '→ VIEW PROFILE');
  btn.onclick = function() {
    if (city.link && city.link !== '#') window.open(city.link, '_blank');
    else closeCity();
  };

  document.getElementById('cityModal').classList.add('on');
  document.getElementById('city-overlay').style.pointerEvents = 'all';
}

/* Re-render the open modal in the new language (called from setGlobalLang) */
function refreshOpenModal() {
  if (_openCity && document.getElementById('cityModal').classList.contains('on')) {
    showCity(_openCity);
  }
}
window.refreshOpenModal = refreshOpenModal;

function closeCity() {
  _openCity = null;
  document.getElementById('cityModal').classList.remove('on');
  setTimeout(function() {
    document.getElementById('city-overlay').style.pointerEvents = 'none';
    CITIES.forEach(function(c) {
      if (c._panelBtn) c._panelBtn.classList.remove('tour-active');
      if (c._halo) c._halo.material.opacity = 0.20;
    });
  }, 460);
}

document.getElementById('city-overlay').addEventListener('click', function(e) {
  if (e.target === document.getElementById('city-overlay')) closeCity();
});
