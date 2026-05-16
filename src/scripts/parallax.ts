/**
 * Smoothed parallax + guideline draw. Vanilla TS port of the legacy
 * useScrollEffects hook in helpers.jsx — same algorithm (rAF + exponential
 * lerp), same default speed, same auto-tagging selectors.
 *
 * Loaded once per page from BaseLayout.astro. Self-terminates the rAF loop
 * when nothing is moving. No-ops on first paint when reduced-motion is set.
 */

const LINE_LERP = 0.35;
const PARALLAX_LERP = 0.18;
const COEFF = 0.85;
const DEFAULT_FIGURE_SPEED = -0.15;

export function initParallax(): void {
  if (typeof window === 'undefined') return;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

  let animating = false;

  const parallaxTargets = new Map<HTMLElement, number>();
  const parallaxCurrents = new Map<HTMLElement, number>();
  const lineTargets = new Map<SVGElement, number>();
  const lineCurrents = new Map<SVGElement, number>();

  // Auto-tag every photo container we want to parallax that isn't already
  // inside a [data-parallax] wrapper. Same selector list as legacy.
  document.querySelectorAll<HTMLElement>('figure, .entry-tile').forEach((el) => {
    if (el.closest('[data-parallax]')) return;
    if (el.querySelector('.photo--hero')) return;
    if (el.closest('.image-row--hero-triptych')) return;
    el.dataset.parallax = String(DEFAULT_FIGURE_SPEED);
  });

  const computeTargets = () => {
    const vh = window.innerHeight;
    document.querySelectorAll<SVGElement>('[data-guideline]').forEach((svg) => {
      const rect = svg.getBoundingClientRect();
      const raw = (-rect.top + vh * COEFF) / rect.height;
      const progress = Math.max(0, Math.min(1, raw));
      lineTargets.set(svg, 100 * (1 - progress));
    });
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax ?? '0') || 0;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (center - vh / 2) * speed;
      parallaxTargets.set(el, -offset);
    });
  };

  const animate = () => {
    let hasMotion = false;

    lineTargets.forEach((target, svg) => {
      const curr = lineCurrents.has(svg) ? (lineCurrents.get(svg) as number) : target;
      const diff = target - curr;
      if (Math.abs(diff) < 0.1) {
        lineCurrents.set(svg, target);
        svg.style.setProperty('--draw', `${target}`);
      } else {
        const next = curr + diff * LINE_LERP;
        lineCurrents.set(svg, next);
        svg.style.setProperty('--draw', `${next}`);
        hasMotion = true;
      }
    });

    parallaxTargets.forEach((target, el) => {
      const curr = parallaxCurrents.has(el) ? (parallaxCurrents.get(el) as number) : target;
      const diff = target - curr;
      if (Math.abs(diff) < 0.3) {
        parallaxCurrents.set(el, target);
        el.style.setProperty('--py', `${target}px`);
      } else {
        const next = curr + diff * PARALLAX_LERP;
        parallaxCurrents.set(el, next);
        el.style.setProperty('--py', `${next}px`);
        hasMotion = true;
      }
    });

    if (hasMotion) {
      requestAnimationFrame(animate);
    } else {
      animating = false;
    }
  };

  const onScroll = () => {
    computeTargets();
    if (!animating) {
      animating = true;
      requestAnimationFrame(animate);
    }
  };

  // First paint: snap currents to targets so nothing animates from zero.
  computeTargets();
  lineTargets.forEach((target, svg) => {
    lineCurrents.set(svg, target);
    svg.style.setProperty('--draw', `${target}`);
  });
  parallaxTargets.forEach((target, el) => {
    parallaxCurrents.set(el, target);
    el.style.setProperty('--py', `${target}px`);
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // No explicit teardown needed for a page-lifetime script — Astro pages reload
  // full HTML between navigations, so listeners are reset on each navigation.
}

// Auto-run when imported as a side-effect bundle.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParallax, { once: true });
} else {
  initParallax();
}
