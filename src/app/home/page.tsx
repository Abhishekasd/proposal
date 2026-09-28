"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import VoiceNotePlayer from "@/components/VoiceNotePlayer";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Every single moment I spend with you feels like a dream come true... You have changed my world in ways I never thought possible. From your contagious laugh to your constant support, every detail makes me fall deeper in love with you every single day.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8">
        <div className="max-w-4xl w-full glass p-8 sm:p-12 md:p-16 text-center space-y-10 shadow-2xl border border-white/20 my-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl md:text-6xl mb-4 text-primary animate-pulse">
              &hearts;
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 serif tracking-tight">
              To My Dearest...
            </h2>
            <div className="w-20 h-1 bg-primary/40 rounded-full mb-8" />
          </motion.div>

          {/* Typewriter Body */}
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center justify-center">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-loose font-light italic text-white/90 max-w-2xl mx-auto">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-6 bg-primary ml-1.5 align-middle rounded-full"
              />
            </p>
          </div>

          {/* Voice Note Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: displayText.length >= fullText.length ? 1 : 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <VoiceNotePlayer />
          </motion.div>

          {/* Navigation Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: displayText.length >= fullText.length / 2 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="pt-6"
          >
            <Link href="/timeline">
              <button className="btn-secondary text-base sm:text-lg px-8 py-3.5 flex items-center gap-3 mx-auto">
                <span>See Our Journey</span>
                <span className="text-primary text-xl">&rarr;</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
