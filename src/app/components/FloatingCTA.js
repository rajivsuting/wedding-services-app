"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50"
    >
      <Link
        href="/contact"
        className="bg-[#ee4c59] text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:bg-[#ee4c59]/90 transition-colors flex items-center text-sm md:text-base"
      >
        <span className="mr-2">Get Free Quote</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 md:h-5 md:w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
