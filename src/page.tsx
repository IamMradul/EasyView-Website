'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgb(240, 244, 255)',
      'rgb(255, 245, 247)',
      'rgb(245, 240, 255)',
      'rgb(240, 255, 250)',
      'rgb(255, 250, 245)',
    ]
  );

  const smoothBackground = useSpring(backgroundColor, {
    stiffness: 50,
    damping: 30,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor: reducedMotion ? 'rgb(240, 244, 255)' : smoothBackground }}
      className="min-h-screen relative overflow-hidden"
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
        className="fixed bottom-6 left-6 z-50 px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full shadow-lg text-sm font-medium text-gray-700 hover:bg-white transition-all"
        aria-label="Toggle animations"
      >
        {reducedMotion ? '🎬 Enable Animations' : '🎬 Reduce Motion'}
      </button>
    </motion.div>
  );
}
