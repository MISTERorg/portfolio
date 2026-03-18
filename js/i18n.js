/* ═══════════════════════════════════════════════════
   i18n.js — Global Language Switcher
   Covers: EN · FR · ES · JA
   Called by topbar language buttons → setGlobalLang(code)
═══════════════════════════════════════════════════ */

const I18N = {

  /* ─────────────── ENGLISH ─────────────── */
  en: {
    'hero-title':   'DevOps &amp; AIOps Engineer &nbsp;·&nbsp; AI-Powered Automation Expert',
    'hero-bio':     'Detail-oriented Digital Nomad with 6+ years of success driving change through<br>managing complex programs and AI-powered automation',
    'hero-btn':     '▶ &nbsp;ENTER THE NETWORK',
    'stat-years':   'Years Active',
    'stat-cities':  'Cities Deployed',
    'stat-certs':   'Certifications',
    'stat-langs':   'Languages',
    'scroll-hint':  'Scroll',
    
    /* Section 2 */
    's2-title':     'GLOBAL OPERATIONS',
    's2-sub':       'Interactive 3D Globe · Click any city node to explore',
    'globe-hint':   'DRAG TO ROTATE &nbsp;·&nbsp; CLICK NODES TO EXPLORE',
    
    /* Section 3 */
    's3-title':     'PERSONAL PROJECTS',
    's3-sub':       'System Design · AI-Powered Automation · Production Deployments',
    'c1-num':       '01 / E-COMMERCE · ERP',
    'c1-name':      'ERP SYNC<br>ENGINE',
    'c1-desc':      'Designed RESTful APIs linking major e-commerce marketplaces with Odoo Community for real-time inventory and order sync. Built at Óxido Verde, Hosono DE, and MisterComp.',
    'c1-link':      '→ LEARN MORE',
    'c2-num':       '02 / CYBERSECURITY',
    'c2-name':      'CYBEROPS<br>DEFENSE MATRIX',
    'c2-desc':      'Designed firewall and IDS/IPS defenses at Cisco Systems, built incident response playbooks, and automated threat detection — reducing MTTR by 40%.',
    'c2-link':      '→ CISCO · SAN JOSE',
    'c3-num':       '03 / DATA · INTEGRATION',
    'c3-name':      'MULTI-PLATFORM<br>DATA PIPELINES',
    'c3-desc':      'Developed and optimized Python automation scripts for massive multi-platform data integration and transformation at A-B InBev (Prague) and Makana-Partners.',
    'c3-link':      '→ VIEW PROJECT',
    'c4-num':       '04 / AUTOMATION · AIOPS',
    'c4-name':      'AUTOMATION<br>FOUNDRY',
    'c4-desc':      'Built automated workflows for seamless data flow and orchestrated CI/CD pipelines. From low-code RPA to infrastructure-as-code — end-to-end AIOps coverage.',
    'c4-link':      '→ GITHUB',
    'c5-num':       '05 / STARTUP · CTO',
    'c5-name':      'MISTERCOMP<br>STARTUP',
    'c5-desc':      'Founder &amp; CTO in Douala, Cameroon. Led full-stack engineering — deploying Odoo ERP systems and custom APIs from the ground up, driving 3× user growth in 12 months.',
    'c5-link':      '→ VIEW ON GITLAB',
    'c6-num':       '06 / QA · CI/CD',
    'c6-name':      'CONTINUOUS<br>INTEGRATION &amp; TESTING',
    'c6-desc':      'Conducted testing, validation, and documentation of API endpoints — ensuring 24/7 data accuracy, zero-regression deployments, and automated quality gates.',
    'c6-link':      '→ LEARN MORE',
    
    /* Section 4 */
    's4-title':     'CORE COMPETENCIES',
    's4-sub':       'Skills Learned across the years are inclusive but not limited to the skills below',
    'neural-title': 'CORE COMPETENCIES',
    'neural-sub':   'Skills Learned across the years are inclusive but not limited to the skills below',
    's4-tools':         'tools',
    's4-cat-devops':    'DEVOPS & CLOUD',
    's4-cat-automation':'AI AUTOMATION',
    's4-cat-programming':'PROGRAMMING',
    's4-cat-frameworks': 'FRAMEWORKS',
    's4-cat-security':  'SECURITY & QA',
    's4-cat-databases':  'DATABASES',
    's4-desc-devops':    'Infrastructure & Automation',
    's4-desc-automation':'Workflow & Intelligence',
    's4-desc-programming':'Languages & Scripting',
    's4-desc-frameworks':'Backend & Full-Stack',
    's4-desc-security':  'Testing & Compliance',
    's4-desc-databases': 'Data Storage & Cache',
    's4-foot-devops':    'INFRASTRUCTURE AS CODE',
    's4-foot-automation':'AUTOMATED PIPELINES',
    's4-foot-programming':'MULTI-PARADIGM',
    's4-foot-frameworks':'API & ENTERPRISE',
    's4-foot-security':  'PEN TESTING & SAST',
    's4-foot-databases': 'SQL & NOSQL',
    
    /* Section 5 */
    's5-title':     'PROFESSIONAL TRACK RECORD',
    's5-sub':       'Proven history of dedication, punctuality and success over the years',
      's5-title':        'THE ARCHIVE',
  's5-sub':          'Credentials · Certifications · Academic Vault',
    /* Card 1 — Academic */
    's5-c1-cat':       'Academic Degrees',
    's5-c1-deg1-label':'M.Sc.',
    's5-c1-deg1':      'M.Sc. Computer Science',
    's5-c1-uni1':      'MIT World Peace University, Pune',
    's5-c1-gpa1':      '8.52 / 10 CGPA',
    's5-c1-badge':     '2× MERIT SCHOLARSHIP',
    's5-c1-deg2':      'B.Tech Software Engineering',
    's5-c1-uni2':      'University of Buea, Cameroon',
    's5-c1-gpa2':      '3.46 / 4.0 CGPA',
    /* Card 2 — CyberOps */
    's5-c2-cat':       'Professional Certification',
    's5-c2-title':     'CyberOps Associate',
    's5-c2-iss':       'Cisco Systems, Inc.',
    's5-c2-status':    'Verified · Active',
    's5-c2-btn':       'Verify Official Badge ↗',
    /* Card 3 — Languages */
    's5-c3-cat':       'Linguistics',
    's5-c3-title':     'Multilingual Professional',
    's5-c3-sub':       '4 Languages · C1–C2 CEFR Level',
    'lang-en':         'ENGLISH',
    'lang-fr':         'FRENCH',
    'lang-es':         'SPANISH',
    'lang-ja':         'JAPANESE',

    /* Section 6 */
    's6-title':     'ENGAGEMENT & CONTACT',
    's6-sub':       'Professional Network · Direct Communications · Resume Download',
    'cv-btn':       'DOWNLOAD CV',
    
    'sbar-online':  'SYSTEM ONLINE',
    'sbar-exp':     '6+ YRS EXPERIENCE',
    'sbar-nexus':   'GLOBAL NEXUS ACTIVE',
    
    'nav-0': 'Gateway', 'nav-1': 'Global', 'nav-2': 'Projects',
    'nav-3': 'Skills',  'nav-4': 'History','nav-5': 'Contact',
    
    'terminal-lines': [
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
    ],
  },

  /* ─────────────── FRENCH ─────────────── */
  fr: {
    'hero-title':   'Ingénieur DevOps &amp; AIOps &nbsp;·&nbsp; Expert en Automatisation IA',
    'hero-bio':     'Nomade numérique orienté détail avec 6+ ans de succès en transformation digitale<br>via la gestion de programmes complexes et l\'automatisation IA',
    'hero-btn':     '▶ &nbsp;ENTRER DANS LE RÉSEAU',
    'stat-years':   'Années d\'activité',
    'stat-cities':  'Villes déployées',
    'stat-certs':   'Certifications',
    'stat-langs':   'Langues',
    'scroll-hint':  'Défiler',
    
    's2-title':     'OPÉRATIONS MONDIALES',
    's2-sub':       'Globe 3D interactif · Cliquez sur un nœud pour explorer',
    'globe-hint':   'GLISSER POUR PIVOTER &nbsp;·&nbsp; CLIQUER LES NŒUDS',
    
    's3-title':     'PROJETS PERSONNELS',
    's3-sub':       'Conception de Systèmes · Automatisation IA · Déploiements en Production',
    'c1-num':       '01 / E-COMMERCE · ERP',
    'c1-name':      'MOTEUR DE<br>SYNC ERP',
    'c1-desc':      'Conception d\'APIs RESTful reliant les principales marketplaces e-commerce à Odoo Community pour une synchronisation en temps réel. Déployé chez Óxido Verde, Hosono DE et MisterComp.',
    'c1-link':      '→ EN SAVOIR PLUS',
    'c2-num':       '02 / CYBERSÉCURITÉ',
    'c2-name':      'MATRICE DE<br>DÉFENSE CYBEROPS',
    'c2-desc':      'Conception des défenses pare-feu et IDS/IPS chez Cisco Systems, élaboration de playbooks de réponse aux incidents et automatisation de la détection des menaces — MTTR réduit de 40 %.',
    'c2-link':      '→ CISCO · SAN JOSE',
    'c3-num':       '03 / DONNÉES · INTÉGRATION',
    'c3-name':      'PIPELINES DE DONNÉES<br>MULTI-PLATEFORMES',
    'c3-desc':      'Développement et optimisation de scripts Python pour l\'intégration et transformation massives de données multi-plateformes chez A-B InBev (Prague) et Makana-Partners.',
    'c3-link':      '→ VOIR LE PROJET',
    'c4-num':       '04 / AUTOMATISATION · AIOPS',
    'c4-name':      'FONDERIE<br>D\'AUTOMATISATION',
    'c4-desc':      'Création de workflows automatisés pour un flux de données fluide et orchestration de pipelines CI/CD. Du RPA low-code à l\'infrastructure-as-code — couverture AIOps de bout en bout.',
    'c4-link':      '→ GITHUB',
    'c5-num':       '05 / STARTUP · CTO',
    'c5-name':      'MISTERCOMP<br>STARTUP',
    'c5-desc':      'Fondateur &amp; CTO à Douala, Cameroun. Direction de l\'ingénierie full-stack — déploiement de systèmes Odoo ERP et APIs personnalisées de zéro, avec une croissance utilisateur 3× en 12 mois.',
    'c5-link':      '→ VOIR SUR GITLAB',
    'c6-num':       '06 / QA · CI/CD',
    'c6-name':      'INTÉGRATION<br>CONTINUE &amp; TESTS',
    'c6-desc':      'Réalisation de tests, validation et documentation des endpoints API — garantissant la précision 24h/24, des déploiements sans régression et des portes qualité automatisées.',
    'c6-link':      '→ EN SAVOIR PLUS',
    
    's4-title':     'COMPÉTENCES CLÉS',
    's4-sub':       'Les compétences acquises au fil des ans incluent, sans s\'y limiter, celles ci-dessous',
    'neural-title': 'COMPÉTENCES CLÉS',
    'neural-sub':   'Les compétences acquises au fil des ans incluent, sans s\'y limiter, celles ci-dessous',
       's4-tools':         'outils',
    's4-cat-devops':    'DEVOPS & CLOUD',
    's4-cat-automation':'AUTOMATISATION IA',
    's4-cat-programming':'PROGRAMMATION',
    's4-cat-frameworks': 'FRAMEWORKS',
    's4-cat-security':  'SÉCURITÉ & QA',
    's4-cat-databases':  'BASES DE DONNÉES',
    's4-desc-devops':    'Infrastructure & Automatisation',
    's4-desc-automation':'Workflows & Intelligence',
    's4-desc-programming':'Langages & Scripts',
    's4-desc-frameworks':'Backend & Full-Stack',
    's4-desc-security':  'Tests & Conformité',
    's4-desc-databases': 'Stockage & Cache',
    's4-foot-devops':    'INFRASTRUCTURE AS CODE',
    's4-foot-automation':'PIPELINES AUTOMATISÉS',
    's4-foot-programming':'MULTI-PARADIGME',
    's4-foot-frameworks':'API & ENTREPRISE',
    's4-foot-security':  'PEN TESTING & SAST',
    's4-foot-databases': 'SQL & NOSQL',


    's5-title':     'PARCOURS PROFESSIONNEL',
    's5-sub':       'Historique prouvé de dévouement, de ponctualité et de succès au fil des ans',
    's5-title':        'LES ARCHIVES',
    's5-sub':          'Diplômes · Certifications · Voûte académique',
    's5-c1-cat':       'Diplômes Académiques',
    's5-c1-deg1-label':'M.Sc.',
    's5-c1-deg1':      'M.Sc. Informatique',
    's5-c1-uni1':      'MIT World Peace University, Pune',
    's5-c1-gpa1':      '8,52 / 10 CGPA',
    's5-c1-badge':     '2× BOURSE AU MÉRITE',
    's5-c1-deg2':      'B.Tech Génie Logiciel',
    's5-c1-uni2':      'Université de Buea, Cameroun',
    's5-c1-gpa2':      '3,46 / 4,0 CGPA',
    's5-c2-cat':       'Certification Professionnelle',
    's5-c2-title':     'CyberOps Associate',
    's5-c2-iss':       'Cisco Systems, Inc.',
    's5-c2-status':    'Vérifié · Actif',
    's5-c2-btn':       'Vérifier le Badge Officiel ↗',
    's5-c3-cat':       'Linguistique',
    's5-c3-title':     'Professionnel Multilingue',
    's5-c3-sub':       '4 Langues · Niveau C1–C2 CECRL',
    'lang-en':         'ANGLAIS',
    'lang-fr':         'FRANÇAIS',
    'lang-es':         'ESPAGNOL',
    'lang-ja':         'JAPONAIS',
    
    's6-title':     'ENGAGEMENT ET CONTACT',
    's6-sub':       'Réseau Professionnel · Communications Directes · Téléchargement de CV',
    'cv-btn':       'TÉLÉCHARGER CV',
    
    'sbar-online':  'SYSTÈME EN LIGNE',
    'sbar-exp':     '6+ ANS D\'EXPÉRIENCE',
    'sbar-nexus':   'NEXUS MONDIAL ACTIF',
    
    'nav-0': 'Entrée', 'nav-1': 'Mondial',   'nav-2': 'Projets',
    'nav-3': 'Compétences', 'nav-4': 'Parcours', 'nav-5': 'Contact',
    
    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG : connexion établie ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">système@nexus:~$</span> <span class="t-cmd">whoami --profil-complet</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  NOM    </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  RÔLE   </span><span class="t-val">  DevOps · AIOps · Expert en Automatisation</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  EMAIL  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  TÉL    </span><span class="t-val">  +1 (240) 261 3649 · +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  BASE   </span><span class="t-val">  Silver Spring, MD, USA</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  EXP    </span><span class="t-val">  6+ ans · 9 villes · 4 langues</span></span>'],
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
  },

  /* ─────────────── SPANISH ─────────────── */
  es: {
    'hero-title':   'Ingeniero DevOps &amp; AIOps &nbsp;·&nbsp; Experto en Automatización con IA',
    'hero-bio':     'Nómada digital orientado al detalle con 6+ años impulsando el cambio<br>mediante programas complejos y automatización potenciada por IA',
    'hero-btn':     '▶ &nbsp;ENTRAR A LA RED',
    'stat-years':   'Años Activos',
    'stat-cities':  'Ciudades Desplegadas',
    'stat-certs':   'Certificaciones',
    'stat-langs':   'Idiomas',
    'scroll-hint':  'Desplazar',
    
    's2-title':     'OPERACIONES GLOBALES',
    's2-sub':       'Globo 3D interactivo · Haz clic en un nodo para explorar',
    'globe-hint':   'ARRASTRAR PARA ROTAR &nbsp;·&nbsp; CLIC EN NODOS',
    
    's3-title':     'PROYECTOS PERSONALES',
    's3-sub':       'Diseño de Sistemas · Automatización IA · Despliegues de Producción',
    'c1-num':       '01 / E-COMMERCE · ERP',
    'c1-name':      'MOTOR DE<br>SYNC ERP',
    'c1-desc':      'Diseñé APIs RESTful que conectan los principales marketplaces de e-commerce con Odoo Community para sincronización en tiempo real. Desarrollado en Óxido Verde, Hosono DE y MisterComp.',
    'c1-link':      '→ SABER MÁS',
    'c2-num':       '02 / CIBERSEGURIDAD',
    'c2-name':      'MATRIZ DE<br>DEFENSA CYBEROPS',
    'c2-desc':      'Diseñé defensas de firewall e IDS/IPS en Cisco Systems, desarrollé playbooks de respuesta a incidentes y automaticé la detección de amenazas — reduciendo el MTTR en un 40%.',
    'c2-link':      '→ CISCO · SAN JOSE',
    'c3-num':       '03 / DATOS · INTEGRACIÓN',
    'c3-name':      'PIPELINES DE DATOS<br>MULTIPLATAFORMA',
    'c3-desc':      'Desarrollé y optimicé scripts Python de automatización para integración y transformación masiva de datos multiplataforma en A-B InBev (Praga) y Makana-Partners.',
    'c3-link':      '→ VER PROYECTO',
    'c4-num':       '04 / AUTOMATIZACIÓN · AIOPS',
    'c4-name':      'FUNDICIÓN DE<br>AUTOMATIZACIÓN',
    'c4-desc':      'Construí workflows automatizados para flujo de datos continuo y orquesté pipelines CI/CD. Desde RPA low-code hasta infraestructura-como-código — cobertura AIOps de extremo a extremo.',
    'c4-link':      '→ GITHUB',
    'c5-num':       '05 / STARTUP · CTO',
    'c5-name':      'MISTERCOMP<br>STARTUP',
    'c5-desc':      'Fundador &amp; CTO en Duala, Camerún. Lideré la ingeniería full-stack — desplegué sistemas Odoo ERP y APIs personalizadas desde cero, logrando un crecimiento 3× en 12 meses.',
    'c5-link':      '→ VER EN GITLAB',
    'c6-num':       '06 / QA · CI/CD',
    'c6-name':      'INTEGRACIÓN<br>CONTINUA &amp; PRUEBAS',
    'c6-desc':      'Realicé pruebas, validación y documentación de endpoints API — garantizando precisión de datos 24/7, despliegues sin regresión y puertas de calidad automatizadas.',
    'c6-link':      '→ SABER MÁS',
    
    's4-title':     'COMPETENCIAS CLAVE',
    's4-sub':       'Las habilidades aprendidas a lo largo de los años incluyen, entre otras, las siguientes',
    'neural-title': 'COMPETENCIAS CLAVE',
    'neural-sub':   'Las habilidades aprendidas a lo largo de los años incluyen, entre otras, las siguientes',
        's4-tools':         'herramientas',
    's4-cat-devops':    'DEVOPS & CLOUD',
    's4-cat-automation':'AUTOMATIZACIÓN IA',
    's4-cat-programming':'PROGRAMACIÓN',
    's4-cat-frameworks': 'FRAMEWORKS',
    's4-cat-security':  'SEGURIDAD & QA',
    's4-cat-databases':  'BASES DE DATOS',
    's4-desc-devops':    'Infraestructura & Automatización',
    's4-desc-automation':'Workflows & Inteligencia',
    's4-desc-programming':'Lenguajes & Scripts',
    's4-desc-frameworks':'Backend & Full-Stack',
    's4-desc-security':  'Pruebas & Cumplimiento',
    's4-desc-databases': 'Almacenamiento & Caché',
    's4-foot-devops':    'INFRAESTRUCTURA COMO CÓDIGO',
    's4-foot-automation':'PIPELINES AUTOMATIZADOS',
    's4-foot-programming':'MULTI-PARADIGMA',
    's4-foot-frameworks':'API & EMPRESA',
    's4-foot-security':  'PEN TESTING & SAST',
    's4-foot-databases': 'SQL & NOSQL',
    
    's5-title':     'HISTORIAL PROFESIONAL',
    's5-sub':       'Historial comprobado de dedicación, puntualidad y éxito a lo largo de los años',
    's5-title':        'EL ARCHIVO',
    's5-sub':          'Credenciales · Certificaciones · Bóveda Académica',
    's5-c1-cat':       'Títulos Académicos',
    's5-c1-deg1-label':'M.Sc.',
    's5-c1-deg1':      'M.Sc. Ciencias de la Computación',
    's5-c1-uni1':      'MIT World Peace University, Pune',
    's5-c1-gpa1':      '8,52 / 10 CGPA',
    's5-c1-badge':     '2× BECA AL MÉRITO',
    's5-c1-deg2':      'B.Tech Ingeniería de Software',
    's5-c1-uni2':      'Universidad de Buea, Camerún',
    's5-c1-gpa2':      '3,46 / 4,0 CGPA',
    's5-c2-cat':       'Certificación Profesional',
    's5-c2-title':     'CyberOps Associate',
    's5-c2-iss':       'Cisco Systems, Inc.',
    's5-c2-status':    'Verificado · Activo',
    's5-c2-btn':       'Verificar Insignia Oficial ↗',
    's5-c3-cat':       'Lingüística',
    's5-c3-title':     'Profesional Multilingüe',
    's5-c3-sub':       '4 Idiomas · Nivel C1–C2 MCER',
    'lang-en':         'INGLÉS',
    'lang-fr':         'FRANCÉS',
    'lang-es':         'ESPAÑOL',
    'lang-ja':         'JAPONÉS',
    
    's6-title':     'COMPROMISO Y CONTACTO',
    's6-sub':       'Red Profesional · Comunicaciones Directas · Descarga de CV',
    'cv-btn':       'DESCARGAR CV',
    
    'sbar-online':  'SISTEMA EN LÍNEA',
    'sbar-exp':     '6+ AÑOS DE EXPERIENCIA',
    'sbar-nexus':   'NEXO GLOBAL ACTIVO',
    
    'nav-0': 'Entrada', 'nav-1': 'Global',    'nav-2': 'Proyectos',
    'nav-3': 'Habilidades',  'nav-4': 'Historial', 'nav-5': 'Contacto',
    
    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG: conexión establecida ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">sistema@nexus:~$</span> <span class="t-cmd">whoami --perfil-completo</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  NOMBRE </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  ROL    </span><span class="t-val">  DevOps · AIOps · Experto en Automatización</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  EMAIL  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  TEL    </span><span class="t-val">  +1 (240) 261 3649 · +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  BASE   </span><span class="t-val">  Silver Spring, MD, USA</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  EXP    </span><span class="t-val">  6+ años · 9 ciudades · 4 idiomas</span></span>'],
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
  },

  /* ─────────────── JAPANESE ─────────────── */
  ja: {
    'hero-title':   'DevOps &amp; AIOps エンジニア &nbsp;·&nbsp; AI自動化エキスパート',
    'hero-bio':     '6年以上の実績を持つデジタルノマド。複雑なプログラム管理と<br>AI駆動の自動化で変革を推進',
    'hero-btn':     '▶ &nbsp;ネットワークへ入る',
    'stat-years':   '活動年数',
    'stat-cities':  '展開都市',
    'stat-certs':   '認定資格',
    'stat-langs':   '言語',
    'scroll-hint':  'スクロール',
    
    's2-title':     'グローバル・オペレーション',
    's2-sub':       'インタラクティブ3Dグローブ · 都市ノードをクリックして探索',
    'globe-hint':   'ドラッグで回転 &nbsp;·&nbsp; ノードをクリックして探索',
    
    's3-title':     '個人プロジェクト',
    's3-sub':       'システム設計 · AI駆動の自動化 · 本番環境展開',
    'c1-num':       '01 / Eコマース · ERP',
    'c1-name':      'ERPシンク<br>エンジン',
    'c1-desc':      '主要なECマーケットプレイスとOdoo Communityをつなぐリアルタイム同期のRESTful APIを設計。Óxido Verde、Hosono DE、MisterCompで実装。',
    'c1-link':      '→ 詳細を見る',
    'c2-num':       '02 / サイバーセキュリティ',
    'c2-name':      'サイバーOPS<br>防衛マトリクス',
    'c2-desc':      'Cisco Systemsでファイアウォール・IDS/IPS防衛を設計、インシデント対応プレイブックを構築、脅威検出を自動化 — MTTRを40%削減。',
    'c2-link':      '→ CISCO · SAN JOSE',
    'c3-num':       '03 / データ · 統合',
    'c3-name':      'マルチプラットフォーム<br>データパイプライン',
    'c3-desc':      'A-B InBev（プラハ）とMakana-PartnersでPython自動化スクリプトを開発・最適化。大規模マルチプラットフォームデータ統合と変換を実現。',
    'c3-link':      '→ プロジェクトを見る',
    'c4-num':       '04 / 自動化 · AIOPS',
    'c4-name':      'オートメーション<br>ファウンドリー',
    'c4-desc':      'シームレスなデータフローの自動化ワークフローを構築し、CI/CDパイプラインを統合。ローコードRPAからInfrastructure-as-Codeまで — エンドツーエンドのAIOps。',
    'c4-link':      '→ GITHUB',
    'c5-num':       '05 / スタートアップ · CTO',
    'c5-name':      'MISTERCOMP<br>スタートアップ',
    'c5-desc':      'カメルーン・ドゥアラで創業者兼CTO。フルスタックエンジニアリングを主導 — Odoo ERPとカスタムAPIをゼロから構築し、12ヶ月でユーザー数3倍を達成。',
    'c5-link':      '→ GitLabで見る',
    'c6-num':       '06 / QA · CI/CD',
    'c6-name':      '継続的インテグレーション<br>&amp; テスト',
    'c6-desc':      'APIエンドポイントのテスト・検証・ドキュメント化を実施 — 24/7データ精度、ゼロリグレッションデプロイ、自動品質ゲートを確保。',
    'c6-link':      '→ 詳細を見る',
    
    's4-title':     'コア・コンピタンス',
    's4-sub':       '長年培ってきたスキルは以下の通りですが、これらに限定されません',
    'neural-title': 'コア・コンピタンス',
    'neural-sub':   '長年培ってきたスキルは以下の通りですが、これらに限定されません',
       's4-tools':         'ツール',
    's4-cat-devops':    'DEVOPS & クラウド',
    's4-cat-automation':'AI 自動化',
    's4-cat-programming':'プログラミング',
    's4-cat-frameworks': 'フレームワーク',
    's4-cat-security':  'セキュリティ & QA',
    's4-cat-databases':  'データベース',
    's4-desc-devops':    'インフラストラクチャ & 自動化',
    's4-desc-automation':'ワークフロー & インテリジェンス',
    's4-desc-programming':'言語 & スクリプト',
    's4-desc-frameworks':'バックエンド & フルスタック',
    's4-desc-security':  'テスト & コンプライアンス',
    's4-desc-databases': 'データストレージ & キャッシュ',
    's4-foot-devops':    'インフラストラクチャ·アズ·コード',
    's4-foot-automation':'自動化パイプライン',
    's4-foot-programming':'マルチパラダイム',
    's4-foot-frameworks':'API & エンタープライズ',
    's4-foot-security':  'ペンテスト & SAST',
    's4-foot-databases': 'SQL & NoSQL',
    
    's5-title':     'プロフェッショナル実績',
    's5-sub':       '長年にわたる献身、時間厳守、成功の確かな実績',
    's5-title':        'アーカイブ',
    's5-sub':          '資格 · 認定 · 学術記録',
    's5-c1-cat':       '学術学位',
    's5-c1-deg1-label':'修士',
    's5-c1-deg1':      '理学修士 コンピュータサイエンス',
    's5-c1-uni1':      'MITワールドピース大学、プネー',
    's5-c1-gpa1':      '8.52 / 10 CGPA',
    's5-c1-badge':     '2× 成績優秀奨学金',
    's5-c1-deg2':      '工学士 ソフトウェアエンジニアリング',
    's5-c1-uni2':      'ブエア大学、カメルーン',
    's5-c1-gpa2':      '3.46 / 4.0 CGPA',
    's5-c2-cat':       'プロフェッショナル認定',
    's5-c2-title':     'CyberOps アソシエイト',
    's5-c2-iss':       'シスコシステムズ株式会社',
    's5-c2-status':    '認証済み · 有効',
    's5-c2-btn':       '公式バッジを確認 ↗',
    's5-c3-cat':       '言語学',
    's5-c3-title':     'マルチリンガルプロフェッショナル',
    's5-c3-sub':       '4言語 · CEFR C1–C2レベル',
    'lang-en':         '英語',
    'lang-fr':         'フランス語',
    'lang-es':         'スペイン語',
    'lang-ja':         '日本語',
 
    
    's6-title':     'エンゲージメントと連絡先 ',
    's6-sub':       'プロフェッショナルネットワーク · 直接のやり取り · 履歴書ダウンロード',
    'cv-btn':       '履歴書をダウンロード',
    
    'sbar-online':  'システムオンライン',
    'sbar-exp':     '6年以上の経験',
    'sbar-nexus':   'グローバルネクサス稼働中',
    
    'nav-0': 'ゲートウェイ', 'nav-1': 'グローバル', 'nav-2': 'プロジェクト',
    'nav-3': 'スキル',   'nav-4': '実績','nav-5': '連絡先',
    
    'terminal-lines': [
      [600,  '<span class="t-line"><span class="t-out">PONG: 接続確立 ✓</span></span>'],
      [1100, '<span class="t-line"><span class="t-prompt">システム@nexus:~$</span> <span class="t-cmd">whoami --フルプロファイル</span></span>'],
      [1700, '<span class="t-line"><span class="t-out">╔═════════════════════════════════════════════╗</span></span>'],
      [1900, '<span class="t-line"><span class="t-out">  名前    </span><span class="t-val">  Elad Anedo Daudet Ikeorah</span></span>'],
      [2100, '<span class="t-line"><span class="t-out">  役職    </span><span class="t-val">  DevOps · AIOps · 自動化エキスパート</span></span>'],
      [2300, '<span class="t-line"><span class="t-out">  メール  </span><span class="t-val">  eladdaudet1918@gmail.com</span></span>'],
      [2500, '<span class="t-line"><span class="t-out">  電話    </span><span class="t-val">  +1 (240) 261 3649 · +91 89834 61149</span></span>'],
      [2700, '<span class="t-line"><span class="t-out">  拠点    </span><span class="t-val">  シルバースプリング, MD, アメリカ</span></span>'],
      [2900, '<span class="t-line"><span class="t-out">  経験    </span><span class="t-val">  6年以上 · 9都市 · 4言語</span></span>'],
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
  },
};

let currentLang = 'en';

function setGlobalLang(code) {
  if (!I18N[code]) return;
  currentLang = code;
  const t = I18N[code];

  /* 1. All [data-i18n] elements — covers cards, headers, status bar */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* 2. Side-nav dot labels */
  document.querySelectorAll('.nd').forEach(dot => {
    const i = parseInt(dot.getAttribute('data-i'));
    const navKey = 'nav-' + i;
    if (t[navKey]) dot.setAttribute('data-l', t[navKey]);
  });

  /* 3. Mark active topbar button */
  document.querySelectorAll('.ln-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === code.toUpperCase());
  });

  /* 4. Reset terminal with new language lines */
  const body = document.getElementById('termBody');
  if (body) {
    body.innerHTML = '<span class="t-line"><span class="t-prompt">system@nexus:~$</span> <span class="t-cmd">ping ELAD_ANEDO_DAUDET --connect</span></span>';
    if (typeof termDone !== 'undefined') {
      termDone = false;
    }
    const s6 = document.getElementById('s6');
    if (s6) {
      const rect = s6.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (visible && typeof initTerminal === 'function') {
        initTerminal();
      }
    }
  }

  /* 5. Sync neural map labels */
  const s4t = document.getElementById('s4t');
  const s4s = document.getElementById('s4s');
  if (s4t && t['neural-title']) s4t.textContent = t['neural-title'];
  if (s4s && t['neural-sub'])   s4s.textContent = t['neural-sub'];

    /* ── 6. Refresh bento grid card labels ── */
  if (typeof refreshNeural === 'function') refreshNeural();
 
}



/* ═══════════════════════════════════════════════════
   getLang() — used by s6-terminal.js to pick
   the correct lines array for the active language
═══════════════════════════════════════════════════ */
function getLang() {
  return currentLang;
}
 