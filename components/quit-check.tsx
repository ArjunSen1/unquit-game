"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface QuitCheckProps {
  onContinue: () => void;
  onEnd: () => void;
}

const QUIT_QUESTIONS = [
  {
    id: "solve",
    question: "What would quitting solve?",
    placeholder: "Be honest. What specifically improves if you stop now?",
  },
  {
    id: "cost",
    question: "What would quitting cost?",
    placeholder: "Diego. Lucia. Marcus. What remains on the table?",
  },
  {
    id: "unresolved",
    question: "What would remain unresolved?",
    placeholder: "Name the things that would stay open, unfought, undone.",
  },
];

export function QuitCheck({ onContinue, onEnd }: QuitCheckProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [showDecision, setShowDecision] = useState(false);

  const currentQ = QUIT_QUESTIONS[step];

  const handleNext = () => {
    if (step < QUIT_QUESTIONS.length - 1) {
      setStep((s) => s + 1);
    } else {
      setShowDecision(true);
    }
  };

  const updateAnswer = (val: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = val;
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#080E14] flex flex-col items-center justify-center px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-950/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400/60 text-[10px] tracking-[0.5em] uppercase text-center mb-8"
        >
          Quit Check
        </motion.p>

        <AnimatePresence mode="wait">
          {!showDecision ? (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0F1E32] border border-[#1E3450] rounded-2xl p-8"
            >
              <div className="flex gap-1.5 mb-6">
                {QUIT_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                      i <= step ? "bg-red-400/50" : "bg-[#1E3450]"
                    }`}
                  />
                ))}
              </div>

              <p className="text-[#4A6080] text-[10px] tracking-[0.4em] uppercase mb-4">
                Question {step + 1} of {QUIT_QUESTIONS.length}
              </p>
              <h2 className="font-serif text-white text-2xl mb-6">
                "{currentQ.question}"
              </h2>
              <textarea
                value={answers[step]}
                onChange={(e) => updateAnswer(e.target.value)}
                placeholder={currentQ.placeholder}
                className="w-full bg-[#080E14] border border-[#1E3450] rounded-xl p-4 font-serif text-[#7A9BBE] text-sm leading-relaxed placeholder:text-[#2A4060] focus:outline-none focus:border-[#2A4060] resize-none min-h-[80px]"
                rows={3}
                autoFocus
              />
              <button
                onClick={handleNext}
                disabled={answers[step].trim().length < 3}
                className="mt-4 w-full flex items-center justify-center gap-2 border border-[#1E3450] hover:border-[#2A4060] text-[#4A6080] hover:text-[#7A9BBE] text-sm tracking-wider uppercase py-3 rounded-xl transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {step < QUIT_QUESTIONS.length - 1 ? "Next Question" : "See the Full Picture"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="decision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="bg-[#0F1E32] border border-[#1E3450] rounded-2xl p-8 mb-6">
                <p className="text-[#4A6080] text-[10px] tracking-[0.4em] uppercase mb-6">
                  Your Answers
                </p>
                {QUIT_QUESTIONS.map((q, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    <p className="text-[#2A4060] text-xs mb-1">{q.question}</p>
                    <p className="font-serif text-[#7A9BBE] text-sm leading-relaxed">
                      {answers[i] || "—"}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-serif text-center text-[#4A6080] text-base italic mb-6">
                "The decision belongs to you. It always has."
              </p>

              <button
                onClick={onContinue}
                className="w-full bg-[#C4923A] hover:bg-[#D4A24A] text-[#080E14] font-semibold text-sm tracking-[0.2em] uppercase py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(196,146,58,0.3)]"
              >
                I Choose to Continue
              </button>
              <button
                onClick={onEnd}
                className="w-full border border-[#1E3450] hover:border-red-900/50 text-[#2A4060] hover:text-red-400/60 text-sm tracking-wider uppercase py-3 rounded-xl transition-all duration-200"
              >
                End the Journey
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
