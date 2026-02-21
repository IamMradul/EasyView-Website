'use client';

import { motion } from 'framer-motion';
import { Download, Github } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-90"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-7xl mb-8"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🚀
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
            Ready to Browse Better?
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Join thousands of users making the web accessible for neurodivergent minds
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://chromewebstore.google.com/detail/easypage/fkmaolnondclckcdeeanjophpnhndgkk"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-white text-purple-600 font-black text-xl rounded-full shadow-2xl hover:shadow-white/50 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3 justify-center">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Get EasyPage Free
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/iapoorv01/EasyPage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/20 backdrop-blur-lg text-white font-bold text-xl rounded-full border-2 border-white/50 hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3 justify-center">
                <Github className="w-6 h-6" />
                Star on GitHub
              </span>
            </motion.a>
          </div>

          <motion.p
            className="mt-8 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Free forever • No credit card required • Open source
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
