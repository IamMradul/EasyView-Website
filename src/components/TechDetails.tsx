'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Lock, Zap } from 'lucide-react';

export default function TechDetails() {
  const techStack = [
    { name: 'Manifest V3', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { name: 'Google Gemini', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { name: 'OpenRouter AI', color: 'bg-green-100 text-green-700 border-green-200' },
    { name: 'Privacy First', color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { name: 'Open Source', color: 'bg-pink-100 text-pink-700 border-pink-200' },
    { name: 'Web Speech API', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
  ];

  const features = [
    {
      icon: Cpu,
      title: 'Dual AI Providers',
      description: 'Choose between OpenRouter (Gemma 3) or Google Gemini with automatic fallback',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'API keys stored locally on your device only using Chrome local storage',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Zap,
      title: 'Works Everywhere',
      description: 'Compatible with any website without requiring site modifications',
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: Code2,
      title: 'Modern Stack',
      description: 'Built with Manifest V3, ES6+, and the latest Chrome APIs',
      color: 'from-orange-400 to-red-400',
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-purple-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Built with Modern Tech
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powered by cutting-edge AI and privacy-first architecture
          </p>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`px-6 py-3 rounded-full font-semibold border-2 ${tech.color} shadow-lg backdrop-blur-sm`}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/50 h-full">
                <motion.div
                  className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover Glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/iapoorv01/EasyPage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="w-6 h-6" />
            <span className="font-bold text-lg">100% Open Source on GitHub</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-300/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
