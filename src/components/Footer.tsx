'use client';

import { motion } from 'framer-motion';
import { FileText, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,127,214,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="EasyPage logo"
                className="w-10 h-10 rounded-full object-contain bg-white p-0.5"
              />
              <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                EasyPage
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Making the web accessible for neurodivergent minds through AI-powered features and thoughtful design.
            </p>
            <div className="mt-5 bg-gray-800/60 rounded-2xl p-2 border border-gray-700">
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                  alt="Accessible and focused digital reading"
                  className="w-full h-24 object-cover rounded-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
                  alt="Person interacting with a clean and accessible interface"
                  className="w-full h-24 object-cover rounded-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                  alt="Productive and distraction-free workspace"
                  className="w-full h-24 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Accessibility Guide', href: '/accessibility-guide', icon: FileText },
                { name: 'Documentation', href: '/documentation', icon: FileText },
                { name: 'Privacy Policy', href: '/privacy-policy', icon: FileText },
              ].map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <p className="text-gray-400 mb-4">
              Have questions or feedback? Reach out at mradulg306@gmail.com and we will be happy to help.
            </p>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mradulg306@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Support
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for neurodivergent accessibility</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} EasyPage. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
