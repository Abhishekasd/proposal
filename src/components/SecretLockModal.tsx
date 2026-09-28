"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SecretLockModal({ onUnlock }: { onUnlock: () => void }) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const savedUnlocked = sessionStorage.getItem("proposal_unlocked");
    if (savedUnlocked === "true") {
      setIsUnlocked(true);
      onUnlock();
    }
  }, [onUnlock]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passcodes: "1234", "love", "forever", or any non-empty code if testing
    const validCodes = ["1234", "love", "forever", "1402", "0101"];
    if (validCodes.includes(passcode.trim().toLowerCase()) || passcode.trim() === "1234") {
      sessionStorage.setItem("proposal_unlocked", "true");
      setIsUnlocked(true);
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isUnlocked) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="glass p-8 md:p-12 max-w-md w-full text-center border-primary/40 shadow-2xl relative"
        >
          <div className="text-6xl mb-4">🔐</div>
          <h2 className="text-3xl font-bold serif text-white mb-2">Secret Lock</h2>
          <p className="text-sm text-white/70 mb-6 font-light">
            This message is protected with love. Enter the secret pin code to open!
          </p>

          <form onSubmit={handleVerify} className="space-y-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode (Hint: 1234)"
              className="w-full px-5 py-3.5 text-center text-lg rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-all"
              autoFocus
            />

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-300 font-medium"
              >
                Incorrect secret code! Try '1234' ❤️
              </motion.p>
            )}

            <button
              type="submit"
              className="btn-primary w-full py-3.5 text-base font-semibold tracking-wide uppercase shadow-lg"
            >
              Unlock Experience ✨
            </button>
          </form>

          <p className="text-xs text-white/50 mt-6 italic">
            Hint: Default code is <span className="underline font-mono">1234</span>
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
