"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We try to play automatically if we have permission, 
    // but the Enter button on the landing page will be the main trigger.
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked by browser. User interaction required.");
        setIsPlaying(false);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Global event listener for "Enter" click to start music
  useEffect(() => {
    const handleStartAudio = () => {
      setIsPlaying(true);
      window.removeEventListener("click", handleStartAudio);
    };

    // This listener only fires once to handle the initial interaction
    window.addEventListener("click", handleStartAudio);
    return () => window.removeEventListener("click", handleStartAudio);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <audio
        ref={audioRef}
        src="https://www.free-stock-music.com/music/purrple-cat-calm-waters.mp3"
        loop
      />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="glass p-4 rounded-full flex items-center justify-center shadow-lg"
        style={{ width: "50px", height: "50px" }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.span
              key="playing"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              🔊
            </motion.span>
          ) : (
            <motion.span
              key="paused"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              🔇
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
