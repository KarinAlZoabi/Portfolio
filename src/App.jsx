import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function App() {
  
  return (
    <div className="min-h-screen bg-background text-textLight dark:bg-white dark:text-textDark transition-colors duration-500">
      <Navbar />

{/* Floating Background Shapes */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-primary/40 blur-3xl top-24 left-10"
        animate={{ y: [0, 50, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/40 blur-3xl bottom-10 right-10"
        animate={{ y: [0, -35, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
{/* New Circles */}


      <motion.div
        className="absolute w-52 h-52 rounded-full bg-primary/30 blur-3xl bottom-1/3 left-32"
        animate={{ y: [150, 50, 150], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 6.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-primary/30 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      {/* Hero Section */}
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
    </div>
  );
}
