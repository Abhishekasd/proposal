"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Every moment I spend with you is like a beautiful dream come true... You've changed my life in ways I never thought possible. From the way you smile to the way you support me, every little thing makes me fall deeper in love with you every single day.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-3xl w-full glass p-10 md:p-16 text-center space-y-10 shadow-2xl border-white/20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="text-6xl mb-6 text-primary">&hearts;</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">To My Dearest...</h2>
            
            <p className="text-xl md:text-2xl leading-relaxed font-light min-h-[200px] italic">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-8 bg-primary ml-1 align-middle"
              />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: displayText.length === fullText.length ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="pt-10"
          >
            <Link href="/timeline">
              <button className="btn-secondary">
                See Our Journey &rarr;
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
