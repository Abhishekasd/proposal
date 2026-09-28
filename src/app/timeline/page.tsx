"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const timelineEvents = [
  {
    date: "The First Spark",
    title: "When We First Met",
    description: "The moment that changed everything. I still remember the first thing you said and the butterflies in my stomach.",
    icon: "✨",
  },
  {
    date: "A Magical Date",
    title: "Our First Date",
    description: "Time seemed to stand completely still. Talking for hours felt like seconds, and I knew you were someone extra special.",
    icon: "🌟",
  },
  {
    date: "Unforgettable Moment",
    title: "That Late Night Laugh",
    description: "Laughing until our stomachs hurt over the silly little things. It remains one of my absolute favorite memories.",
    icon: "🌙",
  },
  {
    date: "Growing Together",
    title: "Through Every High & Low",
    description: "Through every challenge and milestone, we've only grown closer and stronger together. I love who we are.",
    icon: "🌱",
  },
];

export default function TimelinePage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase block">
            Our Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold serif text-white">
            Our Beautiful Journey
          </h2>
          <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto mt-2" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 via-white/30 to-primary/80 rounded-full" />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Marker Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white/80 z-20 shadow-[0_0_15px_rgba(255,77,109,0.8)]" />

                {/* Content Box */}
                <div
                  className={`w-[calc(100%-2.5rem)] md:w-[45%] ml-12 md:ml-0 glass p-6 sm:p-8 shadow-xl border border-white/15 rounded-3xl ${
                    index % 2 === 0 ? "md:mr-auto text-left" : "md:ml-auto text-left"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl p-2 bg-white/5 rounded-2xl border border-white/10">{event.icon}</span>
                    <div>
                      <span className="text-primary font-semibold text-xs tracking-wider uppercase block">
                        {event.date}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold serif text-white">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mt-3">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <Link href="/gallery">
            <button className="btn-primary text-base sm:text-lg px-8 py-3.5 shadow-lg">
              View Our Memories &hearts;
            </button>
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
