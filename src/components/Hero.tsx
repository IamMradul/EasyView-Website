'use client';

import { motion } from 'framer-motion';
import { Sparkles, Download, Github, ShieldCheck, Volume2, CheckCircle2, Brain, WandSparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 border border-purple-100 shadow-sm mb-8"
          >
            <img
              src="/logo.png"
              alt="EasyPage logo"
              className="w-9 h-9 rounded-full object-contain bg-white"
            />
            <span className="text-sm font-semibold text-gray-700">EasyPage Accessibility Suite</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            EasyPage
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-4 text-gray-700 font-medium"
          >
            Clarity for every brain
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-7 text-gray-600 max-w-2xl lg:mx-0 mx-auto"
          >
            Privacy-first accessibility tools for readable content, calmer browsing, and better comprehension on any website.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
          >
            {[
              { icon: Brain, text: 'ADHD, Dyslexia, ASD Friendly' },
              { icon: ShieldCheck, text: 'Privacy-First by Design' },
              { icon: WandSparkles, text: 'AI Text Simplification' },
            ].map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-xl rounded-full border border-white/70 shadow-sm"
              >
                <item.icon className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-7"
          >
            <motion.a
              href="https://chromewebstore.google.com/detail/easypage/fkmaolnondclckcdeeanjophpnhndgkk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative flex items-center gap-2">
                <Download className="w-5 h-5" />
                Add to Chrome - It&apos;s Free
              </span>
            </motion.a>

            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-xl rounded-full shadow-lg border border-purple-200"
            whileHover={{ y: -3 }}
          >
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700 font-semibold">
              Helping 20% of the population browse better
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-3 gap-3 mt-7"
          >
            {[
              { value: '100%', label: 'On-device settings' },
              { value: '<2 min', label: 'Setup time' },
              { value: '24/7', label: 'Works on webpages' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/65 backdrop-blur-xl rounded-2xl border border-white/70 p-3 shadow-sm">
                <p className="text-lg font-black text-gray-800">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-5"
        >
          <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-4 shadow-xl border border-white/60">
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-gray-500">Live Reading Preview</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Clean and readable web content"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <p className="text-sm text-gray-600 mt-3 px-1">Adaptive typography and overlays for better readability.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-5 shadow-xl border border-white/60">
              <ShieldCheck className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="font-bold text-gray-800 mb-1">Sensory Shield</h3>
              <p className="text-sm text-gray-600">Disables distracting motion, flashes, and autoplay media.</p>
            </div>
            <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-5 shadow-xl border border-white/60">
              <Volume2 className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-bold text-gray-800 mb-1">Text-to-Speech</h3>
              <p className="text-sm text-gray-600">Voice options, speed control, and word highlighting support.</p>
            </div>
          </div>

          <div className="bg-white/75 backdrop-blur-xl rounded-3xl p-5 shadow-xl border border-white/60">
            <h3 className="font-bold text-gray-800 mb-3">What users get instantly</h3>
            <div className="space-y-2">
              {['Dyslexia-friendly typography', 'Jargon Decoder + simplification', 'Local-first privacy controls'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
