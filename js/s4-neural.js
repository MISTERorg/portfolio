// [file name]: s4-neural.js
/* ═══════════════════════════════════════════════════
   SEC 4 — THE NEURAL MAP (Tron Bento Grid)
   - Each card wrapped in .bn-frame for rotating beam
   - All labels driven by i18n keys
   - refreshNeural() re-renders text on lang switch
═══════════════════════════════════════════════════ */

/* ── Skill categories — tech tag names are brand names,
   not translated. Category titles, descriptions, and
   footer text are all i18n-keyed.                  ── */
const BENTO_CATEGORIES = [
  {
    id:       'devops',
    i18nCat:  's4-cat-devops',
    i18nDesc: 's4-desc-devops',
    i18nFoot: 's4-foot-devops',
    icon:     '☁️',
    iconHover:'⚡',
    color:    '0,242,255',
    speed:    '5.2s',
    className:'devops',
    tags: [
      'Git','GitLab CI/CD','GitHub Actions','Linux',
      'AWS','GCP','Kubernetes','Docker','Ansible',
      'Terraform','SSH'
    ]
  },
  {
    id:       'automation',
    i18nCat:  's4-cat-automation',
    i18nDesc: 's4-desc-automation',
    i18nFoot: 's4-foot-automation',
    icon:     '🤖',
    iconHover:'⚡',
    color:    '180,77,255',
    speed:    '4.6s',
    className:'automation',
    hasPulse: true,
    tags: ['n8n','Make.com','UiPath','Cline','LangChain','Ansible']
  },
  {
    id:       'programming',
    i18nCat:  's4-cat-programming',
    i18nDesc: 's4-desc-programming',
    i18nFoot: 's4-foot-programming',
    icon:     '💻',
    iconHover:'🔧',
    color:    '0,255,157',
    speed:    '5.8s',
    className:'programming',
    tags: [
      'Python','NumPy','Pandas','Scikit-learn',
      'TypeScript','JavaScript','Shell Script',
      'PowerShell','SQL','C','PHP'
    ]
  },
  {
    id:       'frameworks',
    i18nCat:  's4-cat-frameworks',
    i18nDesc: 's4-desc-frameworks',
    i18nFoot: 's4-foot-frameworks',
    icon:     '⚙️',
    iconHover:'🏗️',
    color:    '240,192,64',
    speed:    '6.2s',
    className:'frameworks',
    tags: ['Django','FastAPI','Angular','Symfony','Odoo']
  },
  {
    id:       'security',
    i18nCat:  's4-cat-security',
    i18nDesc: 's4-desc-security',
    i18nFoot: 's4-foot-security',
    icon:     '🛡️',
    iconHover:'🔒',
    color:    '255,51,102',
    speed:    '4.9s',
    className:'security',
    tags: ['OWASP ZAP','SonarQube','SQLMap','Selenium','Cypress','Playwright']
  },
  {
    id:       'databases',
    i18nCat:  's4-cat-databases',
    i18nDesc: 's4-desc-databases',
    i18nFoot: 's4-foot-databases',
    icon:     '🗄️',
    iconHover:'📊',
    color:    '0,180,255',
    speed:    '5.5s',
    className:'databases',
    tags: ['PostgreSQL','MySQL','Redis','MongoDB']
  }
];

/* ── Resolve a translation key from the active language ── */
function _t(key) {
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  const dict = (typeof I18N !== 'undefined') ? I18N[lang] : null;
  return (dict && dict[key]) ? dict[key] : key;
}

/* ── Build the hex count string ── */
function _hex(n) {
  return '0x' + n.toString(16).toUpperCase().padStart(2, '0');
}

/* ══════════════════════════════════════════════════
   initNeural() — called once by core.js on page load
══════════════════════════════════════════════════ */
function initNeural() {
  const section = document.getElementById('s4');
  if (!section) return;

  /* Idempotency guard */
  if (document.querySelector('.bento-grid')) return;

  /* Clean up legacy canvas & tooltip if present */
  const oldCanvas = document.getElementById('neuralCanvas');
  if (oldCanvas) oldCanvas.remove();
  const oldTip = document.getElementById('ntip');
  if (oldTip) oldTip.remove();

  /* Build grid */
  const grid = document.createElement('div');
  grid.className = 'bento-grid';
  grid.id = 'bentoGrid';

  BENTO_CATEGORIES.forEach(cat => {
    grid.appendChild(_buildCard(cat));
  });

  /* Insert after section header */
  const hdr = section.querySelector('.sec-hdr');
  if (hdr) hdr.insertAdjacentElement('afterend', grid);
  else section.appendChild(grid);

  /* Sync section-level i18n titles */
  _syncSectionTitles();

  /* Icon hover swap */
  _attachIconHover();
}

/* ── Build one .bn-frame + .bento-card ── */
function _buildCard(cat) {
  /* Outer Tron beam frame */
  const frame = document.createElement('div');
  frame.className = 'bn-frame';
  frame.style.cssText = `--bn-color:${cat.color};--bn-speed:${cat.speed}`;
  frame.dataset.catId = cat.id;

  /* Inner glass card */
  const card = document.createElement('div');
  card.className = `bento-card ${cat.className || ''}`;
  /* Pass --bn-color into card scope for pseudo-elements */
  card.style.setProperty('--bn-color', cat.color);

  /* Top accent line */
  const bcTop = document.createElement('div');
  bcTop.className = 'bc-top';
  card.appendChild(bcTop);

  /* Automation radial pulse bg */
  if (cat.hasPulse) {
    const pulseBg = document.createElement('div');
    pulseBg.className = 'bc-pulse-bg';
    card.appendChild(pulseBg);
  }

  /* Content wrapper */
  const content = document.createElement('div');
  content.className = 'bento-content';

  /* ── Header ── */
  const header = document.createElement('div');
  header.className = 'bento-header';

  const icon = document.createElement('span');
  icon.className = 'bento-icon';
  icon.textContent = cat.icon;

  const headText = document.createElement('div');
  headText.className = 'bento-head-text';

  const title = document.createElement('div');
  title.className = 'bento-title';

  const prefix = document.createElement('span');
  prefix.className = 'bento-prefix';
  prefix.textContent = '//';

  const titleLabel = document.createElement('span');
  titleLabel.className = 'bento-title-label';
  titleLabel.dataset.i18n = cat.i18nCat;
  /* Fallback text (replaced by refreshNeural on lang switch) */
  titleLabel.textContent = _t(cat.i18nCat);

  title.appendChild(prefix);
  title.appendChild(titleLabel);

  const desc = document.createElement('div');
  desc.className = 'bento-desc';
  desc.dataset.i18n = cat.i18nDesc;
  desc.textContent = _t(cat.i18nDesc);

  const badge = document.createElement('div');
  badge.className = 'bento-badge';
  badge.textContent = cat.tags.length + ' ' + _t('s4-tools');

  headText.appendChild(title);
  headText.appendChild(desc);
  headText.appendChild(badge);
  header.appendChild(icon);
  header.appendChild(headText);
  content.appendChild(header);

  /* ── Tech tags ── */
  const techGrid = document.createElement('div');
  techGrid.className = 'tech-grid';
  cat.tags.forEach(tagName => {
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.style.setProperty('--bn-color', cat.color);
    tag.textContent = tagName;
    techGrid.appendChild(tag);
  });
  content.appendChild(techGrid);

  /* ── Footer ── */
  const footer = document.createElement('div');
  footer.className = 'bento-footer';

  const dot = document.createElement('div');
  dot.className = 'pulse-dot';

  const footTxt = document.createElement('span');
  footTxt.className = 'footer-text';
  footTxt.dataset.i18n = cat.i18nFoot;
  footTxt.textContent = _t(cat.i18nFoot);

  const count = document.createElement('span');
  count.className = 'footer-count';
  count.style.setProperty('--bn-color', cat.color);
  count.textContent = _hex(cat.tags.length);

  footer.appendChild(dot);
  footer.appendChild(footTxt);
  footer.appendChild(count);
  content.appendChild(footer);

  card.appendChild(content);
  frame.appendChild(card);
  return frame;
}

/* ── Icon hover swap ── */
function _attachIconHover() {
  document.querySelectorAll('.bn-frame').forEach(frame => {
    const catId = frame.dataset.catId;
    const cat = BENTO_CATEGORIES.find(c => c.id === catId);
    if (!cat) return;
    const icon = frame.querySelector('.bento-icon');
    frame.addEventListener('mouseenter', () => { if (cat.iconHover) icon.textContent = cat.iconHover; });
    frame.addEventListener('mouseleave', () => { icon.textContent = cat.icon; });
  });
}

/* ── Sync section header titles ── */
function _syncSectionTitles() {
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  const t = (typeof I18N !== 'undefined') ? I18N[lang] : null;
  if (!t) return;
  const s4t = document.getElementById('s4t');
  const s4s = document.getElementById('s4s');
  if (s4t && t['s4-title'])   s4t.textContent = t['s4-title'];
  if (s4s && t['s4-sub'])     s4s.textContent = t['s4-sub'];
}

/* ══════════════════════════════════════════════════
   refreshNeural() — called by setGlobalLang on every
   language switch. Updates all text nodes in the grid
   without destroying and rebuilding the DOM.
══════════════════════════════════════════════════ */
function refreshNeural() {
  /* Section titles */
  _syncSectionTitles();

  /* Re-translate every labelled node */
  document.querySelectorAll('.bn-frame [data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = _t(key);
    if (val && val !== key) el.textContent = val;
  });

  /* Re-translate badges (tools count label may change) */
  document.querySelectorAll('.bento-badge').forEach(badge => {
    const frame = badge.closest('.bn-frame');
    if (!frame) return;
    const cat = BENTO_CATEGORIES.find(c => c.id === frame.dataset.catId);
    if (!cat) return;
    badge.textContent = cat.tags.length + ' ' + _t('s4-tools');
  });
}

window.initNeural  = initNeural;
window.refreshNeural = refreshNeural;