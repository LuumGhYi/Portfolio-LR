import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PAGES } from '@data/nav';

interface MobileNavProps {
  current?: string;
}

export default function MobileNav({ current = 'index' }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  // Track mount so the portal target (document.body) is available — server-side
  // rendering doesn't have a body. The button still renders on first paint;
  // the drawer waits one tick for hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  // Drawer JSX is portalled to <body> so it escapes the topnav's containing
  // block. The topnav has `backdrop-filter` which (per CSS spec) creates a
  // containing block for `position: fixed` descendants — without the portal
  // the drawer would size itself to the 56px-tall header instead of the
  // viewport on mobile.
  const drawer = (
    <div
      id="mobile-nav"
      className={'mobile-nav ' + (open ? 'is-open' : '')}
      // `inert` removes the closed drawer from both tab order and the a11y tree.
      {...(!open ? { inert: '' as unknown as boolean } : {})}
    >
      <nav className="mobile-nav__links" aria-label="Sections (mobile)">
        {PAGES.map((p, i) => {
          const isActive = current === p.slug;
          return (
            <a
              key={p.slug}
              href={p.href}
              className={'mobile-nav__link ' + (isActive ? 'is-active' : '')}
              aria-current={isActive ? 'page' : undefined}
              onClick={close}
            >
              <span className="mobile-nav__num">{String(i).padStart(2, '0')}</span>
              <span className="mobile-nav__label">{p.label}</span>
            </a>
          );
        })}
      </nav>
      <a className="mobile-nav__contact" href="#contact" onClick={close}>
        <span>Contact</span>
      </a>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className={'topnav__burger ' + (open ? 'is-open' : '')}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="topnav__burger-bar" />
        <span className="topnav__burger-bar" />
        <span className="topnav__burger-bar" />
      </button>
      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
