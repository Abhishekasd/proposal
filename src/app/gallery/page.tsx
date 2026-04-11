"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { useState, useEffect } from "react";

const memories = [
  { id: 1, src: "/couple_placeholder.png", caption: "Our first sunset together" },
  { id: 2, src: "/proposal_bg.png", caption: "The place where we first felt home" },
  { id: 3, src: "/landing_bg.png", caption: "Dreamy nights and long talks" },
  { id: 4, src: "/couple_placeholder.png", caption: "Always holding onto you" },
  { id: 5, src: "/proposal_bg.png", caption: "Magical moments we shared" },
  { id: 6, src: "/landing_bg.png", caption: "To many more adventures" },
];

export default function GalleryPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set a future date (e.g., 1 year from now placeholder)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold serif mb-4">Capturing Our Love</h2>
          <p className="text-primary italic text-lg handwritten">Every picture tells a story of us...</p>
        </div>

        {/* Countdown Timer Section */}
        <div className="mb-20 glass p-8 text-center border-primary/20">
          <h3 className="text-xl font-semibold mb-6 uppercase tracking-[0.2em] text-primary">Countdown to our Next Milestone</h3>
          <div className="flex justify-center gap-4 md:gap-10">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-bold serif mb-1">{value}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative h-80 overflow-hidden glass rounded-3xl cursor-pointer"
            >
              <img 
                src={memory.src} 
                alt={memory.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-light italic">{memory.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/letter">
            <button className="btn-secondary">
              Read My Letter to You &rarr;
            </button>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
