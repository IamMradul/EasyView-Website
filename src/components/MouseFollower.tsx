'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function MouseFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        background: 'radial-gradient(circle, rgba(139, 127, 214, 0.8) 0%, rgba(139, 127, 214, 0) 70%)',
      }}
    />
  );
}
