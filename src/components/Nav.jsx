import React from 'react';
import { Github, Instagram, Mail } from 'lucide-react';

export default function Nav() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 animate-pulse" />
          <span className="text-sm tracking-widest uppercase text-white/80 group-hover:text-white transition">glitchlab</span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
          <a href="#about" className="text-white/70 hover:text-white transition">About</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
          <div className="h-5 w-px bg-white/10 mx-1" />
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition">
            <Github size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition">
            <Instagram size={18} />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="text-white/70 hover:text-white transition">
            <Mail size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
