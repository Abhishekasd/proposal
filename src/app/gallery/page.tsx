"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ReasonsSection from "@/components/ReasonsSection";
import { useState, useEffect } from "react";

const memories = [
  { id: 1, src: "/couple_placeholder.png", caption: "Our sunset walk by the shore" },
  { id: 2, src: "/proposal_bg.png", caption: "The fairy-light evening we'll never forget" },
  { id: 3, src: "/landing_bg.png", caption: "Underneath the pink & purple sky" },
  { id: 4, src: "/couple_placeholder.png", caption: "Hand in hand, wherever we go" },
  { id: 5, src: "/proposal_bg.png", caption: "Magical moments created together" },
  { id: 6, src: "/landing_bg.png", caption: "To countless more adventures ahead" },
];

export default function GalleryPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days milestone

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase block">
            Memory Snapshot
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold serif text-white">
            Capturing Our Love
          </h2>
          <p className="text-primary italic text-lg sm:text-xl handwritten">
            Every photo holds a story of us...
          </p>
        </div>

        {/* Countdown Timer Section */}
        <div className="mb-16 glass p-6 sm:p-10 text-center border-primary/30 rounded-3xl shadow-2xl max-w-3xl mx-auto w-full">
          <h3 className="text-xs sm:text-sm font-semibold mb-6 uppercase tracking-[0.25em] text-primary">
            Countdown to Our Next Milestone ⏳
          </h3>
          <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center bg-white/5 p-3 rounded-2xl border border-white/10">
                <div className="text-2xl sm:text-4xl font-bold serif text-white mb-1">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative h-72 sm:h-80 overflow-hidden glass rounded-3xl border border-white/15 cursor-pointer shadow-lg"
            >
              <img
                src={memory.src}
                alt={memory.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 text-left">
                <p className="text-white text-base font-light italic leading-snug">
                  "{memory.caption}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reasons Why I Love You Interactive Deck */}
        <ReasonsSection />

        {/* Navigation Button */}
        <div className="text-center mt-12">
          <Link href="/letter">
            <button className="btn-secondary text-base sm:text-lg px-8 py-3.5">
              Read My Letter to You &rarr;
            </button>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
