export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="px-6 md:px-12 py-16 md:py-20 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="font-display italic text-3xl md:text-4xl text-paper">
            Let's make a frame.
          </p>
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-sans text-amber hover:text-paper transition-colors"
          >
            @your-handle on Instagram
          </a>
        </div>

        <p className="font-sans text-xs text-muted">
          © {year} Mayzal Pratama. Frame by frame.
        </p>
      </div>
    </footer>
  );
}
