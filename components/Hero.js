import Image from 'next/image';
import { heroPhoto } from '@/data/photos';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col">
      <div className="absolute inset-0">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Underexposed treatment: darken the frame, never blow it out */}
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-8">
        <span className="font-sans text-sm text-paper">Mayzal Pratama</span>
        <nav className="flex gap-6 font-sans text-sm text-muted">
          <a href="#work" className="hover:text-paper transition-colors">Work</a>
          <a href="#about" className="hover:text-paper transition-colors">About</a>
          <a href="#contact" className="hover:text-paper transition-colors">Contact</a>
        </nav>
      </header>

      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24">
        <p className="font-sans text-sm text-amber mb-4">Freelance photographer — candid work</p>
        <h1 className="font-display italic text-[15vw] md:text-[8vw] leading-[0.95] text-paper max-w-4xl">
          Frame by frame
        </h1>
        <p className="font-sans text-muted mt-6 max-w-md text-sm md:text-base">
          Photography that waits for the moment no one arranged — captured by Ijal,
          one honest frame at a time.
        </p>
      </div>
    </section>
  );
}
