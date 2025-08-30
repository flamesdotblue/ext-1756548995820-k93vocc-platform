import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-end">
          <div>
            <h3 className="text-xl font-semibold">Let’s make something strange and wonderful.</h3>
            <p className="text-white/70 mt-2">Available for AR filters, 3D web toys, and interactive installations.</p>
          </div>
          <div className="flex md:justify-end">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center rounded-full px-6 py-3 bg-white text-black font-medium hover:scale-[1.02] active:scale-[0.98] transition"
            >
              hello@example.com
            </a>
          </div>
        </div>
        <div className="text-xs text-white/50 mt-8">© {new Date().getFullYear()} glitchlab — Built with Vite, React, Tailwind, Framer Motion, and Spline.</div>
      </div>
    </footer>
  );
}
