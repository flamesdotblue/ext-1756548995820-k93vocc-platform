import React, { useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';

const glitchKeyframes = {
  textShadow: [
    '0 0 0 rgba(255,0,102,0.0), 0 0 0 rgba(0,255,255,0.0)',
    '1px 0 0 rgba(255,0,102,0.6), -1px 0 0 rgba(0,255,255,0.6)',
    '-1px 0 0 rgba(255,0,102,0.6), 1px 0 0 rgba(0,255,255,0.6)',
    '2px 0 0 rgba(255,0,102,0.8), -2px 0 0 rgba(0,255,255,0.8)',
    '0 0 0 rgba(255,0,102,0.0), 0 0 0 rgba(0,255,255,0.0)'
  ],
};

const particles = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 400,
  y: (Math.random() - 0.5) * 200,
  r: Math.random() * 8 + 4,
}));

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const colors = useMemo(() => ['#22d3ee', '#a855f7', '#ec4899', '#10b981', '#eab308'], []);

  return (
    <section id="top" className="relative min-h-[80vh] md:min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-black/10 to-black/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 md:pt-28 pb-10 flex flex-col items-start">
        <motion.h1
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.05] drop-shadow-lg cursor-default"
          animate={glitchKeyframes}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
          style={{
            background: 'linear-gradient(90deg, #fff, #b3e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Creative Technologist
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-300">AR Filters & Weird Web</span>
        </motion.h1>

        <p className="mt-5 max-w-xl text-white/80">
          I build playful, glitchy experiences at the edge of the browser: WebGL toys, face filters, and delightful bugs that feel like magic.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <a href="#work" className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-white text-black hover:scale-[1.02] transition active:scale-[0.98]">
            See Projects
          </a>
          <a href="#contact" className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-white/30 hover:border-white/60 text-white hover:bg-white/10 transition">
            Collaborate
          </a>
        </div>

        <div className="relative mt-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 opacity-80">
            {['AR', 'WebGL', 'Shaders', 'Three.js', 'Spark AR', 'Lens Studio', 'Vite', 'Framer Motion'].map((tag) => (
              <div key={tag} className="text-xs uppercase tracking-wider text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1 w-fit backdrop-blur">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div className="pointer-events-none absolute inset-0 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {particles.map((p) => (
              <motion.span
                key={p.id}
                className="absolute rounded-full mix-blend-screen"
                style={{ left: '50%', top: '40%', width: p.r, height: p.r, background: colors[p.id % colors.length] }}
                initial={{ x: 0, y: 0, scale: 0.6, opacity: 0.9 }}
                animate={{ x: p.x, y: p.y, scale: [0.6, 1.2, 0.8], opacity: [0.9, 1, 0] }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
