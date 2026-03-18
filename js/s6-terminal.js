/* ═══════════════════════════════════════════════════
   SEC 6 — TERMINAL
   Lines come from I18N[currentLang]['terminal-lines']
   so switching language resets and replays the terminal.
═══════════════════════════════════════════════════ */
let termDone = false;

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
}

/* English fallback in case i18n.js loads after this file */
function _terminalFallback() {
  return [
    [600,  '<span class="t-line"><span class="t-out">PONG: connection established ✓</span></span>'],
    [1100, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">whoami --full-profile</span></span>'],
    [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
    [1900, '<span class="t-line"><span class="t-out">  NAME  </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
    [2100, '<span class="t-line"><span class="t-out">  ROLE  </span><span class="t-val">  DevOps · AIOps · Automation Expert</span></span>'],
    [2300, '<span class="t-line"><span class="t-out">  EMAIL </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
    [2500, '<span class="t-line"><span class="t-out">  TEL   </span><span class="t-val">  +1 (240) 261 3649 · +91 89834 61149</span></span>'],
    [2700, '<span class="t-line"><span class="t-out">  BASE  </span><span class="t-val">  Silver Spring, MD, USA</span></span>'],
    [2900, '<span class="t-line"><span class="t-out">  EXP   </span><span class="t-val">  6+ years · 9 cities · 4 languages</span></span>'],
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
