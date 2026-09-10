'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { photos } from '@/data/photos';

function frameNumber(n) {
  return String(n).padStart(3, '0');
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (delta) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = (current + delta + photos.length) % photos.length;
        return next;
      });
    },
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, close, step]);

  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-sm text-amber mb-12">Selected frames</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-[4/5] overflow-hidden bg-panel text-left"
              aria-label={`Open frame ${frameNumber(i + 1)}: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-2 left-2 font-sans text-xs text-paper/80 bg-ink/60 px-1.5 py-0.5">
                {frameNumber(i + 1)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-ink/97 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 font-sans text-sm text-muted hover:text-paper transition-colors"
          >
            Close
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 md:left-8 font-sans text-2xl text-muted hover:text-paper transition-colors px-3 py-6"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 md:right-8 font-sans text-2xl text-muted hover:text-paper transition-colors px-3 py-6"
          >
            ›
          </button>

          <div
            className="relative w-full max-w-3xl aspect-[4/5] max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <span className="absolute bottom-6 font-sans text-xs text-muted">
            {frameNumber(openIndex + 1)} / {frameNumber(photos.length)}
          </span>
        </div>
      )}
    </section>
  );
}
