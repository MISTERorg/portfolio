/* ═══════════════════════════════════════════════════
   SEC 6 — TERMINAL
   Lines come from I18N[currentLang]['terminal-lines']
   so switching language resets and replays the terminal.
═══════════════════════════════════════════════════ */
let termDone = false;

/* ── Inject Tron CSS for terminal section (self-contained) ── */
(function injectTermStyles() {
  if (document.getElementById('term-tron-styles')) return;
  const s = document.createElement('style');
  s.id = 'term-tron-styles';
  s.textContent = `
    /* ── Terminal body: Tron beam border ── */
    @property --term-angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes term-beam-spin { to { --term-angle: 360deg; } }

    .term-body-wrap {
      --term-angle: 0deg;
      padding: 1.5px;
      background: conic-gradient(
        from var(--term-angle),
        rgba(0,242,255,.04)   0%,
        rgba(0,242,255,.04)  65%,
        rgba(0,242,255,.55)  76%,
        rgba(255,255,255,.85) 80%,
        rgba(0,255,157,.55)  84%,
        rgba(0,242,255,.04)  92%,
        rgba(0,242,255,.04) 100%
      );
      animation: term-beam-spin 6s linear infinite;
      box-shadow: 0 0 18px rgba(0,242,255,.06), 0 8px 40px rgba(0,0,0,.6);
      position: relative;
    }

    /* ── Scanline sweep across the terminal body ── */
    .term-scan {
      position: absolute;
      left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(0,242,255,.55), rgba(255,255,255,.4), rgba(0,242,255,.55), transparent);
      pointer-events: none;
      z-index: 10;
      opacity: 0;
      animation: term-scan-move 8s ease-in-out 4s infinite;
    }
    @keyframes term-scan-move {
      0%          { top: 0%;   opacity: 0; }
      2%          { opacity: .7; }
      95%         { opacity: .5; }
      100%        { top: 100%; opacity: 0; }
    }

    /* ── Terminal border pulse beat ── */
    @keyframes term-pulse-glow {
      0%   { box-shadow: 0 0 18px rgba(0,242,255,.06), 0 8px 40px rgba(0,0,0,.6); }
      50%  { box-shadow: 0 0 44px rgba(0,242,255,.22), 0 0 88px rgba(0,242,255,.06), 0 8px 40px rgba(0,0,0,.6); }
      100% { box-shadow: 0 0 18px rgba(0,242,255,.06), 0 8px 40px rgba(0,0,0,.6); }
    }
    .term-body-wrap.pulse { animation: term-pulse-glow .55s ease-out forwards, term-beam-spin 6s linear infinite; }

    /* ── Social button Tron press (JS-driven, no :hover needed) ── */
    .soc-btn {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      position: relative;
      overflow: hidden;
    }
    .soc-btn::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(108deg, transparent 35%, rgba(0,242,255,.09) 50%, transparent 65%);
      transform: translateX(-130%);
      pointer-events: none;
      transition: none;
    }
/* ── Social button Tron press (JS-driven, no :hover needed) ── */
    .soc-btn {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      position: relative;
      overflow: hidden;
    }
    .soc-btn::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(108deg, transparent 35%, rgba(255,255,255,.15) 50%, transparent 65%);
      transform: translateX(-130%);
      pointer-events: none;
      transition: none;
    }
    .soc-btn.soc-pressing {
      border-color: var(--brand) !important;
      color: var(--brand) !important;
      box-shadow: 0 0 22px var(--brand), inset 0 0 14px rgba(255,255,255,.1) !important;
      background: rgba(255,255,255,.05) !important;
    }
    .soc-btn.soc-pressing::after {
      animation: soc-sweep .4s ease-out forwards;
    }
    @keyframes soc-sweep {
      from { transform: translateX(-130%); }
      to   { transform: translateX(160%); }
    }
    .soc-btn.soc-pressing::after {
      animation: soc-sweep .4s ease-out forwards;
    }
    @keyframes soc-sweep {
      from { transform: translateX(-130%); }
      to   { transform: translateX(160%); }
    }

    /* ── CV pedestal Tron press ── */
    .r-top {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      position: relative;
      overflow: hidden;
    }
    .r-top::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(108deg, transparent 35%, rgba(0,242,255,.12) 50%, transparent 65%);
      transform: translateX(-130%);
      pointer-events: none;
    }
    .r-pedestal.ped-pressing {
      transform: translateY(-5px) !important;
      animation: none !important;
      box-shadow: 0 12px 44px rgba(0,0,0,.65), 0 0 42px rgba(0,242,255,.25), 0 0 0 1px rgba(0,242,255,.18) !important;
    }
    .r-pedestal.ped-pressing .r-top {
      border-color: rgba(0,242,255,.55) !important;
      color: #fff !important;
      background: linear-gradient(160deg, rgba(4,16,48,.97) 0%, rgba(2,8,28,.99) 100%) !important;
    }
    .r-pedestal.ped-pressing .r-top::after { animation: cv-sweep .45s ease-out forwards; }
    .r-pedestal.ped-pressing .cv-corner { width: 14px !important; height: 14px !important; opacity: 1 !important; }
    .r-pedestal.ped-pressing .r-top-glow { animation: none !important; opacity: 1 !important; }
  `;
  document.head.appendChild(s);
})();

function initTerminal() {
  if (termDone) return;
  termDone = true;

  const body = document.getElementById('termBody');

  /* Pull lines for whichever language is active.
     Falls back to English if i18n.js hasn't loaded yet. */
  const lang   = (typeof getLang === 'function') ? getLang() : 'en';
  const i18n   = (typeof I18N !== 'undefined' && I18N[lang]) ? I18N[lang] : null;
  const lines  = i18n ? i18n['terminal-lines'] : _terminalFallback();

  lines.forEach(([t, html]) => setTimeout(() => {
    body.insertAdjacentHTML('beforeend', html);
    body.scrollTop = body.scrollHeight;
  }, t));

  /* Launch Tron effects once terminal starts running */
  setTimeout(_initTerminalEffects, 800);
}

/* ── Tron effects layer ── */
function _initTerminalEffects() {
  const body = document.getElementById('termBody');
  if (!body) return;

  /* ── 1. Wrap term-body in beam frame ── */
  const wrap = body.parentElement;
  if (wrap && !wrap.classList.contains('term-body-wrap')) {
    const frame = document.createElement('div');
    frame.className = 'term-body-wrap';
    wrap.insertBefore(frame, body);
    frame.appendChild(body);

    /* Add scanline sweep element inside body */
    const scan = document.createElement('div');
    scan.className = 'term-scan';
    body.style.position = 'relative';
    body.appendChild(scan);
  }

  /* ── 2. Periodic border pulse beat (every ~9s) ── */
  const frame = document.querySelector('.term-body-wrap');
  if (frame) {
    setInterval(() => {
      frame.classList.add('pulse');
      setTimeout(() => frame.classList.remove('pulse'), 600);
    }, 9000);
  }

  /* ── 3. Touch handlers for social buttons (observe for late DOM adds) ── */
  function _attachSocBtn(btn) {
    if (btn.dataset.tron) return;
    btn.dataset.tron = '1';
    btn.addEventListener('touchstart', () => btn.classList.add('soc-pressing'),    { passive: true });
    btn.addEventListener('touchend',   () => btn.classList.remove('soc-pressing'));
    btn.addEventListener('touchcancel',() => btn.classList.remove('soc-pressing'));
  }
  /* Attach to any already in DOM */
  document.querySelectorAll('.soc-btn').forEach(_attachSocBtn);

  /* ── 4. Touch handlers for CV pedestal + inject corner brackets & glow line ── */
  function _attachPedestal(ped) {
    if (ped.dataset.tron) return;
    ped.dataset.tron = '1';

    /* Inject 4 corner bracket spans into r-top */
    const rTop = ped.querySelector('.r-top');
    if (rTop && !rTop.querySelector('.cv-corner')) {
      ['tl','tr','bl','br'].forEach(pos => {
        const c = document.createElement('span');
        c.className = `cv-corner cv-corner-${pos}`;
        rTop.appendChild(c);
      });
    }

    /* Inject breathing glow line below r-top */
    if (!ped.querySelector('.r-top-glow')) {
      const glow = document.createElement('div');
      glow.className = 'r-top-glow';
      const base = ped.querySelector('.r-base');
      if (base) ped.insertBefore(glow, base);
      else ped.appendChild(glow);
    }

    ped.addEventListener('touchstart', () => ped.classList.add('ped-pressing'),    { passive: true });
    ped.addEventListener('touchend',   () => { ped.classList.remove('ped-pressing'); if (typeof downloadCV === 'function') downloadCV(); });
    ped.addEventListener('touchcancel',() => ped.classList.remove('ped-pressing'),  { passive: true });
  }
  document.querySelectorAll('.r-pedestal').forEach(_attachPedestal);

  /* ── 5. MutationObserver — catch dynamically added social/pedestal elements ── */
  const obs = new MutationObserver(() => {
    document.querySelectorAll('.soc-btn:not([data-tron])').forEach(_attachSocBtn);
    document.querySelectorAll('.r-pedestal:not([data-tron])').forEach(_attachPedestal);
  });
  obs.observe(document.body, { childList: true, subtree: true });
}

/* English fallback in case i18n.js loads after this file */
function _terminalFallback() {
  return [
    [600,  '<span class="t-line"><span class="t-out">PONG: connection established ✓</span></span>'],
    [1100, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">whoami --full-profile</span></span>'],
    [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
    [1900, '<span class="t-line"><span class="t-out">  NAME  </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
    [2100, '<span class="t-line"><span class="t-out">  ROLE  </span><span class="t-val">  DevSecOps · Agentic AI Automation Specialist</span></span>'],
    [2300, '<span class="t-line"><span class="t-out">  EMAIL </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
    [2500, '<span class="t-line"><span class="t-out">  TEL   </span><span class="t-val">  +91 89834 61149</span></span>'],
    [2700, '<span class="t-line"><span class="t-out">  BASE  </span><span class="t-val">  Valencia, Spain · Open to Relocation</span></span>'],
    [2900, '<span class="t-line"><span class="t-out">  EXP   </span><span class="t-val">  6+ years · 7 cities · 4 languages</span></span>'],
    [3100, '<span class="t-line"><span class="t-out">╚═════════════════════════════════════════════╝</span></span>'],
    [3700, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">ls ./links/</span></span>'],
    [4200, '<span class="t-line"><span class="t-warn">linkedin/  github/  gitlab/  youtube/  email/</span></span>'],
    [4800, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">cat contact.cfg</span></span>'],
    [5300, '<span class="t-line"><span class="t-dim">linkedin </span><span class="t-info"> linkedin.com/in/elad-daudet</span></span>'],
    [5500, '<span class="t-line"><span class="t-dim">github   </span><span class="t-info"> github.com/MISTERorg</span></span>'],
    [5700, '<span class="t-line"><span class="t-dim">gitlab   </span><span class="t-info"> gitlab.com/mistercomp1</span></span>'],
    [5900, '<span class="t-line"><span class="t-dim">youtube  </span><span class="t-info"> youtube.com/@eladdaudet</span></span>'],
    [6300, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-out">ready to connect. <span class="cursor-blink"></span></span></span>'],
  ];
}
