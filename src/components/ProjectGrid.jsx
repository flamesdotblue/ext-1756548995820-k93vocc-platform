import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Face Mesh Graffiti',
    desc: 'AR filter turning face geometry into neon strokes.',
    tags: ['AR', 'Spark AR'],
    accent: 'from-fuchsia-500/30 to-cyan-400/30',
  },
  {
    title: 'WebGL Slime',
    desc: 'Metaball shader with gooey interactions.',
    tags: ['WebGL', 'Shaders'],
    accent: 'from-lime-400/30 to-emerald-400/20',
  },
  {
    title: 'Databend Gallery',
    desc: 'Glitch the pixels, worship the artifacts.',
    tags: ['Glitch', 'Image'],
    accent: 'from-rose-400/30 to-amber-300/20',
  },
  {
    title: 'Cursor Orchestra',
    desc: 'Every pointer movement triggers a visual duet.',
    tags: ['Interaction', 'Audio'],
    accent: 'from-sky-400/30 to-indigo-400/20',
  },
  {
    title: 'Depth Disco',
    desc: 'Webcam depth maps turned into disco lights.',
    tags: ['Depth', 'Three.js'],
    accent: 'from-cyan-300/30 to-violet-300/20',
  },
  {
    title: 'ASCII Mirage',
    desc: 'Live camera feed rendered as animated ASCII.',
    tags: ['Text', 'Canvas'],
    accent: 'from-amber-300/30 to-pink-300/20',
  },
];

function useRandomEmoji() {
  const list = ['💥', '🫧', '🦄', '👾', '✨', '🕳️', '🫠', '🌈'];
  return () => list[Math.floor(Math.random() * list.length)];
}

function Card({ item, idx }) {
  const [hover, setHover] = useState(false);
  const pickEmoji = useRandomEmoji();
  const emoji = useMemo(() => pickEmoji(), [idx]);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative group rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} overflow-hidden backdrop-blur-sm`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)'
      }} />

      <div className="p-5 relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
          <motion.span
            className="text-xl"
            initial={false}
            animate={{ rotate: hover ? 15 : 0, scale: hover ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            aria-hidden
          >
            {emoji}
          </motion.span>
        </div>
        <p className="mt-2 text-sm text-white/80">{item.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-[11px] uppercase tracking-wider text-white/80 bg-white/10 border border-white/10 rounded-full px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -bottom-6 right-4 text-[80px] leading-none select-none"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: hover ? -14 : 0, opacity: hover ? 0.25 : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        aria-hidden
      >
        {emoji}
      </motion.div>

      <motion.div
        className="absolute inset-0 mix-blend-difference"
        initial={false}
        animate={{ opacity: hover ? 0.25 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ background: 'radial-gradient(600px 180px at 10% 10%, rgba(255,255,255,0.2), transparent)' }}
      />

      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{
          clipPath: hover
            ? 'polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)'
            : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: hover ? 0.18 : 0.08,
        }}
        transition={{ duration: 0.25 }}
        style={{ background: 'linear-gradient(135deg, rgba(255,0,102,0.6), rgba(0,255,255,0.6))' }}
        aria-hidden
      />

      <motion.div
        className="absolute pointer-events-none left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <motion.span
        className="absolute top-2 right-3 text-[10px] tracking-wider uppercase text-white/70"
        initial={false}
        animate={{ x: hover ? 2 : 0, y: hover ? -2 : 0, rotate: hover ? -2 : 0 }}
      >
        {hover ? 'secret mode' : 'hover me'}
      </motion.span>
    </motion.div>
  );
}

export default function ProjectGrid() {
  return (
    <section id="work" className="relative w-full py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_200px_at_20%_10%,rgba(168,85,247,0.12),transparent),radial-gradient(700px_200px_at_80%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Experiments</h2>
            <p className="text-white/70 text-sm mt-1">Hover for Easter eggs. Glitches encouraged.</p>
          </div>
          <a href="#contact" className="text-sm text-white/80 hover:text-white underline underline-offset-4">Propose a collab</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Card key={p.title} item={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
