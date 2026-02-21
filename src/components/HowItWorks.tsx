'use client';

import { motion } from 'framer-motion';
import { Download, Settings, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Download,
      title: 'Install the Extension',
      description: 'Add EasyPage to Chrome in one click - completely free',
      color: 'from-purple-400 to-pink-400',
    },
    {
      number: '2',
      icon: Settings,
      title: 'Configure Your Preferences',
      description: 'Choose your AI provider and customize accessibility settings',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      number: '3',
      icon: Zap,
      title: 'Browse with Clarity',
      description: 'Toggle features as needed - every website becomes accessible',
      color: 'from-green-400 to-emerald-400',
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Setting up EasyPage takes less than 2 minutes
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 -translate-y-1/2 -z-10" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 text-center"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  {/* Step Number */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl font-black shadow-lg`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20 + index * 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <step.icon className={`w-12 h-12 mx-auto bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
