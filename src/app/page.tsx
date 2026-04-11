"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function LandingPage() {
  return (
    <PageTransition>
      <div 
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/landing_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 italic serif text-white"
          >
            Hey Darling,
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-xl md:text-2xl mb-12 text-white/90 font-light tracking-wide"
          >
            I have something very special to share with you...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <Link href="/home">
              <button className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Click to Enter &hearts;</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Decorative corner element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3, duration: 2 }}
          className="absolute bottom-10 left-10 text-white/40 font-light text-sm italic"
        >
          Volume up for the best experience...
        </motion.div>
      </div>
    </PageTransition>
  );
}
