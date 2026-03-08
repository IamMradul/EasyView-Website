'use client';

import { motion } from 'framer-motion';
import { Download, Settings, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Download,
      title: 'Install the Extension',
      description: 'Install EasyView from the Chrome Web Store in a single step.',
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
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 left-[-8%] h-72 w-72 rounded-full bg-gradient-to-br from-purple-200/50 to-pink-200/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-6%] h-80 w-80 rounded-full bg-gradient-to-br from-cyan-200/40 to-emerald-200/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center rounded-full border border-purple-200/70 bg-white/70 px-4 py-2 text-xs font-black tracking-[0.2em] text-purple-700 uppercase shadow-sm mb-5">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-white-900" style={{ fontFamily: 'var(--font-display)' }}>
            Get Started in 3 Steps
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            EasyView setup takes under two minutes and works across websites.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-11 left-[8%] right-[8%] h-px bg-gradient-to-r from-purple-300/80 via-blue-300/80 to-emerald-300/80" />
          <div className="md:hidden absolute top-8 bottom-8 left-6 w-px bg-gradient-to-b from-purple-300/70 via-blue-300/70 to-emerald-300/70" />

          <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className={`relative md:pt-14 ${index === 1 ? 'md:-translate-y-2' : ''}`}
              >
                <div className="relative z-10 w-fit md:mx-auto mb-4 ml-1 md:ml-0">
                  <motion.div
                    className={`h-11 min-w-11 px-4 rounded-full bg-gradient-to-br ${step.color} text-white font-extrabold text-base flex items-center justify-center shadow-lg ring-4 ring-white/70`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <motion.div
                  className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-7 shadow-xl border border-white/70 h-full ml-10 md:ml-0"
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  <div className={`absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r ${step.color}`} />

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`relative w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-md opacity-45`} />
                      <step.icon className="relative w-5 h-5 text-white" strokeWidth={2.4} />
                    </div>
                    <div>
                      <p className="text-xs font-black tracking-[0.16em] text-gray-500 mb-1">STEP 0{step.number}</p>
                      <h3 className="text-xl font-extrabold text-gray-800 leading-tight">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-[15px]">{step.description}</p>

                  <div className="mt-6 flex items-center gap-2" aria-hidden="true">
                    <span className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${step.color}`} />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
