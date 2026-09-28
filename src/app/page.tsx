"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SecretLockModal from "@/components/SecretLockModal";

export default function LandingPage() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <PageTransition>
      <SecretLockModal onUnlock={() => setUnlocked(true)} />

      <div
        className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 text-center"
        style={{
          backgroundImage: 'url("/landing_bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark romantic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

        {unlocked && (
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6 py-12">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="text-6xl md:text-7xl mb-2"
            >
              💖
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold italic serif text-white leading-tight"
            >
              Hey My Love,
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-lg leading-relaxed"
            >
              I created something special just for you... A journey through our memories and feelings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="pt-6"
            >
              <Link href="/home">
                <button className="btn-primary group text-lg px-10 py-4 rounded-full shadow-[0_0_30px_rgba(255,77,109,0.5)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Click to Begin Our Story ✨
                  </span>
                </button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="text-xs sm:text-sm text-white/60 italic pt-8 font-light"
            >
              💡 Turn up your sound for the best experience...
            </motion.p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
