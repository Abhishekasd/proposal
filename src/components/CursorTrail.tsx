"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
  size: number;
}

const CHARACTERS = ["❤️", "✨", "💖", "💕", "🌸"];

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let count = 0;
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      count++;
      if (count % 3 !== 0) return; // Throttle particle creation

      const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
        char,
        size: Math.floor(Math.random() * 12) + 14,
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 800);
    return () => clearTimeout(timer);
  }, [particles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-ping-once transition-all duration-700 ease-out opacity-80"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
            animation: "trailFade 0.8s forwards ease-out",
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
