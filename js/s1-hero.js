/* ═══════════════════════════════════════════════════
   SEC 1 — DATA STREAMS
═══════════════════════════════════════════════════ */
function spawnStreams(){
  const s1=$('s1');
  for(let i=0;i<12;i++){
    const d=document.createElement('div');
    d.className='dstream';
    const left=Math.random()*100;
    const h=60+Math.random()*120;
    const spd=4+Math.random()*8;
    const del=Math.random()*6;
    Object.assign(d.style,{
      left:left+'%',
      height:h+'px',
      animationDuration:spd+'s',
      animationDelay:del+'s',
      opacity:(.06+Math.random()*.12)
    });
    s1.appendChild(d);
  }
}

/* ═══════════════════════════════════════════════════
   SEC 1 — HERO PARTICLES (Three.js)
═══════════════════════════════════════════════════ */
function initHeroParticles(){
  const canvas=$('hero-canvas');
  const W=window.innerWidth, H=window.innerHeight;
  canvas.width=W; canvas.height=H;

  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setSize(W,H); renderer.setPixelRatio(Math.min(devicePixelRatio,2));

  const scene=new THREE.Scene();
  const cam=new THREE.PerspectiveCamera(65,W/H,.1,1000);
  cam.position.z=55;

  /* ── Particle field ── */
  const N=3200, pos=new Float32Array(N*3), col=new Float32Array(N*3);
  for(let i=0;i<N;i++){
    pos[i*3]=(Math.random()-.5)*220;
    pos[i*3+1]=(Math.random()-.5)*130;
    pos[i*3+2]=(Math.random()-.5)*90;
    const r=Math.random();
    if(r<.55){col[i*3]=0;col[i*3+1]=.95;col[i*3+2]=1}
    else if(r<.8){col[i*3]=0;col[i*3+1]=1;col[i*3+2]=.62}
    else{col[i*3]=.7;col[i*3+1]=.3;col[i*3+2]=1}
  }
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  geo.setAttribute('color',new THREE.BufferAttribute(col,3));
  const pts=new THREE.Points(geo,new THREE.PointsMaterial({
    size:.5,vertexColors:true,transparent:true,opacity:.6,sizeAttenuation:true
  }));
  scene.add(pts);

  /* ── Wireframe "E" geometry (boxes) ── */
  const eMat=()=>new THREE.MeshBasicMaterial({color:0x00f2ff,wireframe:true,transparent:true,opacity:.1});
  const eG=new THREE.Group();
  [[0,8,0,14,2,2],[0,0,0,10,2,2],[0,-8,0,14,2,2],[-5,0,0,2,20,2]].forEach(([x,y,z,w,h,d])=>{
    const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),eMat());
    m.position.set(x,y,z);eG.add(m);
  });
  eG.position.set(0,0,-18); scene.add(eG);

  /* ── Torus accent rings ── */
  const torus1=new THREE.Mesh(
    new THREE.TorusGeometry(18,0.1,8,60),
    new THREE.MeshBasicMaterial({color:0x00f2ff,transparent:true,opacity:.04})
  );
  const torus2=new THREE.Mesh(
    new THREE.TorusGeometry(28,0.08,8,80),
    new THREE.MeshBasicMaterial({color:0x00ff9d,transparent:true,opacity:.025})
  );
  torus1.rotation.x=Math.PI/3; torus2.rotation.x=Math.PI/4; torus2.rotation.z=.5;
  scene.add(torus1,torus2);

  let tmx=0,tmy=0;
  document.addEventListener('mousemove',e=>{
    tmx=(e.clientX/window.innerWidth-.5)*2;
    tmy=(e.clientY/window.innerHeight-.5)*2;
  });

  let t=0;
  (function anim(){
    requestAnimationFrame(anim);t+=.0035;
    pts.rotation.y=t*.12;pts.rotation.x=t*.04;
    eG.rotation.y+=.004;eG.rotation.x+=.002;
    torus1.rotation.z+=.003;torus2.rotation.y+=.002;
    cam.position.x+=(tmx*10-cam.position.x)*.03;
    cam.position.y+=(-tmy*5-cam.position.y)*.03;
    renderer.render(scene,cam);
  })();

  window.addEventListener('resize',()=>{
    const nW=window.innerWidth,nH=window.innerHeight;
    renderer.setSize(nW,nH);cam.aspect=nW/nH;cam.updateProjectionMatrix();
  });
}
