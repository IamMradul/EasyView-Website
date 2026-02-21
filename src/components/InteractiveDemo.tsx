'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function InteractiveDemo() {
  const [isDecoded, setIsDecoded] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  const complexText = {
    before: 'The aforementioned party shall indemnify and hold harmless the lessor from any liability pertaining to negligence or malfeasance occurring on the premises.',
    after: 'You must protect the landlord from being blamed if someone gets hurt on the property because of carelessness or wrongdoing.',
    tooltip: 'Indemnify means to protect someone from being held responsible for damages or losses.',
  };

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch complex legal jargon transform into plain English instantly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Demo Container */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
            {/* Toggle Switch */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-2">
                <button
                  onClick={() => setIsDecoded(false)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    !isDecoded
                      ? 'bg-white shadow-lg text-purple-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Before 😵‍💫
                </button>
                <button
                  onClick={() => setIsDecoded(true)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    isDecoded
                      ? 'bg-white shadow-lg text-purple-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  After ✨
                </button>
              </div>
            </div>

            {/* Text Display */}
            <motion.div
              className="relative min-h-[200px] flex items-center justify-center"
              layout
            >
              <motion.div
                key={isDecoded ? 'after' : 'before'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center px-6"
              >
                <p
                  className={`text-lg md:text-xl leading-relaxed ${
                    isDecoded ? 'text-gray-700 font-medium' : 'text-gray-800'
                  }`}
                >
                  {isDecoded ? complexText.after : complexText.before}
                </p>

                {isDecoded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 inline-block"
                  >
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 max-w-md">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💡</span>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-purple-900 mb-1">
                            "Indemnify" explained:
                          </p>
                          <p className="text-sm text-purple-700">{complexText.tooltip}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center mt-12"
            >
              {['Legal', 'Financial', 'Medical', 'Technical', 'Academic'].map((category, index) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700 border border-purple-200"
                >
                  {category}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
