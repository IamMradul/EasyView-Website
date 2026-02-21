'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import ProductOverview from './components/ProductOverview';
import InteractiveDemo from './components/InteractiveDemo';
import ImpactStats from './components/ImpactStats';
import HowItWorks from './components/HowItWorks';
import TechDetails from './components/TechDetails';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import MouseFollower from './components/MouseFollower';

export default function Home() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('easypage-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
      return;
    }

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('easypage-theme', theme);
  }, [theme]);

  return (
    <motion.div
      className={`min-h-screen relative overflow-hidden theme-root transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-[rgb(240,244,255)]'
      }`}
    >
      {!reducedMotion && <FloatingParticles />}
      {!reducedMotion && <MouseFollower />}
      
      <div className="relative z-10">
        <Hero />
        <ProblemStatement />
        <ProductOverview />
        <Features />
        <InteractiveDemo />
        <ImpactStats />
        <HowItWorks />
        <TechDetails />
        <CTA />
        <Footer />
      </div>

      {/* Reduced Motion Toggle */}
      <button
        onClick={() => setReducedMotion(!reducedMotion)}
        className={`fixed bottom-6 left-6 z-50 px-4 py-2 backdrop-blur-lg rounded-full shadow-lg text-sm font-medium transition-all ${
          theme === 'dark'
            ? 'bg-slate-800/80 text-slate-100 hover:bg-slate-700'
            : 'bg-white/80 text-gray-700 hover:bg-white'
        }`}
        aria-label="Toggle animations"
      >
        {reducedMotion ? '🎬 Enable Animations' : '🎬 Reduce Motion'}
      </button>

      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`fixed bottom-6 right-6 z-50 px-4 py-2 backdrop-blur-lg rounded-full shadow-lg text-sm font-medium transition-all ${
          theme === 'dark'
            ? 'bg-slate-800/80 text-slate-100 hover:bg-slate-700'
            : 'bg-white/80 text-gray-700 hover:bg-white'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light Theme' : '🌙 Dark Theme'}
      </button>
    </motion.div>
  );
}
