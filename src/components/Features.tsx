'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { BookOpen, Eye, Shield, Volume2 } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: BookOpen,
    title: 'Jargon Decoder',
    emoji: '📖',
    description: 'AI that translates complex text into plain English',
    color: 'from-purple-400 to-pink-400',
    details: [
      'Full page decode or selected text',
      'Interactive tooltips with definitions',
      'Smart context-aware simplifications',
      'Visual progress indicators',
    ],
  },
  {
    icon: Eye,
    title: 'Dyslexia Reading Mode',
    emoji: '📚',
    description: 'Fonts, spacing, and overlays designed for dyslexic brains',
    color: 'from-blue-400 to-cyan-400',
    details: [
      'OpenDyslexic font support',
      'Customizable letter & line spacing',
      'Color overlays to reduce eye strain',
      'Bionic reading mode',
    ],
  },
  {
    icon: Shield,
    title: 'Sensory Shield',
    emoji: '🛡️',
    description: 'Freeze animations and reduce sensory overload',
    color: 'from-green-400 to-emerald-400',
    details: [
      'Stops CSS animations instantly',
      'Pauses auto-playing videos',
      'Prevents flashing elements',
      'Creates calmer browsing',
    ],
  },
  {
    icon: Volume2,
    title: 'Text-to-Speech',
    emoji: '🔊',
    description: 'Let your ears do the reading',
    color: 'from-orange-400 to-red-400',
    details: [
      'Adjustable reading speed',
      'Multiple voice options',
      'Word-by-word highlighting',
      'Smart punctuation pauses',
    ],
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative group cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5 + index,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
      >
        {/* Card */}
        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 overflow-hidden">
          {/* Gradient Background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            style={{ transform: 'translateZ(-1px)' }}
          />

          {/* Floating Emoji */}
          <motion.div
            className="text-6xl mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
              y: isHovered ? -10 : 0,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transform: 'translateZ(20px)' }}
          >
            {feature.emoji}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-gray-800" style={{ transform: 'translateZ(10px)' }}>
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed" style={{ transform: 'translateZ(5px)' }}>
            {feature.description}
          </p>

          {/* Details List */}
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ transform: 'translateZ(5px)' }}
          >
            {feature.details.map((detail, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>{detail}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Glow Effect */}
          <motion.div
            className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
            style={{ transform: 'translateZ(-2px)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Four Powerful Modes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each feature designed to reduce cognitive friction and make the web accessible for everyone
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
