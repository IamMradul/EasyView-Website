'use client';

import { motion } from 'framer-motion';

export default function ProductOverview() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-5 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What EasyPage Does
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            EasyPage is a privacy-first Chrome extension that improves web accessibility by reducing cognitive load and improving readability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-7 shadow-xl border border-white/50"
          >
            <p className="text-gray-700 leading-relaxed mb-4">
              EasyPage is built for neurodivergent users (ADHD, Dyslexia, ASD) and anyone who wants a clearer reading experience. It works directly on webpages using content scripts and supports dyslexia-friendly typography with OpenDyslexic and customizable fonts, adjustable font size, line height, letter and word spacing, bionic reading, and color overlays.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              It also includes a Sensory Shield that disables CSS animations, reduces flashing elements, and stops auto-playing media to prevent sensory overload. For comprehension support, EasyPage provides AI-powered text simplification and a Jargon Decoder for legal, medical, financial, technical, and academic terms in plain language.
            </p>
            <p className="text-gray-700 leading-relaxed">
              EasyPage offers Text-to-Speech using the Web Speech API with voice selection, speed control, and word highlighting, plus a built-in document reader with customization and export/download options. All settings persist locally, and AI keys are stored securely on-device.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6"
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-4 shadow-xl border border-white/50">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                alt="Focused reading interface for improved accessibility"
                className="w-full h-56 object-cover rounded-2xl"
              />
              <p className="text-sm text-gray-600 mt-3 px-1">
                Readability-first customization reduces cognitive friction and improves focus.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-4 shadow-xl border border-white/50">
              <img
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80"
                alt="Calm digital workspace representing sensory-safe browsing"
                className="w-full h-56 object-cover rounded-2xl"
              />
              <p className="text-sm text-gray-600 mt-3 px-1">
                Sensory Shield helps make browsing calmer by limiting distracting motion and media.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Future Scope</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            EasyPage will introduce flexible AI access options, including a Bring Your Own API Key mode for users who prefer using their own Gemini or OpenRouter credentials for maximum control and privacy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We also plan to offer optional premium plans powered by secure backend AI services, unlocking enhanced simplification, smarter jargon explanations, faster processing, and additional productivity tools while keeping core accessibility features free and privacy-first.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
