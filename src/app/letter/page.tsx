"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function LetterPage() {
  const sentences = [
    "I've been trying to find the right words to say this...",
    "Words often fail me when I look into your eyes,",
    "because you are more than I could ever express.",
    "You are my partner, my best friend, and my home.",
    "I promise to stand by your side through every season of life,",
    "to celebrate your victories and hold your hand through challenges,",
    "and to love you more with every single passing day.",
    "Now, there's just one final question left in my heart..."
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6">
        <div className="max-w-3xl w-full glass p-8 sm:p-14 md:p-20 shadow-2xl relative overflow-hidden border border-white/20 rounded-3xl my-auto">
          {/* Subtle Heart Graphic */}
          <div className="absolute top-6 right-6 text-4xl text-primary/20 pointer-events-none">
            💌
          </div>

          <div className="relative z-10 space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mb-8"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl handwritten text-primary mb-3">
                My Dearest Love,
              </h2>
              <div className="w-24 h-0.5 bg-primary/40 mx-auto" />
            </motion.div>

            <div className="space-y-6 sm:space-y-8 text-xl sm:text-2xl md:text-3xl handwritten leading-relaxed sm:leading-loose text-white/95 max-w-2xl mx-auto">
              {sentences.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.8, duration: 1 }}
                  className="font-normal"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: sentences.length * 0.8 + 0.5, duration: 0.8 }}
              className="pt-12"
            >
              <Link href="/proposal">
                <button className="btn-primary px-10 py-4 text-base sm:text-lg tracking-widest uppercase shadow-[0_0_25px_rgba(255,77,109,0.5)]">
                  Open Your Surprise &hearts;
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
