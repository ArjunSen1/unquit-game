"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

interface TransitionScreenProps {
  update: string;
  resource: string | null;
  levelIndex: number;
  totalLevels: number;
  onContinue: () => void;
}

export function TransitionScreen({
  update,
  resource,
  levelIndex,
  totalLevels,
  onContinue,
}: TransitionScreenProps) {
  const isLast = levelIndex >= totalLevels - 1;

  return (
    <div className="min-h-screen bg-[#080E14] flex flex-col items-center justify-center px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#C4923A]/6 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl text-center">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#C4923A] text-[10px] tracking-[0.5em] uppercase mb-8"
        >
          The World Responds
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-[#C4923A]/40 to-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-serif text-[#C8D8E8] text-lg md:text-xl leading-relaxed mb-8"
        >
          {update}
        </motion.p>

        {resource && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="inline-flex items-center gap-2 bg-[#C4923A]/10 border border-[#C4923A]/30 text-[#C4923A] text-xs px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-3 h-3" />
            <span className="tracking-wide">{resource}</span>
          </motion.div>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="h-px bg-gradient-to-r from-transparent via-[#1E3450] to-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-[#2A4060] text-xs tracking-[0.3em] uppercase mb-6"
        >
          {isLast ? "Journey Complete" : `Level ${levelIndex + 1} of ${totalLevels} · ${totalLevels - levelIndex - 1} remaining`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <button
            onClick={onContinue}
            className="group inline-flex items-center gap-2 bg-transparent border border-[#C4923A]/50 hover:bg-[#C4923A]/10 text-[#C4923A] text-sm tracking-[0.2em] uppercase px-8 py-3 rounded-full transition-all duration-300 hover:border-[#C4923A]"
          >
            {isLast ? "See Your Declaration" : "Continue the Fight"}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
