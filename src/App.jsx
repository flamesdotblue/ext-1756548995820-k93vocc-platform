import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-['Manrope',_'Inter',sans-serif]">
      <div className="relative">
        <Nav />
        <Hero />
      </div>
      <main className="relative z-10">
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}
