'use strict';
/* ═══════════════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const secs = ['s1','s2','s3','s4','s5','s6'];

/* ── Inject #warp element (used by warp animation) ── */
(function(){
  if (!$('warp')) {
    const w = document.createElement('div');
    w.id = 'warp';
    document.body.appendChild(w);
  }
})();

/* ── Custom Cursor ── */
const cur=$('cur'), curd=$('curd');
let mx=window.innerWidth/2, my=window.innerHeight/2, cx=mx, cy=my;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;curd.style.left=mx+'px';curd.style.top=my+'px'});
(function animCursor(){cx+=(mx-cx)*.16;cy+=(my-cy)*.16;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(animCursor)})();

/* ── Cursor hover — event delegation catches ALL elements including dynamically
   created ones (globe city panel, bento cards, etc.).
   Counter-based so rapid enter/leave pairs don't desync the .hov class. ── */
const HOV_SEL = 'button, a, .nd, .r-pedestal, .emon-3d, .holo-wrap, .soc-btn, .lt-btn, .clist-btn, .bento-card, .tech-tag, .cm-btn, .cm-close, .cred-card';
let _hovCount = 0;
document.addEventListener('mouseover', e => {
  if (e.target.closest(HOV_SEL)) {
    _hovCount++;
    document.body.classList.add('hov');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest(HOV_SEL)) {
    _hovCount = Math.max(0, _hovCount - 1);
    if (_hovCount === 0) document.body.classList.remove('hov');
  }
});

/* ── Clock ── */
(function clock(){
  const d=new Date(),h=d.getUTCHours(),m=d.getUTCMinutes(),s=d.getUTCSeconds();
  const p=n=>String(n).padStart(2,'0');
  $('tclock').textContent=`${p(h)}:${p(m)}:${p(s)} UTC`;
  setTimeout(clock,1000);
})();

/* ── Section navigation ── */
function gotoSec(i){$(secs[i]).scrollIntoView({behavior:'smooth'})}
const navDots=document.querySelectorAll('.nd');
const secIO=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const i=secs.indexOf(e.target.id);
      navDots.forEach((n,j)=>n.classList.toggle('on',j===i));
    }
  });
},{threshold:.5});
secs.forEach(id=>secIO.observe($(id)));

/* ── Reveal animations ── */
const revIO=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    const id=e.target.id;
    if(typeof gsap!=='undefined'){
      if(id==='s2'){
        gsap.from('#globe-wrap',{scale:.82,opacity:0,duration:1.1,ease:'back.out(1.6)'});
        setTimeout(()=>{if(typeof triggerGlobeTour==='function') triggerGlobeTour();},1100);
      }
      if(id==='s3') gsap.from('.holo-wrap',{y:55,opacity:0,stagger:.1,duration:.85,ease:'power3.out'});
      if(id==='s4') gsap.from('#neuralCanvas',{opacity:0,scale:.94,duration:.9,ease:'power2.out'});
      if(id==='s5') gsap.from('.cred-card',{y:42,opacity:0,stagger:.12,duration:.75,ease:'power2.out'});
    }
    if(id==='s6') initTerminal();
    revIO.unobserve(e.target);
  });
},{threshold:.18});
secs.slice(1).forEach(id=>revIO.observe($(id)));

/* ═══════════════════════════════════════════════════
   LOADER
═══════════════════════════════════════════════════ */
const ldrSeq=[
  [300,  'INITIALIZING', '> loading three.js engine...', 18],
  [800,  'CONNECTING',   '> mapping global nexus nodes...', 38],
  [1200, 'COMPILING',    '> building skill neural graph...', 58],
  [1600, 'RENDERING',    '> initializing 3D globe...', 80],
  [2000, 'ONLINE',       '> system ready.', 100],
];
ldrSeq.forEach(([t,lt,lc,pct])=>setTimeout(()=>{
  $('ltext').textContent=lt;
  $('lcode').textContent=lc;
  $('lb').style.width=pct+'%';
},t));
setTimeout(()=>{
  $('ldr').classList.add('hide');
  setTimeout(()=>{$('ldr').style.display='none';initAll();},900);
},2600);

/* ── Counter animation ── */
function animCount(el,to,suffix=''){
  let n=0;const steps=55;const dur=1800;
  const iv=setInterval(()=>{
    n=Math.min(n+Math.ceil(to/steps),to);
    el.textContent=n+suffix;
    if(n>=to)clearInterval(iv);
  },dur/steps);
}

/* ═══════════════════════════════════════════════════
   FLY-THROUGH — Warp radial burst (matching elad.html)
   The #warp div is injected above and styled in global.css.
   Does NOT lock scrolling — the page remains freely scrollable
   during and after the globe tour animation.
═══════════════════════════════════════════════════ */
function flyThrough(){
  /* click sound */
  try{
    const ac=new AudioContext(),o=ac.createOscillator(),g=ac.createGain();
    o.connect(g);g.connect(ac.destination);
    o.frequency.setValueAtTime(880,ac.currentTime);
    o.frequency.exponentialRampToValueAtTime(1320,ac.currentTime+.08);
    g.gain.setValueAtTime(.06,ac.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.18);
    o.start();o.stop(ac.currentTime+.18);
  }catch(e){}

  const warp=$('warp');
  /* Two rAF to force the browser to paint before transitioning */
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    warp.classList.add('flash');
    setTimeout(()=>{
      /* Jump to globe section during the white-out so the snap is invisible */
      gotoSec(1);
      /* Fade warp back out */
      warp.classList.remove('flash');
      /* Fire globe tour after scroll settles */
      setTimeout(()=>{
        if(typeof triggerGlobeTour==='function') triggerGlobeTour();
      }, 600);
    }, 380);
  }));
}

/* ═══════════════════════════════════════════════════
   CV DOWNLOAD
═══════════════════════════════════════════════════ */
function downloadCV(){
  try{
    const ac=new AudioContext(),osc=ac.createOscillator(),g=ac.createGain();
    osc.connect(g);g.connect(ac.destination);
    osc.frequency.setValueAtTime(220,ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880,ac.currentTime+.14);
    osc.frequency.setValueAtTime(440,ac.currentTime+.14);
    g.gain.setValueAtTime(.12,ac.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.55);
    osc.start();osc.stop(ac.currentTime+.55);
  }catch(e){}
  const a=document.createElement('a');
  a.href='ELAD_ANEDO_DAUDET.docx';
  a.download='Elad_Anedo_Daudet_CV.docx';
  a.click();
}

/* ═══════════════════════════════════════════════════
   WebXR
═══════════════════════════════════════════════════ */
function checkXR(){
  if(navigator&&navigator.xr)
    navigator.xr.isSessionSupported('immersive-vr').then(s=>{if(s)$('vrbtn').style.display='block'});
}
function enterVR(){
  if(navigator&&navigator.xr)
    navigator.xr.requestSession('immersive-vr').catch(()=>alert('Connect a WebXR-compatible headset to enter VR mode.'));
}

/* ═══════════════════════════════════════════════════
   INIT ALL
═══════════════════════════════════════════════════ */
function initAll(){
  spawnStreams();
  initHeroParticles();
  initGlobe();
  initNeural();
  initHoloCards();
  checkXR();
  setTimeout(()=>{
    animCount($('cnt1'),6,'+');
    animCount($('cnt2'),9);
    animCount($('cnt3'),12);
    animCount($('cnt4'),4);
  },400);
}

/* ═══════════════════════════════════════════════════
   HOLO CARDS — Parallax tilt on mousemove
   Disabled automatically on touch via @media (hover:none)
═══════════════════════════════════════════════════ */
function initHoloCards(){
  if(!window.matchMedia('(hover:hover)').matches) return;
  document.querySelectorAll('.holo-wrap').forEach(wrap=>{
    const card = wrap.querySelector('.holo-card');
    if(!card) return;
    wrap.addEventListener('mousemove', e=>{
      const r  = wrap.getBoundingClientRect();
      const dx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2);
      const dy = (e.clientY - r.top   - r.height / 2) / (r.height / 2);
      card.style.transform = `rotateY(${dx*13}deg) rotateX(${-dy*9}deg) scale(1.025)`;
    });
    wrap.addEventListener('mouseleave', ()=>{
      card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
  });
}
