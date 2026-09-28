"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const REASONS = [
  {
    icon: "😊",
    title: "Your Infectious Smile",
    detail: "No matter how tough my day is, one look at your smile brightens up my whole world."
  },
  {
    icon: "💖",
    title: "Your Kind Heart",
    detail: "The gentle, loving way you treat everyone around you makes me admire you more every day."
  },
  {
    icon: "🌟",
    title: "You Believe In Me",
    detail: "Even when I doubt myself, your endless faith in me gives me the strength to achieve anything."
  },
  {
    icon: "🌙",
    title: "Late Night Talks",
    detail: "Losing track of time talking about our silly thoughts, future dreams, and deepest secrets."
  },
  {
    icon: "🤗",
    title: "Safe In Your Arms",
    detail: "Whenever you hold me, all the noise of the world fades away and I feel completely at home."
  },
  {
    icon: "✨",
    title: "Making Memories",
    detail: "Every single ordinary moment turned into an extraordinary memory just because you were there."
  }
];

export default function ReasonsSection() {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="my-20 max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase block mb-2">Little Details</span>
        <h3 className="text-3xl md:text-5xl font-bold serif">Reasons Why I Love You</h3>
        <p className="text-white/70 italic mt-2 text-sm md:text-base">Tap any card to reveal the reason ❤️</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REASONS.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={() => toggleFlip(index)}
            className="cursor-pointer perspective-1000 min-h-[220px]"
          >
            <motion.div
              animate={{ rotateY: flipped[index] ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full relative preserve-3d"
            >
              {/* Front Side */}
              <div className="w-full h-full glass p-6 flex flex-col items-center justify-center text-center rounded-3xl border border-white/20 backface-hidden shadow-lg">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h4 className="text-xl font-bold serif text-white mb-2">{reason.title}</h4>
                <span className="text-xs text-primary font-medium tracking-wide">Tap to Flip ✨</span>
              </div>

              {/* Back Side */}
              <div
                className="w-full h-full glass p-6 flex flex-col items-center justify-center text-center rounded-3xl border border-primary/40 bg-black/40 absolute top-0 left-0 backface-hidden shadow-2xl"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="text-2xl mb-2">💌</div>
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-light italic">
                  "{reason.detail}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
