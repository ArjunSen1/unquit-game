"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GamePhase, GameState, PathChoice } from "@/lib/types";
import { LEVELS, INITIAL_RESOURCES } from "@/lib/game-data";
import { IntroScreen } from "@/components/intro-screen";
import { LevelScreen } from "@/components/level-screen";
import { TransitionScreen } from "@/components/transition-screen";
import { QuitCheck } from "@/components/quit-check";
import { EndingScreen } from "@/components/ending-screen";

const initialState: GameState = {
  phase: "intro",
  currentLevelIndex: 0,
  chosenPaths: [],
  lastChosenPath: null,
  lastUpdate: "",
  lastResource: null,
  declaration: "",
};

export default function UnquitGame() {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const startGame = useCallback(() => {
    setGameState((prev) => ({ ...prev, phase: "level" }));
  }, []);

  const choosePath = useCallback(
    (choice: PathChoice) => {
      const level = LEVELS[gameState.currentLevelIndex];
      const path = choice === "A" ? level.pathA : level.pathB;
      const isLastLevel = gameState.currentLevelIndex === LEVELS.length - 1;

      setGameState((prev) => ({
        ...prev,
        phase: isLastLevel ? "ending" : "transition",
        chosenPaths: [...prev.chosenPaths, choice],
        lastChosenPath: choice,
        lastUpdate: path.update,
        lastResource: path.resource || null,
        declaration: isLastLevel ? path.text : prev.declaration,
      }));
    },
    [gameState.currentLevelIndex]
  );

  const continueFromTransition = useCallback(() => {
    const nextIndex = gameState.currentLevelIndex + 1;
    setGameState((prev) => ({
      ...prev,
      phase: "level",
      currentLevelIndex: nextIndex,
    }));
  }, [gameState.currentLevelIndex]);

  const initiateQuit = useCallback(() => {
    setGameState((prev) => ({ ...prev, phase: "quit-check" }));
  }, []);

  const continueFromQuit = useCallback(() => {
    setGameState((prev) => ({ ...prev, phase: "level" }));
  }, []);

  const endGame = useCallback(() => {
    setGameState((prev) => ({ ...prev, phase: "quit-ending" }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState(initialState);
  }, []);

  const resources = [
    ...INITIAL_RESOURCES,
    ...gameState.chosenPaths
      .map((choice, i) => {
        const level = LEVELS[i];
        if (!level) return undefined;
        return choice === "A" ? level.pathA.resource : level.pathB.resource;
      })
      .filter((r): r is string => Boolean(r)),
  ];

  const currentLevel = LEVELS[gameState.currentLevelIndex];

  return (
    <div className="min-h-screen bg-[#080E14]">
      <AnimatePresence mode="wait">
        {gameState.phase === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <IntroScreen onStart={startGame} />
          </motion.div>
        )}

        {gameState.phase === "level" && currentLevel && (
          <motion.div
            key={`level-${gameState.currentLevelIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LevelScreen
              level={currentLevel}
              levelIndex={gameState.currentLevelIndex}
              totalLevels={LEVELS.length}
              resources={resources}
              onChoosePath={choosePath}
              onQuit={initiateQuit}
            />
          </motion.div>
        )}

        {gameState.phase === "transition" && (
          <motion.div
            key={`transition-${gameState.currentLevelIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TransitionScreen
              update={gameState.lastUpdate}
              resource={gameState.lastResource}
              levelIndex={gameState.currentLevelIndex}
              totalLevels={LEVELS.length}
              onContinue={continueFromTransition}
            />
          </motion.div>
        )}

        {gameState.phase === "quit-check" && (
          <motion.div
            key="quit-check"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <QuitCheck onContinue={continueFromQuit} onEnd={endGame} />
          </motion.div>
        )}

        {gameState.phase === "ending" && (
          <motion.div
            key="ending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EndingScreen
              chosenPaths={gameState.chosenPaths}
              declaration={gameState.declaration}
              isQuit={false}
              onReset={resetGame}
            />
          </motion.div>
        )}

        {gameState.phase === "quit-ending" && (
          <motion.div
            key="quit-ending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EndingScreen
              chosenPaths={gameState.chosenPaths}
              declaration=""
              isQuit={true}
              onReset={resetGame}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
