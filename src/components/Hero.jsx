// components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center h-screen text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Karin Al Zoabi
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-4 text-lg md:text-xl opacity-80"
      >
        blah • blah • blah • blah
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
      >
        Explore Portfolio
      </motion.button>
    </div>
  );
}
