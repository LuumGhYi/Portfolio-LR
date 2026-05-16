import { useEffect, useRef, useState, useCallback } from 'react';

interface PhotoEntry {
  src: string;
  alt: string;
  cap?: string;
  sub?: string;
}

/**
 * Lightbox island. Hydrated once (client:visible / client:idle), then it walks
 * the DOM for [data-lightbox-src] photos, wires up click + keyboard, and opens
 * a fullscreen viewer. No per-photo island.
 */
export default function Lightbox() {
  const [items, setItems] = useState<PhotoEntry[]>([]);
  const [idx, setIdx] = useState<number | null>(null);
  const itemsRef = useRef<PhotoEntry[]>([]);
  itemsRef.current = items;

  // Collect lightbox photos from the DOM once on mount, then watch for new ones
  // injected later (e.g., by HMR or future dynamic content).
  useEffect(() => {
    const collect = (): PhotoEntry[] =>
      Array.from(document.querySelectorAll<HTMLElement>('[data-lightbox-src]')).map((el) => ({
        src: el.dataset.lightboxSrc ?? '',
        alt: el.dataset.lightboxAlt ?? '',
        cap: el.dataset.lightboxCap || undefined,
        sub: el.dataset.lightboxSub || undefined,
      }));

    setItems(collect());

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>('[data-lightbox-src]');
      if (!trigger) return;
      const src = trigger.dataset.lightboxSrc;
      if (!src) return;
      const all = itemsRef.current.length ? itemsRef.current : collect();
      if (!itemsRef.current.length) setItems(all);
      const found = all.findIndex((p) => p.src === src);
      if (found >= 0) setIdx(found);
    };

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest?.('[data-lightbox-src]')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const trigger = target.closest('[data-lightbox-src]') as HTMLElement;
        const src = trigger?.dataset.lightboxSrc;
        if (!src) return;
        const all = itemsRef.current.length ? itemsRef.current : collect();
        if (!itemsRef.current.length) setItems(all);
        const found = all.findIndex((p) => p.src === src);
        if (found >= 0) setIdx(found);
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Keyboard nav while open + body scroll lock.
  useEffect(() => {
    if (idx == null) return;
    const onKey = (e: KeyboardEvent) => {
      const len = itemsRef.current.length;
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowLeft') setIdx((i) => (i != null ? (i > 0 ? i - 1 : len - 1) : i));
      if (e.key === 'ArrowRight') setIdx((i) => (i != null ? (i < len - 1 ? i + 1 : 0) : i));
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [idx]);

  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(() => {
    const len = itemsRef.current.length;
    setIdx((i) => (i != null ? (i > 0 ? i - 1 : len - 1) : i));
  }, []);
  const next = useCallback(() => {
    const len = itemsRef.current.length;
    setIdx((i) => (i != null ? (i < len - 1 ? i + 1 : 0) : i));
  }, []);

  if (idx == null) return null;
  const current = items[idx];
  if (!current) return null;

  return (
    <div
      className="lightbox"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains('lightbox')) close();
      }}
    >
      <button className="lightbox__close" onClick={close} aria-label="Close">×</button>
      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={prev}
        aria-label="Previous"
      >
        ‹
      </button>
      <figure className="lightbox__figure">
        <img src={current.src} alt={current.alt || ''} />
        {(current.cap || current.sub) && (
          <figcaption className="lightbox__caption">
            {current.cap && <b>{current.cap}</b>}
            {current.sub && <span>{current.sub}</span>}
          </figcaption>
        )}
      </figure>
      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={next}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
