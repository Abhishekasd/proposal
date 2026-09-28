"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import confetti from "canvas-confetti";

export default function ProposalPage() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showSurprise, setShowSurprise] = useState(false);
  const [partnerMessage, setPartnerMessage] = useState("");
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = localStorage.getItem("proposal_partner_response");
    if (existing) {
      setSavedMessage(existing);
    }
  }, []);

  const handleNoHover = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const maxX = Math.min(container.width / 2 - 80, 200);
      const maxY = Math.min(container.height / 2 - 80, 150);

      const newX = (Math.random() * 2 - 1) * maxX;
      const newY = (Math.random() * 2 - 1) * maxY;

      setNoButtonPos({ x: newX, y: newY });
    }
  };

  const handleYes = () => {
    setIsAccepted(true);
    const duration = 12 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 35, spread: 360, ticks: 60, zIndex: 999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleSaveResponse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerMessage.trim()) return;
    localStorage.setItem("proposal_partner_response", partnerMessage.trim());
    setSavedMessage(partnerMessage.trim());
  };

  if (isAccepted) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center space-y-8 my-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="text-7xl sm:text-9xl mb-2"
          >
            🎉
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold serif text-white"
          >
            YES! ❤️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-light italic text-white/95 max-w-2xl leading-relaxed"
          >
            "You just made me the happiest person alive in the entire universe!"
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-5xl sm:text-6xl"
          >
            💖 💍 💖
          </motion.div>

          {/* Partner Response Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="w-full max-w-lg glass p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl mt-8"
          >
            <h3 className="text-xl font-bold serif text-white mb-2">Leave a Message Back 💌</h3>
            <p className="text-xs text-white/70 mb-4">Write your feelings or a special note back:</p>

            {savedMessage ? (
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20 text-left">
                <span className="text-xs text-primary font-semibold block mb-1">Your Saved Response:</span>
                <p className="text-white italic text-sm md:text-base">"{savedMessage}"</p>
                <button
                  onClick={() => setSavedMessage(null)}
                  className="text-xs text-white/50 underline mt-3 hover:text-white"
                >
                  Edit Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSaveResponse} className="space-y-4">
                <textarea
                  value={partnerMessage}
                  onChange={(e) => setPartnerMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows={3}
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary text-sm sm:text-base resize-none"
                  required
                />
                <button type="submit" className="btn-primary w-full py-3 text-sm font-semibold tracking-wide">
                  Save My Response ❤️
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div
        ref={containerRef}
        className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden text-center"
        style={{
          backgroundImage: 'url("/proposal_bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

        <AnimatePresence mode="wait">
          {!showSurprise ? (
            <motion.div
              key="box"
              exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
              className="relative z-10 text-center max-w-xl mx-auto px-4"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl sm:text-9xl mb-8 cursor-pointer"
                onClick={() => setShowSurprise(true)}
              >
                🎁
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold serif text-white mb-6">
                Are you ready for your surprise?
              </h2>
              <button
                onClick={() => setShowSurprise(true)}
                className="btn-primary text-lg px-10 py-4 shadow-[0_0_30px_rgba(255,77,109,0.5)]"
              >
                Open It Now ✨
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="relative z-10 text-center max-w-4xl mx-auto px-4 my-auto"
            >
              <span className="text-5xl sm:text-7xl mb-6 block animate-bounce">💍</span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold serif text-white mb-12 leading-tight">
                Will You Be Mine Forever?
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 min-h-[160px] relative">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleYes}
                  className="btn-primary text-2xl sm:text-3xl px-12 py-5 rounded-full shadow-[0_0_40px_rgba(255,77,109,0.7)] z-20"
                >
                  YES! 💖
                </motion.button>

                <motion.button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="btn-secondary text-lg px-8 py-3.5 opacity-70 cursor-default z-10"
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
