'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Zap, Users } from 'lucide-react';

export default function ProblemStatement() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-red-50 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <AlertCircle className="w-6 h-6 text-red-500" />
            <span className="text-red-700 font-semibold">The Problem</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight">
            Many websites create{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              significant barriers
            </span>{' '}
            for neurodivergent users
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: '🤯',
                title: 'Complex Jargon',
                description: 'Legal, technical, and bureaucratic language creates confusion',
              },
              {
                icon: '✨',
                title: 'Sensory Overload',
                description: 'Distracting animations and flashing elements overwhelm users',
              },
              {
                icon: '📄',
                title: 'Poor Readability',
                description: 'Dense text layouts make reading difficult for dyslexic users',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
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
