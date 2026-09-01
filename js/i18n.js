/* ═══════════════════════════════════════════════════
   i18n.js — Global Language Switcher
   Covers: EN · FR · ES · JA
   All 8 s4 neural-map categories translated in every language.
   Globe city content keyed as city-{key}-{field}.
═══════════════════════════════════════════════════ */

const I18N = {

  /* ══════════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════════ */
  en: {
    'hero-title':  'DevOps &amp; AIOps Engineer &nbsp;·&nbsp; AI-Powered Automation Expert',
    'hero-bio':    'Detail-oriented Digital Nomad with 6+ years of success driving change through<br>managing complex programs and AI-powered automation',
    'hero-btn':    '▶ &nbsp;ENTER THE NETWORK',
    'stat-years':  'Years Active',
    'stat-cities': 'Cities Deployed',
    'stat-certs':  'Certifications',
    'stat-langs':  'Languages',
    'scroll-hint': 'Scroll',

    's2-title':   'GLOBAL OPERATIONS',
    's2-sub':     'Interactive 3D Globe · Click any city node to explore',
    'globe-hint': 'DRAG TO ROTATE &nbsp;·&nbsp; CLICK NODES TO EXPLORE',

    /* ── S3 Projects ── */
    's3-title': 'PERSONAL PROJECTS',
    's3-sub':   'System Design · AI-Powered Automation · Production Deployments',

    'c1-num':  '01 / E-COMMERCE · ERP',
    'c1-name': 'ERP SYNC<br>ENGINE',
    'c1-desc': 'Designed RESTful APIs linking major e-commerce marketplaces with Odoo Community for real-time inventory and order sync. Deployed at Óxido Verde, Hosono DE, and MisterComp.',
    'c1-link': '→ VIEW ON GITLAB',

    'c2-num':  '05 / AI · HARDWARE',
    'c2-name': 'ATHENA<br>VOICE AI',
    'c2-desc': 'Self-directed R&amp;D device fusing LLM reasoning with custom low-power hardware — sub-200ms audio response, 94% intent accuracy, multi-turn context via LangChain. No GPU required.',
    'c2-link': '→ VIEW ON GITHUB',

    'c3-num':  '01 / SECURITY · REMOTE ACCESS',
    'c3-name': 'NEXUS<br>REMOTE ACCESS',
    'c3-desc': 'Self-hosted remote desktop and device management platform with end-to-end AES-GCM encrypted sessions, real-time screen streaming, and P2P endpoint discovery. FastAPI &amp; WebSocket backend with JWT/TOTP authentication.',
    'c3-link': '→ VIEW ON GITHUB',

    'c4-num':  '02 / AI · CYBERSECURITY',
    'c4-name': 'XENOM<br>SECURITY AI',
    'c4-desc': 'Adaptive AI security automation companion unifying network scanning, log triage, and threat response into one assistant — combining several cybersecurity tools with LLM-driven decision support.',
    'c4-link': '→ VIEW ON GITHUB',

    'c5-num':  '06 / STARTUP · CTO',
    'c5-name': 'MISTERCOMP<br>PLATFORM',
    'c5-desc': 'Founder &amp; CTO in Douala, Cameroon. Built the entire stack — Django REST backend, Angular SPA, AWS infra, and Odoo ERP integrations. 500+ users in under 12 months.',
    'c5-link': '→ VIEW ON GITLAB',

    'c6-num':  '08 / DEVOPS · CLOUD',
    'c6-name': 'MULTI-CLOUD<br>DEVOPS INFRA',
    'c6-desc': 'Containerised microservices deployed across AWS &amp; GCP — Kubernetes, Terraform IaC, zero-downtime blue-green GitOps pipelines. Infrastructure costs cut by 65%.',
    'c6-link': '→ VIEW ON GITHUB',

    'c7-num':  '03 / AI · EDTECH',
    'c7-name': 'SMART<br>LEARNING',
    'c7-desc': 'Adaptive AI learning platform built with Django, PyTorch, and Hugging Face — generating personalised learning paths and predictive analytics on student performance.',
    'c7-link': '→ VIEW ON GITHUB',

    'c8-num':  '04 / HEALTHTECH · CROSS-PLATFORM',
    'c8-name': 'HYBRID HOSPITAL<br>MANAGEMENT',
    'c8-desc': 'Cross-platform hospital management system for an African healthcare institution — scheduling, patient records, and staff workflows in one Ionic/Angular app that runs on web and mobile.',
    'c8-link': '→ VIEW ON GITHUB',

    /* ── S4 Neural Map — all 8 categories ── */
    's4-title':     'CORE COMPETENCIES',
    's4-sub':       'Skills learned across the years — inclusive but not limited to the stack below',
    'neural-title': 'CORE COMPETENCIES',
    'neural-sub':   'Skills learned across the years — inclusive but not limited to the stack below',
    's4-tools':     'tools',

    's4-cat-devops':       'DevOps & Cloud',
    's4-desc-devops':      'CI/CD · IaC · Container orchestration · Multi-cloud',
    's4-foot-devops':      'INFRASTRUCTURE AS CODE',

    's4-cat-automation':   'AI & Automation',
    's4-desc-automation':  'Agentic AI · workflow automation · AIOps · LLM pipelines',
    's4-foot-automation':  'AIOPS & INTELLIGENT WORKFLOWS',

    's4-cat-programming':  'Programming',
    's4-desc-programming': 'System scripting · data manipulation · full-stack logic',
    's4-foot-programming': 'LANGUAGES & SCRIPTING',

    's4-cat-datascience':  'Data & ML',
    's4-desc-datascience': 'ML pipelines · statistical analysis · predictive modelling · AI embeddings',
    's4-foot-datascience': 'MACHINE LEARNING & DATA SCIENCE',

    's4-cat-frameworks':   'Frameworks & APIs',
    's4-desc-frameworks':  'Backend services · SPA frontends · ERP integration · REST & GraphQL',
    's4-foot-frameworks':  'WEB & APPLICATION FRAMEWORKS',

    's4-cat-security':     'Security & QA',
    's4-desc-security':    'Penetration testing · automated QA · SIEM · monitoring',
    's4-foot-security':    'CYBERSECURITY & TEST AUTOMATION',

    's4-cat-collab':       'Collaboration & Productivity',
    's4-desc-collab':      'Remote-first tooling · project management · async communication',
    's4-foot-collab':      'PRODUCTIVITY & TEAMWORK STACK',

    's4-cat-privacy':      'Privacy & Compliance',
    's4-desc-privacy':     'Regulatory frameworks · IAM · data protection · vendor risk',
    's4-foot-privacy':     'GOVERNANCE, RISK & COMPLIANCE',

    /* ── S5 Archive ── */
    's5-title': 'THE ARCHIVE',
    's5-sub':   'Credentials · Certifications · Academic Vault',

    's5-c1-cat':        'Academic Degrees',
    's5-c1-deg1-label': 'M.Sc.',
    's5-c1-deg1':       'M.Sc. Computer Science',
    's5-c1-uni1':       'MIT World Peace University, Pune',
    's5-c1-gpa1':       'Distinction (Top Tier) · 3.6/4.0',
    's5-c1-badge':      '2× MERIT SCHOLARSHIP',
    's5-c1-deg2':       'B.Tech Software Engineering',
    's5-c1-uni2':       'University of Buea, Cameroon',
    's5-c1-gpa2':       '3.40 / 4.0 CGPA',

    's5-c2-cat':    'Professional Certification',
    's5-c2-title':  'CyberOps Associate',
    's5-c2-iss':    'Cisco Systems, Inc.',
    's5-c2-status': 'Verified · Active',

    's5-c3cert-cat':    'Professional Certification',
    's5-c3cert-title':  'Google AI Professional',
    's5-c3cert-iss':    'Google',
    's5-c3cert-status': 'Verified · Active',
    's5-c2-btn':    'Verify Official Badge ↗',

    's5-c3-cat':   'Linguistics',
    's5-c3-title': 'Multilingual Professional',
    's5-c3-sub':   '4 Languages · C1–C2 CEFR Level',
    'lang-en':     'ENGLISH',
    'lang-fr':     'FRENCH',
    'lang-es':     'SPANISH',
    'lang-ja':     'JAPANESE',

    /* ── S6 Terminal ── */
    's6-title': 'ENGAGEMENT & CONTACT',
    's6-sub':   'Professional Network · Direct Communications · Resume Download',
    'cv-btn':   'DOWNLOAD CV',

    'sbar-online': 'SYSTEM ONLINE',
    'sbar-exp':    '6+ YRS EXPERIENCE',
    'sbar-nexus':  'GLOBAL NEXUS ACTIVE',

    'nav-0': 'Gateway', 'nav-1': 'Global',  'nav-2': 'Projects',
    'nav-3': 'Skills',  'nav-4': 'History', 'nav-5': 'Contact',

    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG: connection established ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">whoami --full-profile</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  NAME  </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  ROLE  </span><span class="t-val">  DevOps · AIOps · Automation Expert</span></span>'],
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
    ],

    /* ── Globe modal UI strings ── */
    'cm-close-x':        '✕ CLOSE',
    'cm-position-label': 'Position Held',
    'cm-impact-label':   'Key Impact',
    'cm-overview-label': 'Overview',
    'cm-stack-label':    'Tech Stack',
    'cm-btn-view':       '→ VIEW PROFILE',
    'cm-btn-close':      '← CLOSE',

    /* ── Globe city translations ── */

    /* Valencia */
    'city-valencia-role':     'DevOps & Automation Engineer',
    'city-valencia-industry': 'E-Commerce · ERP Integration',
    'city-valencia-status':   'Hybrid Contract · Mar 2026–Present',
    'city-valencia-m1-lbl':   'Data Latency',
    'city-valencia-m2-lbl':   'Uptime',
    'city-valencia-m3-lbl':   'Integration Cost',
    'city-valencia-i1': 'Engineered Python Integration Hub syncing Odoo ERP with TikTok Shop, eBay & 7+ high-volume platforms',
    'city-valencia-i2': 'Architected data transformation pipelines reducing inconsistencies by ~95% across JSON/XML & PostgreSQL',
    'city-valencia-i3': 'Built RESTful API connectors automating order fulfillment and inventory reconciliation at scale',
    'city-valencia-detail': 'Leading DevOps & automation engineering at Óxido Verde, Valencia. Architecting real-time e-commerce data infrastructure connecting Odoo Community ERP with global marketplaces — delivering 60% latency reduction and 30% integration cost savings.',

    /* Tokyo */
    'city-tokyo-role':     'Technical Support & Automation Engineer',
    'city-tokyo-industry': 'AI Automation · LLMOps',
    'city-tokyo-status':   'Hybrid Contract · Oct 2025–Jun 2026',
    'city-tokyo-m1-lbl':   'Automation Stack',
    'city-tokyo-m2-lbl':   'Compliance',
    'city-tokyo-m3-lbl':   'GDPR',
    'city-tokyo-i1': 'Built and deployed end-to-end n8n & Ansible/Semaphore automations for testing, tracking and server inventory',
    'city-tokyo-i2': 'Refined Hosono AI — internal LLM-driven agent automating data processing for a distributed international team',
    'city-tokyo-i3': 'Architected cloud-native IAM with MFA and least-privilege access achieving GDPR & ISO 27001 compliance',
    'city-tokyo-detail': 'Hybrid automation engineering role in Tokyo. Deployed production n8n and Ansible/Semaphore workflows, refined an in-house LLM automation agent (Hosono AI), and engineered cloud-native IAM security frameworks across Shopify and Shopware ecosystems.',

    /* Prague */
    'city-prague-role':     'Data & Automation Engineer',
    'city-prague-industry': 'Data Engineering · Automation',
    'city-prague-status':   'Remote Contract · Feb 2024–Aug 2024',
    'city-prague-m1-lbl':   'Candidates Screened',
    'city-prague-m2-lbl':   'Match Accuracy',
    'city-prague-m3-lbl':   'Data Integrity',
    'city-prague-i1': 'Automated screening of 2,000+ candidates via Make.com workflows, improving matching accuracy by 92%',
    'city-prague-i2': 'Reduced HR manual review time by 20+ hours through intelligent pipeline automation',
    'city-prague-i3': 'Built Python data pipelines (Pandas, NumPy) with Regex PII normalisation achieving 99.9% data integrity',
    'city-prague-detail': 'Remote data engineering contract at A-B InBev, one of the world\'s largest beverage companies. Built automated HR screening workflows and enterprise-grade Python data pipelines for large-scale dataset standardisation across JSON/XML and PostgreSQL workflows.',

    /* San Jose */
    'city-sanjose-role':     'CyberOps Engineer',
    'city-sanjose-industry': 'Cybersecurity · Networking',
    'city-sanjose-status':   'Remote Contract · Jun 2023–Nov 2023',
    'city-sanjose-m1-lbl':   'MTTR',
    'city-sanjose-m2-lbl':   'Sites Secured',
    'city-sanjose-m3-lbl':   'Provision Time',
    'city-sanjose-i1': 'Enhanced SOAR playbooks and security workflows, reducing Mean Time to Respond (MTTR) by 20%',
    'city-sanjose-i2': 'Standardised and automated global security infrastructure via Ansible & Terraform across 50+ sites',
    'city-sanjose-i3': 'Mitigated high-risk incidents and slashed provisioning time by up to 60% through IaC automation',
    'city-sanjose-detail': 'Remote CyberOps engineering at Cisco Systems\' global headquarters. Enhanced enterprise SOAR automation, hardened security workflows, and delivered Infrastructure-as-Code rollouts scaling network security across 50+ international sites.',

    /* Buea */
    'city-buea-role':     'IT Support & Instructional Assistant',
    'city-buea-industry': 'Academia · Network Engineering',
    'city-buea-status':   'Onsite Contract · Dec 2022–Jun 2023',
    'city-buea-m1-lbl':   'Learning Gain',
    'city-buea-m2-lbl':   'Policy Compliance',
    'city-buea-m3-lbl':   'Lab Modules',
    'city-buea-i1': 'Provisioned and maintained enterprise-grade network infrastructure: routers, firewalls, and IAM systems',
    'city-buea-i2': 'Improved student learning efficiency by up to 89% through structured enterprise networking lab protocols',
    'city-buea-i3': 'Ensured full compliance with institutional security policies across all Cisco network infrastructure',
    'city-buea-detail': 'Onsite Cisco IT support and instructional role at the College of Technology, Buea — the Silicon Valley of Cameroon. Maintained enterprise networking labs, designed structured curriculum materials, and mentored students in network engineering and security.',

    /* Douala */
    'city-douala-role':     'Lead DevOps Consultant & Full Stack Dev',
    'city-douala-industry': 'SaaS · DevOps · Full Stack',
    'city-douala-status':   'Consulting · Feb 2021–Present',
    'city-douala-m1-lbl':   'Uptime SLA',
    'city-douala-m2-lbl':   'Release Cycles',
    'city-douala-m3-lbl':   'Availability',
    'city-douala-i1': 'Lead DevOps Consultant at MisterComp: defined technical strategy ensuring 99.9% operational continuity',
    'city-douala-i2': 'Full Stack Developer at Rocket 234: delivered scalable solutions with 99.99% system availability',
    'city-douala-i3': 'Spearheaded CI/CD pipeline automation and DevOps transformation, reducing release cycles by 20%+',
    'city-douala-detail': 'Concurrent dual-role base in Douala. As Lead DevOps Consultant at MisterComp, defined technology strategy, cloud infrastructure, and cybersecurity services. As Full Stack Developer at Rocket 234, delivered production-grade full-stack platforms and orchestrated end-to-end SDLC.',

    /* Pune */
    'city-pune-role':     'Graduate Researcher — M.Sc. Computer Science',
    'city-pune-industry': 'Academia · AI / ML Research',
    'city-pune-status':   'M.Sc. · Distinction (Top Tier) · 2021–2023',
    'city-pune-m1-lbl':   'Grade',
    'city-pune-m2-lbl':   'Merit Scholarship',
    'city-pune-m3-lbl':   'Cohort',
    'city-pune-i1': 'Awarded M.Sc. in Computer Science with Distinction — Top Tier of cohort',
    'city-pune-i2': 'Received two consecutive merit-based scholarships recognising academic excellence',
    'city-pune-i3': 'Research focus: AIOps automation, cloud-native DevOps, distributed infrastructure and ML pipelines',
    'city-pune-detail': 'Full-time M.Sc. Computer Science at Vishwanath Karad MIT World Peace University, Pune, India. Graduated with Distinction (Top Tier) and earned two consecutive merit-based scholarships. Specialised in AIOps, predictive automation, and cloud-native systems design.',
  },

  /* ══════════════════════════════════════════
     FRENCH
  ══════════════════════════════════════════ */
  fr: {
    'hero-title':  'Ingénieur DevOps &amp; AIOps &nbsp;·&nbsp; Expert en Automatisation IA',
    'hero-bio':    'Nomade numérique orienté détail avec 6+ ans de succès en transformation digitale<br>via la gestion de programmes complexes et l\'automatisation IA',
    'hero-btn':    '▶ &nbsp;ENTRER DANS LE RÉSEAU',
    'stat-years':  'Années d\'activité',
    'stat-cities': 'Villes déployées',
    'stat-certs':  'Certifications',
    'stat-langs':  'Langues',
    'scroll-hint': 'Défiler',

    's2-title':   'OPÉRATIONS MONDIALES',
    's2-sub':     'Globe 3D interactif · Cliquez sur un nœud pour explorer',
    'globe-hint': 'GLISSER POUR PIVOTER &nbsp;·&nbsp; CLIQUER LES NŒUDS',

    's3-title': 'PROJETS PERSONNELS',
    's3-sub':   'Conception de Systèmes · Automatisation IA · Déploiements en Production',

    'c1-num':  '01 / E-COMMERCE · ERP',
    'c1-name': 'MOTEUR DE<br>SYNC ERP',
    'c1-desc': 'Conception d\'APIs RESTful reliant les principales marketplaces e-commerce à Odoo Community pour une synchronisation inventaire/commandes en temps réel. Déployé chez Óxido Verde, Hosono DE et MisterComp.',
    'c1-link': '→ VOIR SUR GITLAB',

    'c2-num':  '05 / IA · MATÉRIEL',
    'c2-name': 'ATHENA<br>IA VOCALE',
    'c2-desc': 'Dispositif R&amp;D autonome fusionnant raisonnement LLM et matériel basse consommation — réponse audio &lt;200ms, 94% précision d\'intention, contexte multi-tours via LangChain. Sans GPU.',
    'c2-link': '→ VOIR SUR GITHUB',

    'c3-num':  '01 / SÉCURITÉ · ACCÈS DISTANT',
    'c3-name': 'NEXUS<br>ACCÈS DISTANT',
    'c3-desc': 'Plateforme auto-hébergée de bureau à distance et de gestion d\'appareils avec sessions chiffrées AES-GCM de bout en bout, diffusion d\'écran en temps réel et découverte P2P des points d\'accès. Backend FastAPI &amp; WebSocket avec authentification JWT/TOTP.',
    'c3-link': '→ VOIR SUR GITHUB',

    'c4-num':  '02 / IA · CYBERSÉCURITÉ',
    'c4-name': 'XENOM<br>IA SÉCURITÉ',
    'c4-desc': 'Compagnon d\'automatisation de sécurité IA adaptatif unifiant scan réseau, tri des journaux et réponse aux menaces en un seul assistant — combinant plusieurs outils de cybersécurité avec l\'aide à la décision par LLM.',
    'c4-link': '→ VOIR SUR GITHUB',

    'c5-num':  '06 / STARTUP · CTO',
    'c5-name': 'MISTERCOMP<br>PLATEFORME',
    'c5-desc': 'Fondateur &amp; CTO à Douala, Cameroun. Stack complète — backend Django REST, SPA Angular, infra AWS, intégrations Odoo ERP. Plus de 500 utilisateurs en moins de 12 mois.',
    'c5-link': '→ VOIR SUR GITLAB',

    'c6-num':  '08 / DEVOPS · CLOUD',
    'c6-name': 'INFRASTRUCTURE<br>MULTI-CLOUD',
    'c6-desc': 'Microservices conteneurisés déployés sur AWS &amp; GCP — Kubernetes, Terraform IaC, pipelines GitOps blue-green sans interruption. Coûts d\'infra réduits de 65%.',
    'c6-link': '→ VOIR SUR GITHUB',

    'c7-num':  '03 / IA · EDTECH',
    'c7-name': 'SMART<br>LEARNING',
    'c7-desc': 'Plateforme d\'apprentissage IA adaptative construite avec Django, PyTorch et Hugging Face — générant des parcours d\'apprentissage personnalisés et des analyses prédictives sur la performance des étudiants.',
    'c7-link': '→ VOIR SUR GITHUB',

    'c8-num':  '04 / SANTÉ NUMÉRIQUE · MULTI-PLATEFORME',
    'c8-name': 'GESTION HOSPITALIÈRE<br>HYBRIDE',
    'c8-desc': 'Système de gestion hospitalière multiplateforme pour un établissement de santé africain — planification, dossiers patients et flux de travail du personnel réunis dans une application Ionic/Angular fonctionnant sur web et mobile.',
    'c8-link': '→ VOIR SUR GITHUB',

    's4-title':     'COMPÉTENCES CLÉS',
    's4-sub':       'Les compétences acquises au fil des ans incluent, sans s\'y limiter, celles ci-dessous',
    'neural-title': 'COMPÉTENCES CLÉS',
    'neural-sub':   'Les compétences acquises au fil des ans incluent, sans s\'y limiter, celles ci-dessous',
    's4-tools':     'outils',

    's4-cat-devops':       'DevOps & Cloud',
    's4-desc-devops':      'CI/CD · IaC · Orchestration de conteneurs · Multi-cloud',
    's4-foot-devops':      'INFRASTRUCTURE AS CODE',

    's4-cat-automation':   'IA & Automatisation',
    's4-desc-automation':  'IA agentique · workflows automatisés · AIOps · pipelines LLM',
    's4-foot-automation':  'AIOPS & WORKFLOWS INTELLIGENTS',

    's4-cat-programming':  'Programmation',
    's4-desc-programming': 'Scripting système · manipulation de données · logique full-stack',
    's4-foot-programming': 'LANGAGES & SCRIPTS',

    's4-cat-datascience':  'Données & ML',
    's4-desc-datascience': 'Pipelines ML · analyse statistique · modélisation prédictive · embeddings IA',
    's4-foot-datascience': 'MACHINE LEARNING & DATA SCIENCE',

    's4-cat-frameworks':   'Frameworks & APIs',
    's4-desc-frameworks':  'Services backend · SPA · intégration ERP · REST & GraphQL',
    's4-foot-frameworks':  'FRAMEWORKS WEB & APPLICATIFS',

    's4-cat-security':     'Sécurité & QA',
    's4-desc-security':    'Tests d\'intrusion · QA automatisé · SIEM · monitoring',
    's4-foot-security':    'CYBERSÉCURITÉ & AUTOMATISATION DES TESTS',

    's4-cat-collab':       'Collaboration & Productivité',
    's4-desc-collab':      'Outils remote-first · gestion de projets · communication async',
    's4-foot-collab':      'STACK PRODUCTIVITÉ & TRAVAIL D\'ÉQUIPE',

    's4-cat-privacy':      'Confidentialité & Conformité',
    's4-desc-privacy':     'Cadres réglementaires · IAM · protection des données · risques fournisseurs',
    's4-foot-privacy':     'GOUVERNANCE, RISQUES & CONFORMITÉ',

    's5-title': 'LES ARCHIVES',
    's5-sub':   'Diplômes · Certifications · Voûte académique',

    's5-c1-cat':        'Diplômes Académiques',
    's5-c1-deg1-label': 'M.Sc.',
    's5-c1-deg1':       'M.Sc. Informatique',
    's5-c1-uni1':       'MIT World Peace University, Pune',
    's5-c1-gpa1':       'Distinction (Haut niveau) · 3,6/4,0',
    's5-c1-badge':      '2× BOURSE AU MÉRITE',
    's5-c1-deg2':       'B.Tech Génie Logiciel',
    's5-c1-uni2':       'Université de Buea, Cameroun',
    's5-c1-gpa2':       '3,40 / 4,0 CGPA',

    's5-c2-cat':    'Certification Professionnelle',
    's5-c2-title':  'CyberOps Associate',
    's5-c2-iss':    'Cisco Systems, Inc.',
    's5-c2-status': 'Vérifié · Actif',

    's5-c3cert-cat':    'Certification Professionnelle',
    's5-c3cert-title':  'Google AI Professional',
    's5-c3cert-iss':    'Google',
    's5-c3cert-status': 'Vérifié · Actif',
    's5-c2-btn':    'Vérifier le Badge Officiel ↗',

    's5-c3-cat':   'Linguistique',
    's5-c3-title': 'Professionnel Multilingue',
    's5-c3-sub':   '4 Langues · Niveau C1–C2 CECRL',
    'lang-en':     'ANGLAIS',
    'lang-fr':     'FRANÇAIS',
    'lang-es':     'ESPAGNOL',
    'lang-ja':     'JAPONAIS',

    's6-title': 'ENGAGEMENT ET CONTACT',
    's6-sub':   'Réseau Professionnel · Communications Directes · Téléchargement de CV',
    'cv-btn':   'TÉLÉCHARGER CV',

    'sbar-online': 'SYSTÈME EN LIGNE',
    'sbar-exp':    '6+ ANS D\'EXPÉRIENCE',
    'sbar-nexus':  'NEXUS MONDIAL ACTIF',

    'nav-0': 'Entrée', 'nav-1': 'Mondial',      'nav-2': 'Projets',
    'nav-3': 'Compétences', 'nav-4': 'Parcours', 'nav-5': 'Contact',

    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG : connexion établie ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-cmd">whoami --profil-complet</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  NOM    </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  RÔLE   </span><span class="t-val">  DevOps · AIOps · Expert en Automatisation</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  EMAIL  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  TÉL    </span><span class="t-val">  +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  BASE   </span><span class="t-val">  Valence, Espagne · Mobilité internationale</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  EXP    </span><span class="t-val">  6+ ans · 7 villes · 4 langues</span></span>'],
      [3100, '<span class="t-line"><span class="t-out">╚═════════════════════════════════════════════╝</span></span>'],
      [3700, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-cmd">ls ./liens/</span></span>'],
      [4200, '<span class="t-line"><span class="t-warn">linkedin/  github/  gitlab/  youtube/  email/</span></span>'],
      [4800, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-cmd">cat contact.cfg</span></span>'],
      [5300, '<span class="t-line"><span class="t-dim">linkedin </span><span class="t-info"> linkedin.com/in/elad-daudet</span></span>'],
      [5500, '<span class="t-line"><span class="t-dim">github   </span><span class="t-info"> github.com/MISTERorg</span></span>'],
      [5700, '<span class="t-line"><span class="t-dim">gitlab   </span><span class="t-info"> gitlab.com/mistercomp1</span></span>'],
      [5900, '<span class="t-line"><span class="t-dim">youtube  </span><span class="t-info"> youtube.com/@eladdaudet</span></span>'],
      [6300, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-out">prêt à connecter. <span class="cursor-blink"></span></span></span>'],
    ],

    /* ── Globe modal UI strings (FR) ── */
    'cm-close-x':        '✕ FERMER',
    'cm-position-label': 'Poste occupé',
    'cm-impact-label':   'Impact clé',
    'cm-overview-label': 'Aperçu',
    'cm-stack-label':    'Stack technique',
    'cm-btn-view':       '→ VOIR LE PROFIL',
    'cm-btn-close':      '← FERMER',

    /* ── Globe city translations (FR) ── */

    /* Valencia */
    'city-valencia-role':     'Ingénieur DevOps & Automatisation',
    'city-valencia-industry': 'E-Commerce · Intégration ERP',
    'city-valencia-status':   'Contrat hybride · Mar 2026–Présent',
    'city-valencia-m1-lbl':   'Latence des données',
    'city-valencia-m2-lbl':   'Disponibilité',
    'city-valencia-m3-lbl':   'Coût d\'intégration',
    'city-valencia-i1': 'Développement d\'un hub Python synchronisant Odoo ERP avec TikTok Shop, eBay et 7+ plateformes à fort volume',
    'city-valencia-i2': 'Architecture de pipelines de transformation réduisant les incohérences de ~95% via JSON/XML & PostgreSQL',
    'city-valencia-i3': 'Création de connecteurs API REST automatisant la gestion des commandes et la réconciliation des stocks',
    'city-valencia-detail': 'Ingénierie DevOps et automatisation chez Óxido Verde, Valence. Architecture d\'une infrastructure de données e-commerce en temps réel reliant Odoo Community ERP aux marchés mondiaux — réduction de la latence de 60% et des coûts d\'intégration de 30%.',

    /* Tokyo */
    'city-tokyo-role':     'Ingénieur Support Technique & Automatisation',
    'city-tokyo-industry': 'Automatisation IA · LLMOps',
    'city-tokyo-status':   'Contrat hybride · Oct 2025–Juin 2026',
    'city-tokyo-m1-lbl':   'Stack d\'automatisation',
    'city-tokyo-m2-lbl':   'Conformité',
    'city-tokyo-m3-lbl':   'RGPD',
    'city-tokyo-i1': 'Déploiement de workflows n8n & Ansible/Semaphore de bout en bout pour tests, suivi et gestion de serveurs',
    'city-tokyo-i2': 'Amélioration de Hosono AI — agent LLM interne automatisant le traitement de données pour une équipe internationale',
    'city-tokyo-i3': 'Architecture IAM cloud-native avec MFA et moindre privilège pour la conformité RGPD & ISO 27001',
    'city-tokyo-detail': 'Mission d\'ingénierie d\'automatisation hybride à Tokyo. Déploiement de workflows n8n et Ansible/Semaphore en production, amélioration d\'un agent LLM interne (Hosono AI) et conception de frameworks IAM cloud-native pour les écosystèmes Shopify et Shopware.',

    /* Prague */
    'city-prague-role':     'Ingénieur Données & Automatisation',
    'city-prague-industry': 'Ingénierie des données · Automatisation',
    'city-prague-status':   'Contrat à distance · Fév 2024–Août 2024',
    'city-prague-m1-lbl':   'Candidats évalués',
    'city-prague-m2-lbl':   'Précision de correspondance',
    'city-prague-m3-lbl':   'Intégrité des données',
    'city-prague-i1': 'Automatisation du tri de 2 000+ candidats via Make.com, améliorant la précision de correspondance de 92%',
    'city-prague-i2': 'Réduction du temps de révision manuelle RH de 20+ heures grâce à l\'automatisation des pipelines',
    'city-prague-i3': 'Pipelines Python (Pandas, NumPy) avec normalisation PII pour une intégrité de données de 99,9%',
    'city-prague-detail': 'Contrat d\'ingénierie des données à distance chez A-B InBev, l\'une des plus grandes entreprises de boissons. Automatisation des workflows de tri RH et développement de pipelines Python robustes pour la standardisation de datasets à grande échelle.',

    /* San Jose */
    'city-sanjose-role':     'Ingénieur CyberOps',
    'city-sanjose-industry': 'Cybersécurité · Réseaux',
    'city-sanjose-status':   'Contrat à distance · Juin 2023–Nov 2023',
    'city-sanjose-m1-lbl':   'MTTR',
    'city-sanjose-m2-lbl':   'Sites sécurisés',
    'city-sanjose-m3-lbl':   'Temps de provisioning',
    'city-sanjose-i1': 'Amélioration des playbooks SOAR et workflows de sécurité, réduisant le MTTR de 20%',
    'city-sanjose-i2': 'Standardisation et automatisation de l\'infrastructure de sécurité mondiale via Ansible & Terraform sur 50+ sites',
    'city-sanjose-i3': 'Mitigation des incidents à haut risque et réduction du temps de provisioning de 60% via l\'IaC',
    'city-sanjose-detail': 'Ingénierie CyberOps à distance au siège mondial de Cisco Systems. Amélioration de l\'automatisation SOAR, renforcement des workflows de sécurité et déploiements IaC à grande échelle sur 50+ sites internationaux.',

    /* Buea */
    'city-buea-role':     'Assistant Support IT & Formation',
    'city-buea-industry': 'Académique · Génie des réseaux',
    'city-buea-status':   'Contrat sur site · Déc 2022–Juin 2023',
    'city-buea-m1-lbl':   'Gain d\'apprentissage',
    'city-buea-m2-lbl':   'Conformité des politiques',
    'city-buea-m3-lbl':   'Modules de lab',
    'city-buea-i1': 'Installation et maintenance d\'infrastructure réseau d\'entreprise : routeurs, pare-feu et systèmes IAM',
    'city-buea-i2': 'Amélioration de l\'efficacité d\'apprentissage des étudiants jusqu\'à 89% via des protocoles de lab structurés',
    'city-buea-i3': 'Conformité complète aux politiques de sécurité institutionnelles sur toute l\'infrastructure réseau Cisco',
    'city-buea-detail': 'Rôle support IT Cisco et formation au Collège de Technologie de Buea — la Silicon Valley du Cameroun. Maintenance des laboratoires réseau d\'entreprise, conception de matériaux pédagogiques structurés et accompagnement des étudiants en ingénierie réseau.',

    /* Douala */
    'city-douala-role':     'Consultant DevOps Principal & Développeur Full Stack',
    'city-douala-industry': 'SaaS · DevOps · Full Stack',
    'city-douala-status':   'Conseil · Fév 2021–Présent',
    'city-douala-m1-lbl':   'SLA de disponibilité',
    'city-douala-m2-lbl':   'Cycles de release',
    'city-douala-m3-lbl':   'Disponibilité',
    'city-douala-i1': 'Consultant DevOps principal chez MisterComp : stratégie technique assurant 99,9% de continuité opérationnelle',
    'city-douala-i2': 'Développeur Full Stack chez Rocket 234 : solutions évolutives avec 99,99% de disponibilité système',
    'city-douala-i3': 'Automatisation des pipelines CI/CD et transformation DevOps, réduisant les cycles de release de 20%+',
    'city-douala-detail': 'Double rôle concurrent à Douala. Consultant DevOps Lead chez MisterComp pour définir la stratégie technologique et l\'infrastructure cloud. Développeur Full Stack chez Rocket 234 pour la livraison de plateformes web en production avec une disponibilité quasi-parfaite.',

    /* Pune */
    'city-pune-role':     'Chercheur diplômé — M.Sc. Informatique',
    'city-pune-industry': 'Académique · Recherche IA / ML',
    'city-pune-status':   'M.Sc. · Distinction (Haut niveau) · 2021–2023',
    'city-pune-m1-lbl':   'Mention',
    'city-pune-m2-lbl':   'Bourse au mérite',
    'city-pune-m3-lbl':   'Promotion',
    'city-pune-i1': 'M.Sc. en Informatique avec Distinction obtenu — niveau supérieur de la promotion',
    'city-pune-i2': 'Deux bourses consécutives au mérite reconnaissant l\'excellence académique',
    'city-pune-i3': 'Axes de recherche : AIOps, automatisation prédictive, DevOps cloud-native et infrastructure distribuée',
    'city-pune-detail': 'M.Sc. Informatique à temps plein à Vishwanath Karad MIT World Peace University, Pune, Inde. Diplômé avec Distinction (niveau supérieur) et deux bourses consécutives au mérite. Spécialisation : AIOps, automatisation prédictive et conception de systèmes cloud-native.',
  },

  /* ══════════════════════════════════════════
     SPANISH
  ══════════════════════════════════════════ */
  es: {
    'hero-title':  'Ingeniero DevOps &amp; AIOps &nbsp;·&nbsp; Experto en Automatización con IA',
    'hero-bio':    'Nómada digital orientado al detalle con 6+ años impulsando el cambio<br>mediante programas complejos y automatización potenciada por IA',
    'hero-btn':    '▶ &nbsp;ENTRAR A LA RED',
    'stat-years':  'Años Activos',
    'stat-cities': 'Ciudades Desplegadas',
    'stat-certs':  'Certificaciones',
    'stat-langs':  'Idiomas',
    'scroll-hint': 'Desplazar',

    's2-title':   'OPERACIONES GLOBALES',
    's2-sub':     'Globo 3D interactivo · Haz clic en un nodo para explorar',
    'globe-hint': 'ARRASTRAR PARA ROTAR &nbsp;·&nbsp; CLIC EN NODOS',

    's3-title': 'PROYECTOS PERSONALES',
    's3-sub':   'Diseño de Sistemas · Automatización con IA · Despliegues en Producción',

    'c1-num':  '01 / E-COMMERCE · ERP',
    'c1-name': 'MOTOR DE<br>SYNC ERP',
    'c1-desc': 'Diseño de APIs RESTful que conectan los principales marketplaces de e-commerce con Odoo Community para sincronización de inventario y pedidos en tiempo real. Desplegado en Óxido Verde, Hosono DE y MisterComp.',
    'c1-link': '→ VER EN GITLAB',

    'c2-num':  '05 / IA · HARDWARE',
    'c2-name': 'ATHENA<br>IA DE VOZ',
    'c2-desc': 'Dispositivo R&amp;D autónomo que fusiona razonamiento LLM con hardware de bajo consumo — respuesta de audio &lt;200ms, 94% precisión de intención, contexto multi-turno vía LangChain. Sin GPU.',
    'c2-link': '→ VER EN GITHUB',

    'c3-num':  '01 / SEGURIDAD · ACCESO REMOTO',
    'c3-name': 'NEXUS<br>ACCESO REMOTO',
    'c3-desc': 'Plataforma autoalojada de escritorio remoto y gestión de dispositivos con sesiones cifradas AES-GCM de extremo a extremo, transmisión de pantalla en tiempo real y descubrimiento de nodos P2P. Backend FastAPI &amp; WebSocket con autenticación JWT/TOTP.',
    'c3-link': '→ VER EN GITHUB',

    'c4-num':  '02 / IA · CIBERSEGURIDAD',
    'c4-name': 'XENOM<br>IA DE SEGURIDAD',
    'c4-desc': 'Compañero de automatización de seguridad con IA adaptativa que unifica escaneo de red, triaje de logs y respuesta a amenazas en un solo asistente — combinando varias herramientas de ciberseguridad con apoyo de decisión mediante LLM.',
    'c4-link': '→ VER EN GITHUB',

    'c5-num':  '06 / STARTUP · CTO',
    'c5-name': 'MISTERCOMP<br>PLATAFORMA',
    'c5-desc': 'Fundador &amp; CTO en Duala, Camerún. Stack completa — backend Django REST, SPA Angular, infra AWS, integraciones Odoo ERP. Más de 500 usuarios en menos de 12 meses.',
    'c5-link': '→ VER EN GITLAB',

    'c6-num':  '08 / DEVOPS · CLOUD',
    'c6-name': 'INFRAESTRUCTURA<br>MULTI-CLOUD',
    'c6-desc': 'Microservicios contenedorizados desplegados en AWS &amp; GCP — Kubernetes, Terraform IaC y pipelines GitOps blue-green sin tiempo de inactividad. Costos de infra reducidos un 65%.',
    'c6-link': '→ VER EN GITHUB',

    'c7-num':  '03 / IA · EDTECH',
    'c7-name': 'SMART<br>LEARNING',
    'c7-desc': 'Plataforma de aprendizaje con IA adaptativa construida con Django, PyTorch y Hugging Face — que genera rutas de aprendizaje personalizadas y análisis predictivo del rendimiento estudiantil.',
    'c7-link': '→ VER EN GITHUB',

    'c8-num':  '04 / SALUD DIGITAL · MULTIPLATAFORMA',
    'c8-name': 'GESTIÓN HOSPITALARIA<br>HÍBRIDA',
    'c8-desc': 'Sistema multiplataforma de gestión hospitalaria para una institución de salud africana — programación, historiales de pacientes y flujos de trabajo del personal en una sola app Ionic/Angular que funciona en web y móvil.',
    'c8-link': '→ VER EN GITHUB',

    's4-title':     'COMPETENCIAS CLAVE',
    's4-sub':       'Las habilidades adquiridas a lo largo de los años incluyen, sin limitarse, las siguientes',
    'neural-title': 'COMPETENCIAS CLAVE',
    'neural-sub':   'Las habilidades adquiridas a lo largo de los años incluyen, sin limitarse, las siguientes',
    's4-tools':     'herramientas',

    's4-cat-devops':       'DevOps & Cloud',
    's4-desc-devops':      'CI/CD · IaC · Orquestación de contenedores · Multi-cloud',
    's4-foot-devops':      'INFRAESTRUCTURA COMO CÓDIGO',

    's4-cat-automation':   'IA & Automatización',
    's4-desc-automation':  'IA agéntica · automatización de workflows · AIOps · pipelines LLM',
    's4-foot-automation':  'AIOPS & FLUJOS INTELIGENTES',

    's4-cat-programming':  'Programación',
    's4-desc-programming': 'Scripts de sistema · manipulación de datos · lógica full-stack',
    's4-foot-programming': 'LENGUAJES & SCRIPTING',

    's4-cat-datascience':  'Datos & ML',
    's4-desc-datascience': 'Pipelines ML · análisis estadístico · modelado predictivo · embeddings IA',
    's4-foot-datascience': 'MACHINE LEARNING & CIENCIA DE DATOS',

    's4-cat-frameworks':   'Frameworks & APIs',
    's4-desc-frameworks':  'Servicios backend · SPA · integración ERP · REST & GraphQL',
    's4-foot-frameworks':  'FRAMEWORKS WEB & APLICATIVOS',

    's4-cat-security':     'Seguridad & QA',
    's4-desc-security':    'Pruebas de penetración · QA automatizado · SIEM · monitoreo',
    's4-foot-security':    'CIBERSEGURIDAD & AUTOMATIZACIÓN DE PRUEBAS',

    's4-cat-collab':       'Colaboración & Productividad',
    's4-desc-collab':      'Herramientas remote-first · gestión de proyectos · comunicación asíncrona',
    's4-foot-collab':      'STACK DE PRODUCTIVIDAD & TRABAJO EN EQUIPO',

    's4-cat-privacy':      'Privacidad & Cumplimiento',
    's4-desc-privacy':     'Marcos regulatorios · IAM · protección de datos · riesgo de proveedores',
    's4-foot-privacy':     'GOBERNANZA, RIESGOS & CUMPLIMIENTO',

    's5-title': 'EL ARCHIVO',
    's5-sub':   'Credenciales · Certificaciones · Bóveda Académica',

    's5-c1-cat':        'Títulos Académicos',
    's5-c1-deg1-label': 'M.Sc.',
    's5-c1-deg1':       'M.Sc. Ciencias de la Computación',
    's5-c1-uni1':       'MIT World Peace University, Pune',
    's5-c1-gpa1':       'Distinción (Nivel Superior) · 3,6/4,0',
    's5-c1-badge':      '2× BECA AL MÉRITO',
    's5-c1-deg2':       'B.Tech Ingeniería de Software',
    's5-c1-uni2':       'Universidad de Buea, Camerún',
    's5-c1-gpa2':       '3,40 / 4,0 CGPA',

    's5-c2-cat':    'Certificación Profesional',
    's5-c2-title':  'CyberOps Associate',
    's5-c2-iss':    'Cisco Systems, Inc.',
    's5-c2-status': 'Verificado · Activo',

    's5-c3cert-cat':    'Certificación Profesional',
    's5-c3cert-title':  'Google AI Professional',
    's5-c3cert-iss':    'Google',
    's5-c3cert-status': 'Verificado · Activo',
    's5-c2-btn':    'Verificar Insignia Oficial ↗',

    's5-c3-cat':   'Lingüística',
    's5-c3-title': 'Profesional Multilingüe',
    's5-c3-sub':   '4 Idiomas · Nivel C1–C2 MCER',
    'lang-en':     'INGLÉS',
    'lang-fr':     'FRANCÉS',
    'lang-es':     'ESPAÑOL',
    'lang-ja':     'JAPONÉS',

    's6-title': 'COMPROMISO Y CONTACTO',
    's6-sub':   'Red Profesional · Comunicaciones Directas · Descarga de CV',
    'cv-btn':   'DESCARGAR CV',

    'sbar-online': 'SISTEMA EN LÍNEA',
    'sbar-exp':    '6+ AÑOS DE EXPERIENCIA',
    'sbar-nexus':  'NEXO GLOBAL ACTIVO',

    'nav-0': 'Entrada', 'nav-1': 'Global',        'nav-2': 'Proyectos',
    'nav-3': 'Habilidades', 'nav-4': 'Historial', 'nav-5': 'Contacto',

    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG: conexión establecida ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-cmd">whoami --perfil-completo</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  NOMBRE </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  ROL    </span><span class="t-val">  DevOps · AIOps · Experto en Automatización</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  EMAIL  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  TEL    </span><span class="t-val">  +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  BASE   </span><span class="t-val">  Valencia, España · Movilidad internacional</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  EXP    </span><span class="t-val">  6+ años · 7 ciudades · 4 idiomas</span></span>'],
      [3100, '<span class="t-line"><span class="t-out">╚═════════════════════════════════════════════╝</span></span>'],
      [3700, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-cmd">ls ./enlaces/</span></span>'],
      [4200, '<span class="t-line"><span class="t-warn">linkedin/  github/  gitlab/  youtube/  email/</span></span>'],
      [4800, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-cmd">cat contacto.cfg</span></span>'],
      [5300, '<span class="t-line"><span class="t-dim">linkedin </span><span class="t-info"> linkedin.com/in/elad-daudet</span></span>'],
      [5500, '<span class="t-line"><span class="t-dim">github   </span><span class="t-info"> github.com/MISTERorg</span></span>'],
      [5700, '<span class="t-line"><span class="t-dim">gitlab   </span><span class="t-info"> gitlab.com/mistercomp1</span></span>'],
      [5900, '<span class="t-line"><span class="t-dim">youtube  </span><span class="t-info"> youtube.com/@eladdaudet</span></span>'],
      [6300, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-out">listo para conectar. <span class="cursor-blink"></span></span></span>'],
    ],

    /* ── Globe modal UI strings (ES) ── */
    'cm-close-x':        '✕ CERRAR',
    'cm-position-label': 'Cargo ocupado',
    'cm-impact-label':   'Impacto clave',
    'cm-overview-label': 'Resumen',
    'cm-stack-label':    'Stack tecnológico',
    'cm-btn-view':       '→ VER PERFIL',
    'cm-btn-close':      '← CERRAR',

    /* ── Globe city translations (ES) ── */

    /* Valencia */
    'city-valencia-role':     'Ingeniero DevOps & Automatización',
    'city-valencia-industry': 'E-Commerce · Integración ERP',
    'city-valencia-status':   'Contrato híbrido · Mar 2026–Presente',
    'city-valencia-m1-lbl':   'Latencia de datos',
    'city-valencia-m2-lbl':   'Disponibilidad',
    'city-valencia-m3-lbl':   'Costo de integración',
    'city-valencia-i1': 'Hub de integración Python sincronizando Odoo ERP con TikTok Shop, eBay y 7+ plataformas de alto volumen',
    'city-valencia-i2': 'Pipelines de transformación reduciendo inconsistencias en ~95% vía JSON/XML y PostgreSQL',
    'city-valencia-i3': 'Conectores API REST automatizando gestión de pedidos y reconciliación de inventario a escala',
    'city-valencia-detail': 'Liderando ingeniería DevOps y automatización en Óxido Verde, Valencia. Arquitectura de infraestructura de datos e-commerce en tiempo real conectando Odoo Community ERP con mercados globales — reducción de latencia del 60% y costos de integración del 30%.',

    /* Tokyo */
    'city-tokyo-role':     'Ingeniero de Soporte Técnico & Automatización',
    'city-tokyo-industry': 'Automatización IA · LLMOps',
    'city-tokyo-status':   'Contrato híbrido · Oct 2025–Jun 2026',
    'city-tokyo-m1-lbl':   'Stack de automatización',
    'city-tokyo-m2-lbl':   'Conformidad',
    'city-tokyo-m3-lbl':   'RGPD',
    'city-tokyo-i1': 'Despliegue de automatizaciones n8n & Ansible/Semaphore de extremo a extremo para pruebas, seguimiento e inventario',
    'city-tokyo-i2': 'Mejora de Hosono AI — agente LLM interno automatizando el procesamiento de datos para un equipo internacional',
    'city-tokyo-i3': 'IAM cloud-native con MFA y mínimo privilegio logrando conformidad GDPR & ISO 27001',
    'city-tokyo-detail': 'Rol de ingeniería de automatización híbrida en Tokio. Despliegue de workflows n8n y Ansible/Semaphore en producción, mejora del agente LLM interno (Hosono AI) y diseño de frameworks IAM cloud-native para ecosistemas Shopify y Shopware.',

    /* Prague */
    'city-prague-role':     'Ingeniero de Datos & Automatización',
    'city-prague-industry': 'Ingeniería de Datos · Automatización',
    'city-prague-status':   'Contrato remoto · Feb 2024–Ago 2024',
    'city-prague-m1-lbl':   'Candidatos analizados',
    'city-prague-m2-lbl':   'Precisión de emparejamiento',
    'city-prague-m3-lbl':   'Integridad de datos',
    'city-prague-i1': 'Automatización de selección de 2.000+ candidatos mediante Make.com, mejorando precisión un 92%',
    'city-prague-i2': 'Reducción del tiempo de revisión manual de RRHH en más de 20 horas mediante automatización inteligente',
    'city-prague-i3': 'Pipelines Python (Pandas, NumPy) con normalización PII logrando 99,9% de integridad de datos',
    'city-prague-detail': 'Contrato remoto de ingeniería de datos en A-B InBev, una de las mayores empresas de bebidas del mundo. Construcción de workflows automatizados de selección de RRHH y pipelines Python robustos para estandarización de datos a gran escala.',

    /* San Jose */
    'city-sanjose-role':     'Ingeniero CyberOps',
    'city-sanjose-industry': 'Ciberseguridad · Redes',
    'city-sanjose-status':   'Contrato remoto · Jun 2023–Nov 2023',
    'city-sanjose-m1-lbl':   'MTTR',
    'city-sanjose-m2-lbl':   'Sitios asegurados',
    'city-sanjose-m3-lbl':   'Tiempo de aprovisionamiento',
    'city-sanjose-i1': 'Mejora de playbooks SOAR y flujos de seguridad, reduciendo MTTR un 20%',
    'city-sanjose-i2': 'Estandarización y automatización de infraestructura de seguridad global vía Ansible & Terraform en 50+ sitios',
    'city-sanjose-i3': 'Mitigación de incidentes de alto riesgo y reducción del tiempo de aprovisionamiento hasta un 60% mediante IaC',
    'city-sanjose-detail': 'Ingeniería CyberOps remota en la sede global de Cisco Systems. Automatización SOAR mejorada, flujos de trabajo de seguridad reforzados y despliegues IaC escalando la seguridad de red en 50+ sitios internacionales.',

    /* Buea */
    'city-buea-role':     'Asistente de Soporte IT & Instrucción',
    'city-buea-industry': 'Academia · Ingeniería de Redes',
    'city-buea-status':   'Contrato presencial · Dic 2022–Jun 2023',
    'city-buea-m1-lbl':   'Mejora del aprendizaje',
    'city-buea-m2-lbl':   'Cumplimiento de políticas',
    'city-buea-m3-lbl':   'Módulos de laboratorio',
    'city-buea-i1': 'Aprovisionamiento y mantenimiento de infraestructura de red empresarial: routers, firewalls y sistemas IAM',
    'city-buea-i2': 'Mejora de la eficiencia de aprendizaje estudiantil hasta un 89% mediante protocolos estructurados de laboratorio',
    'city-buea-i3': 'Cumplimiento total de políticas de seguridad institucionales en toda la infraestructura de red Cisco',
    'city-buea-detail': 'Rol de soporte IT Cisco e instrucción en el Colegio de Tecnología de Buea — el Silicon Valley de Camerún. Mantenimiento de laboratorios de redes empresariales, diseño de materiales curriculares estructurados y tutoría a estudiantes en ingeniería de redes.',

    /* Douala */
    'city-douala-role':     'Consultor DevOps Principal & Desarrollador Full Stack',
    'city-douala-industry': 'SaaS · DevOps · Full Stack',
    'city-douala-status':   'Consultoría · Feb 2021–Presente',
    'city-douala-m1-lbl':   'SLA de disponibilidad',
    'city-douala-m2-lbl':   'Ciclos de lanzamiento',
    'city-douala-m3-lbl':   'Disponibilidad',
    'city-douala-i1': 'Consultor DevOps principal en MisterComp: estrategia técnica garantizando 99,9% de continuidad operacional',
    'city-douala-i2': 'Desarrollador Full Stack en Rocket 234: soluciones escalables con 99,99% de disponibilidad del sistema',
    'city-douala-i3': 'Automatización de pipelines CI/CD y transformación DevOps, reduciendo ciclos de lanzamiento un 20%+',
    'city-douala-detail': 'Doble rol simultáneo en Duala. Como Consultor DevOps Principal en MisterComp, definición de estrategia tecnológica e infraestructura cloud. Como Desarrollador Full Stack en Rocket 234, entrega de plataformas web en producción con disponibilidad casi perfecta.',

    /* Pune */
    'city-pune-role':     'Investigador graduado — M.Sc. Ciencias de la Computación',
    'city-pune-industry': 'Academia · Investigación IA / ML',
    'city-pune-status':   'M.Sc. · Distinción (Nivel Superior) · 2021–2023',
    'city-pune-m1-lbl':   'Calificación',
    'city-pune-m2-lbl':   'Beca al mérito',
    'city-pune-m3-lbl':   'Cohorte',
    'city-pune-i1': 'Obtención de M.Sc. en Ciencias de la Computación con Distinción — nivel superior de la cohorte',
    'city-pune-i2': 'Dos becas consecutivas al mérito reconociendo la excelencia académica',
    'city-pune-i3': 'Investigación en AIOps, automatización predictiva, DevOps cloud-native y sistemas distribuidos',
    'city-pune-detail': 'M.Sc. Ciencias de la Computación a tiempo completo en Vishwanath Karad MIT World Peace University, Pune, India. Graduado con Distinción (Nivel Superior) y dos becas consecutivas al mérito. Especialización: AIOps, automatización predictiva y diseño de sistemas cloud-native.',
  },

  /* ══════════════════════════════════════════
     JAPANESE
  ══════════════════════════════════════════ */
  ja: {
    'hero-title':  'DevOps &amp; AIOps エンジニア &nbsp;·&nbsp; AI自動化エキスパート',
    'hero-bio':    '6年以上の実績を持つデジタルノマド。複雑なプログラム管理と<br>AI駆動の自動化で変革を推進',
    'hero-btn':    '▶ &nbsp;ネットワークへ入る',
    'stat-years':  '活動年数',
    'stat-cities': '展開都市',
    'stat-certs':  '認定資格',
    'stat-langs':  '言語',
    'scroll-hint': 'スクロール',

    's2-title':   'グローバル・オペレーション',
    's2-sub':     'インタラクティブ3Dグローブ · 都市ノードをクリックして探索',
    'globe-hint': 'ドラッグで回転 &nbsp;·&nbsp; ノードをクリックして探索',

    's3-title': '個人プロジェクト',
    's3-sub':   'システム設計 · AI駆動の自動化 · 本番環境展開',

    'c1-num':  '01 / Eコマース · ERP',
    'c1-name': 'ERPシンク<br>エンジン',
    'c1-desc': '主要なECマーケットプレイスとOdoo Communityをつなぐリアルタイム在庫・受注同期のRESTful APIを設計。Óxido Verde、Hosono DE、MisterCompで実装。',
    'c1-link': '→ GitLabで見る',

    'c2-num':  '05 / AI · ハードウェア',
    'c2-name': 'ATHENA<br>音声AI',
    'c2-desc': 'LLM推論とカスタム低電力ハードウェアを融合した自律型R&Dデバイス — 200ms未満の音声応答、94%意図認識精度、LangChainによる多ターンコンテキスト管理。GPU不要。',
    'c2-link': '→ GitHubで見る',

    'c3-num':  '01 / セキュリティ · リモートアクセス',
    'c3-name': 'NEXUS<br>リモートアクセス',
    'c3-desc': 'AES-GCMによるエンドツーエンド暗号化セッション、リアルタイム画面配信、P2Pエンドポイント検出を備えた自己ホスト型リモートデスクトップ・デバイス管理プラットフォーム。FastAPIとWebSocketのバックエンドにJWT/TOTP認証を実装。',
    'c3-link': '→ GitHubで見る',

    'c4-num':  '02 / AI · サイバーセキュリティ',
    'c4-name': 'XENOM<br>セキュリティAI',
    'c4-desc': 'ネットワークスキャン、ログトリアージ、脅威対応を一つのアシスタントに統合した適応型AIセキュリティ自動化コンパニオン。複数のサイバーセキュリティツールとLLMによる意思決定支援を組み合わせる。',
    'c4-link': '→ GitHubで見る',

    'c5-num':  '06 / スタートアップ · CTO',
    'c5-name': 'MISTERCOMP<br>プラットフォーム',
    'c5-desc': 'カメルーン・ドゥアラで創業者兼CTO。Django RESTバックエンド、Angular SPA、AWSインフラ、Odoo ERP統合を含む全スタックを構築。12ヶ月以内に500人以上のユーザーを達成。',
    'c5-link': '→ GitLabで見る',

    'c6-num':  '08 / DevOps · クラウド',
    'c6-name': 'マルチクラウド<br>DevOpsインフラ',
    'c6-desc': 'AWSとGCPにまたがるコンテナ化マイクロサービスをデプロイ — Kubernetes、Terraform IaC、ゼロダウンタイムのBlue-Green GitOpsパイプライン。インフラコストを65%削減。',
    'c6-link': '→ GitHubで見る',

    'c7-num':  '03 / AI · EdTech',
    'c7-name': 'SMART<br>LEARNING',
    'c7-desc': 'Django、PyTorch、Hugging Faceで構築した適応型AI学習プラットフォーム。パーソナライズされた学習パスと学生パフォーマンスの予測分析を生成。',
    'c7-link': '→ GitHubで見る',

    'c8-num':  '04 / ヘルステック · クロスプラットフォーム',
    'c8-name': 'ハイブリッド病院<br>管理システム',
    'c8-desc': 'アフリカの医療機関向けに構築したクロスプラットフォーム病院管理システム。予約管理、患者記録、スタッフのワークフローを、Web・モバイル両対応の単一Ionic/Angularアプリに統合。',
    'c8-link': '→ GitHubで見る',

    's4-title':     'コア・コンピタンス',
    's4-sub':       '長年培ってきたスキルは以下の通りですが、これらに限定されません',
    'neural-title': 'コア・コンピタンス',
    'neural-sub':   '長年培ってきたスキルは以下の通りですが、これらに限定されません',
    's4-tools':     'ツール',

    's4-cat-devops':       'DevOps & クラウド',
    's4-desc-devops':      'CI/CD · IaC · コンテナオーケストレーション · マルチクラウド',
    's4-foot-devops':      'インフラストラクチャ・アズ・コード',

    's4-cat-automation':   'AI & 自動化',
    's4-desc-automation':  'エージェントAI · ワークフロー自動化 · AIOps · LLMパイプライン',
    's4-foot-automation':  'AIOps & インテリジェントワークフロー',

    's4-cat-programming':  'プログラミング',
    's4-desc-programming': 'システムスクリプト · データ操作 · フルスタックロジック',
    's4-foot-programming': '言語 & スクリプト',

    's4-cat-datascience':  'データ & ML',
    's4-desc-datascience': 'MLパイプライン · 統計分析 · 予測モデリング · AI埋め込み',
    's4-foot-datascience': 'マシーンラーニング & データサイエンス',

    's4-cat-frameworks':   'フレームワーク & API',
    's4-desc-frameworks':  'バックエンドサービス · SPA · ERP統合 · REST & GraphQL',
    's4-foot-frameworks':  'ウェブ & アプリケーションフレームワーク',

    's4-cat-security':     'セキュリティ & QA',
    's4-desc-security':    'ペネトレーションテスト · 自動QA · SIEM · モニタリング',
    's4-foot-security':    'サイバーセキュリティ & テスト自動化',

    's4-cat-collab':       'コラボレーション & 生産性',
    's4-desc-collab':      'リモートファーストツール · プロジェクト管理 · 非同期コミュニケーション',
    's4-foot-collab':      '生産性 & チームワークスタック',

    's4-cat-privacy':      'プライバシー & コンプライアンス',
    's4-desc-privacy':     '規制フレームワーク · IAM · データ保護 · ベンダーリスク管理',
    's4-foot-privacy':     'ガバナンス、リスク & コンプライアンス',

    's5-title': 'アーカイブ',
    's5-sub':   '資格 · 認定 · 学術記録',

    's5-c1-cat':        '学術学位',
    's5-c1-deg1-label': '修士',
    's5-c1-deg1':       '理学修士 コンピュータサイエンス',
    's5-c1-uni1':       'MITワールドピース大学、プネー',
    's5-c1-gpa1':       '優秀（最上位） · 3.6/4.0',
    's5-c1-badge':      '2× 成績優秀奨学金',
    's5-c1-deg2':       '工学士 ソフトウェアエンジニアリング',
    's5-c1-uni2':       'ブエア大学、カメルーン',
    's5-c1-gpa2':       '3.40 / 4.0 CGPA',

    's5-c2-cat':    'プロフェッショナル認定',
    's5-c2-title':  'CyberOps アソシエイト',
    's5-c2-iss':    'シスコシステムズ株式会社',
    's5-c2-status': '認証済み · 有効',

    's5-c3cert-cat':    'プロフェッショナル認定資格',
    's5-c3cert-title':  'Google AI Professional',
    's5-c3cert-iss':    'Google',
    's5-c3cert-status': '認証済み · 有効',
    's5-c2-btn':    '公式バッジを確認 ↗',

    's5-c3-cat':   '言語学',
    's5-c3-title': 'マルチリンガルプロフェッショナル',
    's5-c3-sub':   '4言語 · CEFR C1–C2レベル',
    'lang-en':     '英語',
    'lang-fr':     'フランス語',
    'lang-es':     'スペイン語',
    'lang-ja':     '日本語',

    's6-title': 'エンゲージメントと連絡先',
    's6-sub':   'プロフェッショナルネットワーク · 直接のやり取り · 履歴書ダウンロード',
    'cv-btn':   '履歴書をダウンロード',

    'sbar-online': 'システムオンライン',
    'sbar-exp':    '6年以上の経験',
    'sbar-nexus':  'グローバルネクサス稼働中',

    'nav-0': 'ゲートウェイ', 'nav-1': 'グローバル', 'nav-2': 'プロジェクト',
    'nav-3': 'スキル',       'nav-4': '実績',        'nav-5': '連絡先',

    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG: 接続確立 ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-cmd">whoami --フルプロファイル</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  名前    </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  役職    </span><span class="t-val">  DevOps · AIOps · 自動化エキスパート</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  メール  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  電話    </span><span class="t-val">  +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  拠点    </span><span class="t-val">  バレンシア、スペイン · リロケーション可</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  経験    </span><span class="t-val">  6年以上 · 7都市 · 4言語</span></span>'],
      [3100, '<span class="t-line"><span class="t-out">╚═════════════════════════════════════════════╝</span></span>'],
      [3700, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-cmd">ls ./リンク/</span></span>'],
      [4200, '<span class="t-line"><span class="t-warn">linkedin/  github/  gitlab/  youtube/  email/</span></span>'],
      [4800, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-cmd">cat 連絡先.cfg</span></span>'],
      [5300, '<span class="t-line"><span class="t-dim">linkedin </span><span class="t-info"> linkedin.com/in/elad-daudet</span></span>'],
      [5500, '<span class="t-line"><span class="t-dim">github   </span><span class="t-info"> github.com/MISTERorg</span></span>'],
      [5700, '<span class="t-line"><span class="t-dim">gitlab   </span><span class="t-info"> gitlab.com/mistercomp1</span></span>'],
      [5900, '<span class="t-line"><span class="t-dim">youtube  </span><span class="t-info"> youtube.com/@eladdaudet</span></span>'],
      [6300, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-out">接続準備完了。 <span class="cursor-blink"></span></span></span>'],
    ],

    /* ── Globe modal UI strings (JA) ── */
    'cm-close-x':        '✕ 閉じる',
    'cm-position-label': '担当ポジション',
    'cm-impact-label':   '主な成果',
    'cm-overview-label': '概要',
    'cm-stack-label':    '技術スタック',
    'cm-btn-view':       '→ プロフィールを見る',
    'cm-btn-close':      '← 閉じる',

    /* ── Globe city translations (JA) ── */

    /* Valencia */
    'city-valencia-role':     'DevOps・自動化エンジニア',
    'city-valencia-industry': 'Eコマース · ERP統合',
    'city-valencia-status':   'ハイブリッド契約 · 2026年3月〜現在',
    'city-valencia-m1-lbl':   'データ遅延',
    'city-valencia-m2-lbl':   '稼働率',
    'city-valencia-m3-lbl':   '統合コスト',
    'city-valencia-i1': 'Odoo ERPとTikTok Shop、eBayなど7以上のプラットフォームを同期するPython統合ハブを構築',
    'city-valencia-i2': 'JSON/XML・PostgreSQL全体でデータの不整合を約95%削減するデータ変換パイプラインを設計',
    'city-valencia-i3': '受注処理と在庫照合を大規模に自動化するRESTful APIコネクターを構築',
    'city-valencia-detail': 'バレンシアのÓxido VerdeでDevOps・自動化エンジニアリングをリード。Odoo Community ERPとグローバルマーケットプレイスを接続するリアルタイムECデータインフラを構築 — レイテンシ60%削減、統合コスト30%削減を達成。',

    /* Tokyo */
    'city-tokyo-role':     'テクニカルサポート・自動化エンジニア',
    'city-tokyo-industry': 'AI自動化 · LLMOps',
    'city-tokyo-status':   'ハイブリッド契約 · 2025年10月〜2026年6月',
    'city-tokyo-m1-lbl':   '自動化スタック',
    'city-tokyo-m2-lbl':   'コンプライアンス',
    'city-tokyo-m3-lbl':   'GDPR',
    'city-tokyo-i1': 'テスト・追跡・サーバー管理のためのn8n・Ansible/Semaphoreエンドツーエンド自動化を構築・展開',
    'city-tokyo-i2': '社内LLM自動化エージェント「Hosono AI」を改良し、分散型国際チームのデータ処理を自動化',
    'city-tokyo-i3': 'MFAと最小権限アクセス実装のクラウドネイティブIAMを設計しGDPR・ISO 27001準拠を達成',
    'city-tokyo-detail': '東京でのハイブリッド自動化エンジニアリング業務。n8n・Ansible/Semaphoreワークフローを本番環境に展開し、社内LLM自動化エージェント（Hosono AI）を改良。ShopifyおよびShopwareエコシステム全体でクラウドネイティブIAMセキュリティフレームワークを設計。',

    /* Prague */
    'city-prague-role':     'データ・自動化エンジニア',
    'city-prague-industry': 'データエンジニアリング · 自動化',
    'city-prague-status':   'リモート契約 · 2024年2月〜2024年8月',
    'city-prague-m1-lbl':   '候補者審査数',
    'city-prague-m2-lbl':   'マッチング精度',
    'city-prague-m3-lbl':   'データ整合性',
    'city-prague-i1': 'Make.comワークフローで2,000人以上の候補者スクリーニングを自動化し、マッチング精度を92%に向上',
    'city-prague-i2': 'インテリジェントパイプライン自動化により、HR手動審査時間を20時間以上削減',
    'city-prague-i3': 'PII正規化によるPython（Pandas、NumPy）データパイプラインで99.9%のデータ整合性を実現',
    'city-prague-detail': 'A-B InBev（世界最大の飲料会社の一つ）でのリモートデータエンジニアリング契約。大規模データセット標準化のため、自動HRスクリーニングワークフローと企業グレードのPythonデータパイプラインを構築。',

    /* San Jose */
    'city-sanjose-role':     'CyberOpsエンジニア',
    'city-sanjose-industry': 'サイバーセキュリティ · ネットワーキング',
    'city-sanjose-status':   'リモート契約 · 2023年6月〜2023年11月',
    'city-sanjose-m1-lbl':   'MTTR',
    'city-sanjose-m2-lbl':   'セキュア化サイト',
    'city-sanjose-m3-lbl':   'プロビジョニング時間',
    'city-sanjose-i1': 'SOARプレイブックとセキュリティワークフローを強化し、平均復旧時間（MTTR）を20%削減',
    'city-sanjose-i2': 'Ansible・TerraformによるIaCで50以上のサイト全体のグローバルセキュリティインフラを標準化・自動化',
    'city-sanjose-i3': '高リスクインシデントを緩和し、IaC自動化により最大60%のプロビジョニング時間短縮を達成',
    'city-sanjose-detail': 'Ciscoシステムズのグローバル本社でのリモートCyberOpsエンジニアリング。エンタープライズSOAR自動化の強化、セキュリティワークフローの堅牢化、50以上の国際拠点にわたるIaCロールアウトを実施。',

    /* Buea */
    'city-buea-role':     'ITサポート・教育アシスタント',
    'city-buea-industry': '学術 · ネットワークエンジニアリング',
    'city-buea-status':   '現地契約 · 2022年12月〜2023年6月',
    'city-buea-m1-lbl':   '学習効果',
    'city-buea-m2-lbl':   'ポリシー準拠',
    'city-buea-m3-lbl':   'ラボモジュール',
    'city-buea-i1': 'ルーター、ファイアウォール、IAMシステムなど企業グレードのネットワークインフラを整備・維持',
    'city-buea-i2': '体系的なエンタープライズネットワーキングラボプロトコルにより学習効率を最大89%向上',
    'city-buea-i3': 'すべてのCiscoネットワークインフラで機関のセキュリティポリシーへの完全準拠を確保',
    'city-buea-detail': 'カメルーンのシリコンバレーと呼ばれるブエアの工科大学でのCisco ITサポート・教育業務。エンタープライズネットワーキングラボの維持管理、構造化カリキュラム教材の設計、ネットワークエンジニアリング学生の指導を担当。',

    /* Douala */
    'city-douala-role':     'リードDevOpsコンサルタント & フルスタック開発者',
    'city-douala-industry': 'SaaS · DevOps · フルスタック',
    'city-douala-status':   'コンサルティング · 2021年2月〜現在',
    'city-douala-m1-lbl':   '稼働率SLA',
    'city-douala-m2-lbl':   'リリースサイクル',
    'city-douala-m3-lbl':   '可用性',
    'city-douala-i1': 'MisterCompのリードDevOpsコンサルタントとして99.9%の運用継続性を確保する技術戦略を定義',
    'city-douala-i2': 'Rocket 234のフルスタック開発者として99.99%のシステム可用性を実現するスケーラブルなソリューションを提供',
    'city-douala-i3': 'CI/CDパイプライン自動化とDevOps変革を主導し、リリースサイクルを20%以上短縮',
    'city-douala-detail': 'ドゥアラでの並行デュアルロール。MisterCompでのリードDevOpsコンサルタントとして技術戦略とクラウドインフラを定義。Rocket 234でのフルスタック開発者として、ほぼ完璧な稼働率を誇る本番グレードのウェブプラットフォームを提供。',

    /* Pune */
    'city-pune-role':     '大学院研究員 — 理学修士 コンピュータサイエンス',
    'city-pune-industry': '学術 · AI / ML研究',
    'city-pune-status':   '修士課程 · 優秀（最上位） · 2021〜2023年',
    'city-pune-m1-lbl':   '成績',
    'city-pune-m2-lbl':   '成績優秀奨学金',
    'city-pune-m3-lbl':   'コホート',
    'city-pune-i1': 'コンピュータサイエンス理学修士を優秀（最上位）で取得 — コホートのトップティア',
    'city-pune-i2': '優れた学業成績を認められ、連続2回の成績優秀奨学金を受給',
    'city-pune-i3': 'AIOps、予測自動化、クラウドネイティブDevOps、分散インフラを研究テーマとして専攻',
    'city-pune-detail': 'インド・プネーのVishwanath Karad MITワールドピース大学でコンピュータサイエンス修士を取得。優秀（最上位）で卒業し、連続2回の成績優秀奨学金を獲得。AIOps、予測自動化、クラウドネイティブシステム設計を専攻。',
  },
};

/* ══════════════════════════════════════════════════
   setGlobalLang(code)
══════════════════════════════════════════════════ */
let currentLang = 'en';

function setGlobalLang(code) {
  if (!I18N[code]) return;
  currentLang = code;
  const t = I18N[code];

  /* 1. All [data-i18n] elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* 2. Side-nav dot labels */
  document.querySelectorAll('.nd').forEach(dot => {
    const i = parseInt(dot.getAttribute('data-i'));
    if (t['nav-' + i]) dot.setAttribute('data-l', t['nav-' + i]);
  });

  /* 3. Mark active topbar button */
  document.querySelectorAll('.ln-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === code.toUpperCase());
  });

  /* 4. Reset terminal */
  const termBody = document.getElementById('termBody');
  if (termBody) {
    termBody.innerHTML = '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">ping ELAD_ANEDO_DAUDET --connect</span></span>';
    if (typeof termDone !== 'undefined') termDone = false;
    const s6 = document.getElementById('s6');
    if (s6) {
      const r = s6.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0 && typeof initTerminal === 'function') initTerminal();
    }
  }

  /* 5. Sync s4 section header (belt + suspenders — also covered by [data-i18n]) */
  const s4t = document.getElementById('s4t');
  const s4s = document.getElementById('s4s');
  if (s4t && t['neural-title']) s4t.textContent = t['neural-title'];
  if (s4s && t['neural-sub'])   s4s.textContent = t['neural-sub'];

  /* 6. Refresh all 8 bento-grid card labels */
  if (typeof refreshNeural === 'function') refreshNeural();

  /* 7. Refresh globe city panel role labels */
  if (typeof refreshCityPanel === 'function') refreshCityPanel();

  /* 8. Re-render open city modal in the new language (live update) */
  if (typeof refreshOpenModal === 'function') refreshOpenModal();
}

function getLang() { return currentLang; }
