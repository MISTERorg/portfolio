/* ═══════════════════════════════════════════════════
   SEC 3 — PROJECT CUBE
   6 project cards live on the faces of a rotating 3D cube.
   Nav buttons swap the cube's data-side (adapted from the
   reference clickOnSide pattern); ← → keys cycle the
   horizontal ring of faces (front/right/back/left).
═══════════════════════════════════════════════════ */
(function () {
  const cube = document.getElementById('projCube');
  if (!cube) return;

  const navBtns = Array.from(document.querySelectorAll('.cube-nav-btn'));
  const HORIZONTAL_RING = ['front', 'right', 'back', 'left'];

  function showSide(side, btn) {
    const activeSide = cube.dataset.side;
    if (!activeSide || activeSide === side) return;

    cube.classList.remove('show-' + activeSide);
    cube.classList.add('show-' + side);
    cube.setAttribute('data-side', side);

    navBtns.forEach(b => {
      const isActive = b.dataset.side === side;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', String(isActive));
    });
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => showSide(btn.dataset.side, btn));
  });

  // Keyboard: ← → cycles the horizontal ring of faces when the scene has focus
  const scene = document.querySelector('.cube-scene');
  if (scene) {
    scene.addEventListener('keydown', e => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const cur = cube.dataset.side;
      let idx = HORIZONTAL_RING.indexOf(cur);
      if (idx === -1) idx = 0; // resume the ring at "front" if currently on top/bottom
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const next = HORIZONTAL_RING[(idx + dir + HORIZONTAL_RING.length) % HORIZONTAL_RING.length];
      const btn = navBtns.find(b => b.dataset.side === next);
      showSide(next, btn);
    });
  }

  /* ── Auto-rotate: gently showcases all 6 projects for anyone who
     lands on the section without clicking. Off entirely under
     prefers-reduced-motion (auto-moving content is exactly what that
     preference exists to suppress). Pauses the moment the pointer or
     keyboard focus enters the cube — not after a delay, so it never
     rotates away while someone is mid-read — and only resumes once
     they've genuinely stepped away for a few seconds. Also pauses
     whenever the section scrolls out of view. ── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const CYCLE = ['front', 'right', 'back', 'left', 'top', 'bottom'];
    const AUTO_INTERVAL_MS = 6000;
    const RESUME_DELAY_MS = 9000;

    let autoTimer = null;
    let resumeTimer = null;
    let sectionVisible = false;

    function stepAuto() {
      const cur = cube.dataset.side;
      let idx = CYCLE.indexOf(cur);
      if (idx === -1) idx = 0;
      const next = CYCLE[(idx + 1) % CYCLE.length];
      showSide(next, navBtns.find(b => b.dataset.side === next));
    }
    function startAuto() {
      stopAuto();
      if (sectionVisible) autoTimer = setInterval(stepAuto, AUTO_INTERVAL_MS);
    }
    function stopAuto() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }
    function pauseNow() {
      stopAuto();
      if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null; }
    }
    function pauseAndScheduleResume() {
      pauseNow();
      resumeTimer = setTimeout(startAuto, RESUME_DELAY_MS);
    }

    const layout = document.querySelector('.cube-layout');
    if (layout) {
      layout.addEventListener('pointerenter', pauseNow);
      layout.addEventListener('pointerleave', pauseAndScheduleResume);
      layout.addEventListener('focusin', pauseNow);
      layout.addEventListener('focusout', pauseAndScheduleResume);
    }
    navBtns.forEach(btn => btn.addEventListener('click', pauseAndScheduleResume));
    scene && scene.addEventListener('keydown', pauseAndScheduleResume);

    if (scene) {
      const sceneIO = new IntersectionObserver(entries => {
        entries.forEach(e => {
          sectionVisible = e.isIntersecting;
          sectionVisible ? startAuto() : stopAuto();
        });
      }, { threshold: .4 });
      sceneIO.observe(scene);
    }
  }
})();
