"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function VoiceNotePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="my-12 max-w-xl mx-auto px-4">
      <div className="glass p-6 md:p-8 rounded-3xl border border-white/20 shadow-xl text-center relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎙️</span>
            <div className="text-left">
              <h4 className="text-lg font-bold serif text-white">A Special Voice Note</h4>
              <p className="text-xs text-white/60">Press play to listen to my message</p>
            </div>
          </div>
          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
            For You ❤️
          </span>
        </div>

        {/* Audio Element (Using sample romantic audio or recordable) */}
        <audio
          ref={audioRef}
          src="https://www.free-stock-music.com/music/purrple-cat-calm-waters.mp3"
          onEnded={() => setIsPlaying(false)}
        />

        {/* Visualizer & Play Controls */}
        <div className="flex items-center gap-4 my-6 bg-white/5 p-4 rounded-2xl border border-white/10">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl shadow-lg transition-transform active:scale-95 hover:bg-primary-hover flex-shrink-0"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>

          {/* Animated Waveform Bars */}
          <div className="flex-1 flex items-center justify-center gap-1.5 h-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlaying ? [8, Math.random() * 28 + 8, 8] : 8,
                }}
                transition={{
                  duration: 0.5,
                  repeat: isPlaying ? Infinity : 0,
                  repeatType: "reverse",
                  delay: i * 0.05,
                }}
                className="w-1 bg-primary/70 rounded-full"
              />
            ))}
          </div>
        </div>

        <p className="text-xs md:text-sm italic text-white/80 font-light">
          "I recorded this because written words aren't always enough to explain how deeply you mean to me..."
        </p>
      </div>
    </div>
  );
}
