"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import confetti from "canvas-confetti";

export default function ProposalPage() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showSurprise, setShowSurprise] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const maxX = container.width - 150;
      const maxY = container.height - 100;

      const newX = Math.random() * maxX - maxX / 2;
      const newY = Math.random() * maxY - maxY / 2;

      setNoButtonPos({ x: newX, y: newY });
    }
  };

  const handleYes = () => {
    setIsAccepted(true);
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  if (isAccepted) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10 }}
            className="text-9xl mb-4"
          >
            🎉
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold serif text-white"
          >
            YES! ❤️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl md:text-3xl font-light italic text-white/90"
          >
            "You just made me the happiest person alive!"
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-6xl"
          >
            💖 💍 💖
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div 
        ref={containerRef}
        className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden"
        style={{
          backgroundImage: 'url("/proposal_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <AnimatePresence>
          {!showSurprise ? (
            <motion.div
              key="box"
              exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
              className="relative z-10 text-center"
            >
              <div className="text-8xl mb-10 cursor-pointer animate-bounce">🎁</div>
              <h2 className="text-3xl md:text-5xl font-bold serif text-white mb-8">Ready for the surprise?</h2>
              <button 
                onClick={() => setShowSurprise(true)}
                className="btn-primary"
              >
                Open It Now
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative z-10 text-center max-w-4xl"
            >
              <h1 className="text-5xl md:text-8xl font-bold serif text-white mb-16 leading-tight">
                Will You Be Mine Forever?
              </h1>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 min-h-[200px]">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={handleYes}
                  className="btn-primary text-3xl px-12 py-6 rounded-full shadow-[0_0_30px_rgba(255,77,109,0.5)]"
                >
                  YES! 💖
                </motion.button>

                <motion.button
                  onMouseEnter={handleNoHover}
                  animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="btn-secondary text-xl px-10 py-4 opacity-70 cursor-default"
                >
                  No 😅
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
