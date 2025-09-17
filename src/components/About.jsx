// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-background dark:bg-white text-textLight dark:text-textDark"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="leading-relaxed text-lg opacity-90">
              I’m <span className="font-semibold">Karin Al Zoabi</span>, a calm but ambitious person who enjoys exploring knowledge and creating
              meaningful things. I’m naturally reserved and thoughtful, yet
              deeply curious about the world.
            </p>
            <p className="leading-relaxed text-lg opacity-90">
              I love reading and researching across many fields—space, oceans,
              biology, history, and more. This curiosity fuels my creativity and
              helps me bring fresh perspectives into my work.
            </p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-l-4 border-primary pl-4 italic text-lg opacity-80"
            >
              “I have always had more dread of a pen, a bottle of ink, and a sheet of paper than of a sword or pistol.”
            </motion.blockquote>

            {/* Author */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="pl-4 text-sm opacity-60 mt-2"
            >
              — Alexandre Dumas, The Count of Monte Cristo
            </motion.p>
          </motion.div>

          {/* Traits / Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              "Creative",
              "Research-Oriented",
              "Ambitious",
              "Detail-Focused",
              "Curious",
              "Determined",
            ].map((trait, index) => (
              <div
                key={index}
                className="p-4 rounded-xl shadow hover:shadow-md transition text-center font-medium
                           bg-gradient-to-br from-[#7C3AED]/40 to-[#1A1A1A] dark:from-[#7C3AED]/20 dark:to-gray-100"
              >
                {trait}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}