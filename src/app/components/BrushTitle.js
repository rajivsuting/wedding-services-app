"use client";

import { motion } from "framer-motion";

const BrushTitle = ({ children, className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-[#2d2b2c] relative z-10"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-2 left-0 right-0 h-3 bg-[#ee4c59]/20 -rotate-1 origin-left"
        style={{
          clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
        }}
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute -bottom-4 left-0 right-0 h-2 bg-[#ee4c59]/10 rotate-1 origin-right"
        style={{
          clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
        }}
      />
    </div>
  );
};

export default BrushTitle;
