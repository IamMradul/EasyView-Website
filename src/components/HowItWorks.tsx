'use client';

import { motion } from 'framer-motion';
import { Download, Settings, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Download,
      title: 'Install the Extension',
      description: 'Install EasyPage from the Chrome Web Store in a single step.',
      color: 'from-purple-400 to-pink-400',
    },
    {
      number: '2',
      icon: Settings,
      title: 'Configure Your Preferences',
      description: 'Select your accessibility preferences and preferred AI configuration.',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      number: '3',
      icon: Zap,
      title: 'Browse with Clarity',
      description: 'Apply features on demand for a clearer and more accessible browsing experience.',
      color: 'from-green-400 to-emerald-400',
    },
  ];

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-black mb-5 text-gray-900">
            Get Started in 3 Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            EasyPage setup takes under two minutes and works across websites.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[14%] right-[14%] h-px bg-gradient-to-r from-purple-300 via-blue-300 to-emerald-300" />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 w-fit mx-auto mb-4">
                  <motion.div
                    className={`h-11 min-w-11 px-4 rounded-full bg-gradient-to-br ${step.color} text-white font-extrabold text-base flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <motion.div
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-7 shadow-lg border border-white/70 h-full"
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-sm`}>
                      <step.icon className="w-5 h-5 text-white" strokeWidth={2.4} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.16em] text-gray-500 mb-1">STEP 0{step.number}</p>
                      <h3 className="text-xl font-extrabold text-gray-800 leading-tight">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-[15px]">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
