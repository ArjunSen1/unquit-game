"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GameLevel, PathChoice } from "@/lib/types";
import { STAGE_NAMES } from "@/lib/game-data";
import { AlertTriangle, Zap } from "lucide-react";

interface LevelScreenProps {
  level: GameLevel;
  levelIndex: number;
  totalLevels: number;
  resources: string[];
  onChoosePath: (choice: PathChoice) => void;
  onQuit: () => void;
}

export function LevelScreen({
  level,
  levelIndex,
  totalLevels,
  resources,
  onChoosePath,
  onQuit,
}: LevelScreenProps) {
  const [selected, setSelected] = useState<PathChoice | null>(null);
  const isDeclaration = levelIndex === totalLevels - 1;
  const [declarationText, setDeclarationText] = useState("");

  const progressPct = ((levelIndex) / totalLevels) * 100;

  const handleSelect = (choice: PathChoice) => {
    setSelected(choice);
    setTimeout(() => onChoosePath(choice), 500);
  };

  const handleDeclarationSubmit = () => {
    if (declarationText.trim().length > 3) {
      onChoosePath("A");
    }
  };

  return (
    <div className="min-h-screen bg-[#080E14] flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E3450]/50">
        <div className="flex items-center gap-3">
          <span className="text-[#C4923A] font-serif font-bold text-lg tracking-wide">
            Unquit®
          </span>
          {(level.isEmergency || level.isShift) && (
            <span
              className={`flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase px-2 py-1 rounded ${
                level.isEmergency
                  ? "text-red-400 bg-red-950/40 border border-red-900/50"
                  : "text-[#C4923A] bg-[#C4923A]/10 border border-[#C4923A]/30"
              }`}
            >
              {level.isEmergency ? (
                <AlertTriangle className="w-3 h-3" />
              ) : (
                <Zap className="w-3 h-3" />
              )}
              {level.isEmergency ? "Emergency" : "Story Shift"}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          {level.daysRemaining > 0 && (
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border ${
                level.daysRemaining <= 10
                  ? "text-red-400 border-red-900/60 bg-red-950/30"
                  : "text-[#7A9BBE] border-[#1E3450]"
              }`}
            >
              {level.daysRemaining} days
            </span>
          )}
          <span className="text-[#4A6080] text-xs">
            Level {levelIndex + 1} / {totalLevels}
          </span>
        </div>
      </div>

      <div className="h-0.5 bg-[#0F1E32] relative">
        <motion.div
          className="h-full bg-gradient-to-r from-[#C4923A]/60 to-[#C4923A]"
          initial={{ width: "0%" }}
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-[#2A4060] text-[10px] tracking-[0.4em] uppercase">
            {level.stage}
          </span>
          <div className="h-px flex-1 bg-[#1E3450]/40" />
          <span className="text-[#C4923A] text-[10px] tracking-[0.3em] uppercase font-medium">
            {level.stageName}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 mb-6"
          >
            <p className="text-[#4A6080] text-[10px] tracking-[0.4em] uppercase mb-3">
              The Situation
            </p>
            <div
              className={`rounded-xl p-5 border ${
                level.isEmergency
                  ? "bg-red-950/20 border-red-900/30"
                  : level.isShift
                  ? "bg-[#C4923A]/5 border-[#C4923A]/20"
                  : "bg-[#0F1E32] border-[#1E3450]"
              }`}
            >
              <p className="font-serif text-[#C8D8E8] text-base leading-relaxed">
                {level.situation}
              </p>
            </div>
          </motion.div>

          {level.guideIntro && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-5 flex items-start gap-3"
            >
              <div className="w-1 h-full bg-[#C4923A]/40 rounded-full flex-shrink-0 mt-1" />
              <p className="font-serif text-[#4A6080] italic text-sm leading-relaxed">
                {level.guideIntro}
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-7"
          >
            <p className="text-[#4A6080] text-[10px] tracking-[0.4em] uppercase mb-3">
              {isDeclaration ? "The Unquit® Declaration" : "The Guide Asks"}
            </p>
            {isDeclaration ? (
              <p className="font-serif text-white text-xl md:text-2xl leading-snug">
                "Today I choose not to quit because{" "}
                <span className="text-[#C4923A]">______</span>"
              </p>
            ) : (
              <p className="font-serif text-white text-xl md:text-2xl leading-snug">
                "{level.question}"
              </p>
            )}
          </motion.div>

          {isDeclaration ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-[#4A6080] text-xs">
                Choose a declaration below, or write your own:
              </p>
              <div className="space-y-3 mb-4">
                {[
                  { choice: "A" as PathChoice, text: level.pathA.text, label: level.pathA.label },
                  { choice: "B" as PathChoice, text: level.pathB.text, label: level.pathB.label },
                ].map(({ choice, text, label }) => (
                  <button
                    key={choice}
                    onClick={() => handleSelect(choice)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      selected === choice
                        ? "border-[#C4923A] bg-[#C4923A]/10"
                        : "border-[#1E3450] bg-[#0F1E32] hover:border-[#C4923A]/40 hover:bg-[#162438]"
                    }`}
                  >
                    <span className="text-[#C4923A] text-[10px] tracking-[0.3em] uppercase block mb-1">
                      {label}
                    </span>
                    <span className="font-serif text-[#C8D8E8] text-sm leading-relaxed">
                      "…{text}"
                    </span>
                  </button>
                ))}
              </div>
              <div className="relative">
                <div className="h-px bg-[#1E3450] mb-4" />
                <p className="text-[#2A4060] text-[10px] tracking-[0.3em] uppercase mb-2">
                  Or write your own
                </p>
                <textarea
                  value={declarationText}
                  onChange={(e) => setDeclarationText(e.target.value)}
                  placeholder="Today I choose not to quit because..."
                  className="w-full bg-[#0F1E32] border border-[#1E3450] rounded-xl p-4 font-serif text-[#C8D8E8] text-sm leading-relaxed placeholder:text-[#2A4060] focus:outline-none focus:border-[#C4923A]/50 resize-none min-h-[80px]"
                  rows={3}
                />
                {declarationText.trim().length > 3 && (
                  <button
                    onClick={handleDeclarationSubmit}
                    className="mt-3 w-full bg-[#C4923A] hover:bg-[#D4A24A] text-[#080E14] font-semibold text-sm tracking-wider uppercase py-3 rounded-xl transition-all duration-200"
                  >
                    Submit My Declaration
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              >
                {(
                  [
                    { choice: "A" as PathChoice, path: level.pathA },
                    { choice: "B" as PathChoice, path: level.pathB },
                  ] as const
                ).map(({ choice, path }) => (
                  <motion.button
                    key={choice}
                    onClick={() => !selected && handleSelect(choice)}
                    disabled={selected !== null}
                    whileHover={!selected ? { scale: 1.02 } : {}}
                    whileTap={!selected ? { scale: 0.98 } : {}}
                    className={`text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                      selected === choice
                        ? "border-[#C4923A] bg-[#C4923A]/10 shadow-[0_0_20px_rgba(196,146,58,0.15)]"
                        : selected !== null
                        ? "border-[#1E3450]/30 bg-[#0F1E32]/50 opacity-40"
                        : "border-[#1E3450] bg-[#0F1E32] hover:border-[#C4923A]/60 hover:bg-[#162438]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${
                          selected === choice
                            ? "border-[#C4923A] text-[#C4923A] bg-[#C4923A]/20"
                            : "border-[#2A4060] text-[#4A6080]"
                        }`}
                      >
                        {choice}
                      </span>
                      <div>
                        <p className="text-[#C4923A] text-[10px] tracking-[0.3em] uppercase mb-2">
                          {path.label}
                        </p>
                        <p className="font-serif text-[#C8D8E8] text-sm leading-relaxed">
                          "{path.text}"
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {resources.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 pt-4 border-t border-[#1E3450]/40"
            >
              <p className="text-[#2A4060] text-[10px] tracking-[0.4em] uppercase mb-2">
                Your Resources ({resources.length})
              </p>
              <div className="flex flex-wrap gap-1.5">
                {resources.map((r, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#0F1E32] border border-[#1E3450] text-[#4A6080] px-2 py-1 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {!isDeclaration && (
        <div className="px-6 py-3 border-t border-[#1E3450]/30 flex justify-end">
          <button
            onClick={onQuit}
            className="text-[#2A4060] hover:text-[#4A6080] text-xs transition-colors tracking-wider"
          >
            I'm ready to quit →
          </button>
        </div>
      )}
    </div>
  );
}
