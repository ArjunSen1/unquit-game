"use client";

import { motion } from "framer-motion";
import { INITIAL_RESOURCES } from "@/lib/game-data";
import { ChevronRight } from "lucide-react";

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen bg-[#080E14] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C4923A]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#C4923A] text-xs tracking-[0.4em] uppercase font-medium mb-6">
            An Interactive Story of Resilience
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight leading-tight">
            The Last<br />
            <span className="text-[#C4923A]">60 Days</span>
          </h1>
          <p className="mt-4 text-[#4A6080] text-sm tracking-[0.3em] uppercase">
            An Unquit® Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#0F1E32] border border-[#1E3450] rounded-2xl p-8 mb-6"
        >
          <p className="text-[#C4923A] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">
            You Are
          </p>
          <h2 className="font-serif text-2xl text-white font-semibold mb-1">
            Elena Rodriguez
          </h2>
          <p className="text-[#4A6080] text-sm mb-6">
            Immigration attorney · 19 years · Houston, Texas
          </p>
          <div className="h-px bg-[#1E3450] mb-6" />
          <p className="text-[#7A9BBE] text-sm leading-relaxed mb-6">
            Your client, <span className="text-white">Diego Herrera</span>, is 41 years old. A construction foreman.
            22 years in America. Three daughters born in San Antonio. He has paid taxes
            every year without exception. He has never received a parking ticket.
          </p>
          <p className="text-[#7A9BBE] text-sm leading-relaxed">
            His appeal was denied on a technicality. He now has{" "}
            <span className="text-[#C4923A] font-semibold">60 days</span> to leave the
            country his daughters call home. You are sitting in your car in a parking garage.
            The sun is going down.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#0A1628] border border-[#1E3450]/60 rounded-xl px-6 py-5 mb-8"
        >
          <p className="text-[#4A6080] text-[10px] tracking-[0.4em] uppercase mb-4">
            Your Starting Resources
          </p>
          <div className="flex flex-wrap gap-2">
            {INITIAL_RESOURCES.map((r) => (
              <span
                key={r}
                className="text-xs bg-[#162438] border border-[#1E3450] text-[#7A9BBE] px-3 py-1.5 rounded-full"
              >
                {r}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-[#2A4060] text-xs tracking-[0.2em] uppercase mb-2">
            The Unquit® Guide
          </p>
          <p className="font-serif text-[#4A6080] italic text-base leading-relaxed">
            \"The participant already contains the answer.<br />
            Your job is to help them see it.\"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center"
        >
          <button
            onClick={onStart}
            className="group flex items-center gap-3 bg-[#C4923A] hover:bg-[#D4A24A] text-[#080E14] font-semibold text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(196,146,58,0.3)]"
          >
            Begin the Journey
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-[#2A4060] text-xs mt-6 tracking-wider"
        >
          12 LEVELS · EVERY CHOICE MATTERS · ONE MORE STEP
        </motion.p>
      </div>
    </div>
  );
}
