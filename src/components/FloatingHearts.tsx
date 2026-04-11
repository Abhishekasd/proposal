"use client";

import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: string; size: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * (30 - 10) + 10}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * (15 - 10) + 10}s`,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-particle"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          } as React.CSSProperties}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
