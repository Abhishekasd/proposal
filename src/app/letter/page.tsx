"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function LetterPage() {
  const sentences = [
    "I've been thinking about how to say this...",
    "Words often fail me when I'm around you,",
    "because you're more than I could ever describe.",
    "You are my partner, my best friend, and my home.",
    "I promise to always be by your side,",
    "to support your dreams as if they were my own,",
    "and to love you more with every passing day.",
    "There's something I need to ask you..."
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-3xl w-full glass p-12 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
          
          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl handwritten text-primary mb-2">My Dearest...</h2>
              <div className="w-24 h-px bg-primary/30 mx-auto" />
            </motion.div>

            <div className="space-y-6 text-xl md:text-3xl handwritten leading-relaxed text-white/90">
              {sentences.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 1, duration: 1.5 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: sentences.length * 1 + 1, duration: 1 }}
              className="pt-20 text-center"
            >
              <Link href="/proposal">
                <button className="btn-primary px-12 py-5 text-xl tracking-widest uppercase">
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
