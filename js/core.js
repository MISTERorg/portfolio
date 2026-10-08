'use strict';
/* ═══════════════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const secs = ['s1','s2','s3','s4','s5','s6'];

/* ── URL-driven + browser-driven language init ──
   Reads ?lang= on load so the hreflang alternates listed in sitemap.xml
   (…/?lang=fr etc.) actually serve localized content to crawlers and
   visitors, not just the default English. Also keeps <html lang="…">
   accurate (screen readers + search engines both read it) and updates
   the URL (without adding history entries) when someone switches
   language via the nav buttons, so the language they land on is
   always shareable/bookmarkable/re-crawlable.

   When there's no explicit ?lang=, falls back to the browser's own
   language preference (navigator.languages, in the visitor's own
   priority order) so a French-language browser lands on the French
   site automatically. Anything that isn't EN/FR/ES/JA defaults to
   English. An explicit ?lang= always wins over auto-detection, since
   that's how shared links and search-engine crawls stay pinned to a
   specific language regardless of the visitor's own browser. ── */
(function initLangFromURL(){
  const SUPPORTED = ['en','fr','es','ja'];

  /* Reduces a full BCP-47 tag ("fr-CA", "es-419", "ja") down to one of
     our 4 supported codes, or null if there's no match. */
  function normalizeLang(tag){
    if (!tag) return null;
    const base = String(tag).toLowerCase().split('-')[0];
    return SUPPORTED.includes(base) ? base : null;
  }

  function detectBrowserLang(){
    const prefs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage];
    for (const tag of prefs) {
      const match = normalizeLang(tag);
      if (match) return match;
    }
    return 'en';
  }

  const params = new URLSearchParams(location.search);
  const urlLang = params.get('lang');
  const initialLang = SUPPORTED.includes(urlLang) ? urlLang : detectBrowserLang();

  if (initialLang !== 'en' && typeof setGlobalLang === 'function') {
    setGlobalLang(initialLang);
  }
  document.documentElement.lang = initialLang;

  document.querySelectorAll('.ln-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.textContent.trim().toLowerCase();
      if (!SUPPORTED.includes(code)) return;
      document.documentElement.lang = code;
      const url = new URL(location.href);
      if (code === 'en') url.searchParams.delete('lang');
      else url.searchParams.set('lang', code);
      history.replaceState(null, '', url);
    });
  });
})();

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
      if(id==='s4') gsap.from('.bn-frame',{opacity:0,y:28,stagger:.07,duration:.8,ease:'power2.out'});
      if(id==='s5') gsap.from('.cred-card',{y:42,opacity:0,stagger:.12,duration:.75,ease:'power2.out'});
    }
    if(id==='s6') initTerminal();
    revIO.unobserve(e.target);
  });
},{threshold:.18});
secs.slice(1).forEach(id=>revIO.observe($(id)));

/* ── Universal reveal: fades/rises .reveal elements into view (section
   headers etc.) with a slower, calmer easing than the card reveals above.
   Skipped under prefers-reduced-motion — CSS already shows them statically. ── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!prefersReducedMotion){
  const revealIO=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        revealIO.unobserve(e.target);
      }
    });
  },{threshold:.15,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>revealIO.observe(el));
}else{
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
}

/* ── Hero ambient parallax: the core-glow and monogram drift slightly
   as the hero scrolls past, echoing the slow scroll-linked drift of the
   reference site. Subtle and capped — never more than ~40px — and
   fully disabled under prefers-reduced-motion. ── */
if(!prefersReducedMotion){
  const heroCore=$('heroCore'), heroMon=$('emon'), heroSec=$('s1');
  if(heroCore && heroSec){
    let ticking=false;
    const applyParallax=()=>{
      const r=heroSec.getBoundingClientRect();
      const vh=window.innerHeight;
      /* progress: 0 when hero fills viewport, →1 as it scrolls away */
      const progress=Math.min(1,Math.max(0,(-r.top)/vh));
      const drift=progress*40;
      heroCore.style.transform=`translate(-50%,-52%) translateY(${drift}px)`;
      if(heroMon) heroMon.style.transform=`translateY(${drift*.5}px)`;
      heroCore.style.opacity=String(1-progress*.4);
      ticking=false;
    };
    window.addEventListener('scroll',()=>{
      if(!ticking){requestAnimationFrame(applyParallax);ticking=true;}
    },{passive:true});
    applyParallax();
  }
}

/* ── Sidenav progress fill: a subtle "how far through the portfolio"
   cue behind the section dots — a glowing line that grows with
   overall scroll position. Always active (not gated behind
   prefers-reduced-motion) since it's a state indicator, not a moving
   decoration — but its CSS transition is disabled for that preference
   so it jumps instead of animating. ── */
(function(){
  const fill = $('sidenavFill');
  if(!fill) return;
  let ticking = false;
  const applyProgress = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
    fill.style.height = pct + '%';
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if(!ticking){ requestAnimationFrame(applyProgress); ticking = true; }
  }, {passive:true});
  window.addEventListener('resize', applyProgress, {passive:true});
  applyProgress();
})();

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
   One resume per language. UI language codes (en/fr/es/ja) map to
   resume filename suffixes below — note ja → _jp to match the actual
   filenames (ELAD_DAUDET_RESUME_en/fr/es/jp.pdf). Any language not listed
   in RESUME_AVAILABLE falls back to the English resume.
═══════════════════════════════════════════════════ */
const RESUME_SUFFIX = { en: 'en', fr: 'fr', es: 'es', ja: 'jp' };
const RESUME_FALLBACK = 'ELAD_DAUDET_RESUME_en.pdf';
/* Resumes that actually exist in the site root. Add/remove a language here
   when you add/remove its PDF. A static list is used instead of a runtime
   HEAD request because that check fails under file:// and on hosts that
   reject HEAD, which silently forced every download to the English file. */
const RESUME_AVAILABLE = ['en', 'fr', 'es', 'ja'];

function resolveResumeURL(){
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  if (!RESUME_AVAILABLE.includes(lang)) return RESUME_FALLBACK;
  return `ELAD_DAUDET_RESUME_${RESUME_SUFFIX[lang]}.pdf`;
}

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
  const url = resolveResumeURL();
  const a=document.createElement('a');
  a.href=url;
  a.download=url;
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
  const run = (fn) => { try { fn(); } catch (e) { console.error('[initAll]', fn.name || 'section init', 'failed:', e); } };
  run(spawnStreams);
  run(initHeroParticles);
  run(initGlobe);
  run(initNeural);
  run(initHoloCards);
  run(initContactForm);
  run(checkXR);
  setTimeout(()=>{
    animCount($('cnt1'),6,'+');
    animCount($('cnt2'),7);
    animCount($('cnt3'),2);
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