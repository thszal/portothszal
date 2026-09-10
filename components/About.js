import Image from 'next/image';
import { portrait } from '@/data/photos';

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20 items-start">
        <div>
          <p className="font-sans text-sm text-amber mb-6">About</p>
          <p className="font-display text-2xl md:text-3xl leading-relaxed text-paper max-w-xl">
            I'm Mayzal Pratama — most people call me Ijal. I picked up a camera
            young and never really put it back down. What holds my attention
            isn't the posed shot; it's the second before or after it, when
            people forget they're being photographed.
          </p>
          <p className="font-sans text-muted mt-8 max-w-lg leading-relaxed">
            I work as a freelance photographer, currently shooting alongside
            one vendor partner for print and event work, while building out a
            personal archive of candid frames on my own camera.
          </p>

          <div className="mt-12 pl-6 border-l border-amber/40">
            <p className="font-display italic text-xl text-paper">
              "I'd rather underexpose than overexpose."
            </p>
            <p className="font-sans text-sm text-muted mt-3">
              Protect the highlights, let the shadows keep their secrets.
            </p>
          </div>
        </div>

        {portrait && (
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              sizes="(min-width: 768px) 320px, 60vw"
              className="object-cover grayscale-[15%]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
