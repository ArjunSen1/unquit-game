"use client";

import { motion } from "framer-motion";
import { PathChoice } from "@/lib/types";
import { LEVELS } from "@/lib/game-data";
import { RefreshCw } from "lucide-react";

interface EndingScreenProps {
  chosenPaths: PathChoice[];
  declaration: string;
  isQuit?: boolean;
  onReset: () => void;
}

export function EndingScreen({
  chosenPaths,
  declaration,
  isQuit = false,
  onReset,
}: EndingScreenProps) {
  const aCount = chosenPaths.filter((p) => p === "A").length;
  const bCount = chosenPaths.filter((p) => p === "B").length;
  const majority = aCount >= bCount ? "A" : "B";
  const levelsCompleted = chosenPaths.length;

  const endingA = {
    headline: "Diego stays.",
    subhead: "The case continues. The outcome is not certain.",
    body: "But the fight belongs to you again — chosen, not endured. That is the difference. You did not win because the system yielded. You won because you stayed in the car. Because you answered the call. Because a sixth grader in San Antonio still gets to draw birds in America.",
    quote: "You kept the small things because some part of you knew, even before your thinking mind did, that they were load-bearing.",
  };

  const endingB = {
    headline: "The motion holds.",
    subhead: "The review is scheduled. No guarantee.",
    body: "But you have stopped waiting for certainty before you act. That is new. That is the only change that mattered. You are not the attorney you were when this case started. You are the attorney this case made. That knowledge has a name: expertise that only comes from cases like this.",
    quote: "Identity is not what survives the fight. Identity is what the fight reveals.",
  };

  const ending = majority === "A" ? endingA : endingB;

  if (isQuit) {
    return (
      <div className="min-h-screen bg-[#080E14] flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-xl text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-[#2A4060] text-[10px] tracking-[0.5em] uppercase mb-8">
              The Journey Paused
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-[#1E3450] to-transparent mb-8" />
            <p className="font-serif text-[#4A6080] text-xl leading-relaxed mb-8">
              You did not finish this time.<br />
              That does not mean you cannot.
            </p>
            <p className="font-serif text-[#2A4060] italic text-base mb-8">
              "People do not quit because they are weak. People quit when they can no longer find a reason to continue that feels worth the cost of continuing."
            </p>
            <p className="text-[#4A6080] text-sm mb-10">
              You completed {levelsCompleted} of 12 levels.
              {levelsCompleted > 0 && " You asked harder questions than most."}
            </p>
            <button
              onClick={onReset}
              className="inline-flex items-center gap-2 border border-[#C4923A]/40 hover:bg-[#C4923A]/10 text-[#C4923A] text-sm tracking-wider uppercase px-8 py-3 rounded-full transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080E14] flex flex-col items-center justify-center px-6 py-12 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C4923A]/6 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-[#C4923A] text-[10px] tracking-[0.5em] uppercase mb-4">
            All 12 Levels · Complete
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-[#C4923A]/40 to-transparent mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-3">
            {ending.headline}
          </h1>
          <p className="font-serif text-[#7A9BBE] text-lg italic">
            {ending.subhead}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0F1E32] border border-[#1E3450] rounded-2xl p-8 mb-6"
        >
          <p className="font-serif text-[#C8D8E8] text-base leading-relaxed mb-6">
            {ending.body}
          </p>
          <div className="h-px bg-[#1E3450] mb-6" />
          <p className="font-serif text-[#4A6080] italic text-sm leading-relaxed">
            "{ending.quote}"
          </p>
        </motion.div>

        {declaration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-[#C4923A]/8 border border-[#C4923A]/30 rounded-2xl p-8 mb-6 text-center"
          >
            <p className="text-[#C4923A] text-[10px] tracking-[0.5em] uppercase mb-4">
              Your Unquit® Declaration
            </p>
            <p className="font-serif text-white text-lg leading-relaxed">
              "Today I choose not to quit because{" "}
              <span className="text-[#C4923A]">{declaration}</span>"
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {[
            { label: "Levels", value: "12" },
            { label: "Path A choices", value: String(aCount) },
            { label: "Path B choices", value: String(bCount) },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0A1628] border border-[#1E3450]/60 rounded-xl p-4 text-center"
            >
              <p className="font-serif text-2xl text-[#C4923A] font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-[#2A4060] text-[10px] tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center mb-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#1E3450] to-transparent mb-6" />
          <p className="font-serif text-[#4A6080] text-sm leading-relaxed mb-2">
            Success is not confidence. Success is not certainty. Success is not happiness.
          </p>
          <p className="font-serif text-[#C4923A] text-lg font-semibold">
            Success is one more step.
          </p>
          <p className="text-[#2A4060] text-xs tracking-[0.3em] uppercase mt-1">
            That is Unquit®
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center"
        >
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 border border-[#1E3450] hover:border-[#C4923A]/40 text-[#4A6080] hover:text-[#C4923A] text-xs tracking-[0.3em] uppercase px-6 py-3 rounded-full transition-all duration-300"
          >
            <RefreshCw className="w-3 h-3" />
            Play Again
          </button>
        </motion.div>
      </div>
    </div>
  );
}
