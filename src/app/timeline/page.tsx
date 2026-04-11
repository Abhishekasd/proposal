"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const timelineEvents = [
  {
    date: "Something First Happens",
    title: "When We First Met",
    description: "The moment that changed everything. I still remember the first thing you said and how you made me feel.",
    icon: "✨",
  },
  {
    date: "A Magical Date",
    title: "Our First Real Date",
    description: "Time seemed to stand still. I knew right then that you were someone very special.",
    icon: "🌟",
  },
  {
    date: "Special Memory",
    title: "That One Night...",
    description: "Laughing until our stomachs hurt. It's my favorite memory of us together.",
    icon: "🌙",
  },
  {
    date: "Recent Milestone",
    title: "Growing Together",
    description: "Through every high and low, we've only grown closer. I'm so proud of what we've built.",
    icon: "🌱",
  },
];

export default function TimelinePage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold serif mb-4">Our Love Story</h2>
          <p className="text-primary text-lg font-semibold tracking-widest uppercase">The Journey So Far</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20 rounded-full" />

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white z-10 hidden md:block" />

                <div className={`w-full md:w-[45%] glass p-8 shadow-xl ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}>
                  <div className="text-3xl mb-4">{event.icon}</div>
                  <span className="text-primary font-semibold text-sm tracking-wider uppercase">{event.date}</span>
                  <h3 className="text-2xl font-bold serif my-2">{event.title}</h3>
                  <p className="text-white/80 leading-relaxed font-light">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24"
        >
          <Link href="/gallery">
            <button className="btn-primary">
              View Our Memories &hearts;
            </button>
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
