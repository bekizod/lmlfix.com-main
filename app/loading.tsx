'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo or Title */}
        <motion.div
          className="text-2xl font-bold text-[var(--color-primary)]"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.div>

        {/* Bouncing Dots */}
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-[var(--color-primary)] rounded-full"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
