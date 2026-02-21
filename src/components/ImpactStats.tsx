'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useSpring(0, { duration: 2000 });
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  const stats = [
    {
      value: 20,
      suffix: '%',
      label: 'of population is neurodivergent',
      icon: '🧠',
      color: 'from-purple-400 to-pink-400',
    },
    {
      value: 4,
      suffix: '',
      label: 'Powerful accessibility modes',
      icon: '⚡',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Free & Open Source',
      icon: '💝',
      color: 'from-green-400 to-emerald-400',
    },
    {
      value: 0,
      suffix: '',
      label: 'Data collected from you',
      icon: '🔒',
      color: 'from-orange-400 to-red-400',
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Making Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for accessibility, privacy, and empowerment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <motion.div
                className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 text-center overflow-hidden"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <div className={`text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-gray-600 font-medium leading-tight">{stat.label}</p>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Privacy Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-xl rounded-full shadow-lg border border-purple-200"
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-2xl">🔐</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-purple-900">Privacy First</p>
              <p className="text-xs text-gray-600">API keys stored locally on your device only</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
