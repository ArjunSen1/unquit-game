export type GamePhase =
  | "intro"
  | "level"
  | "transition"
  | "quit-check"
  | "declaration"
  | "ending"
  | "quit-ending";

export type PathChoice = "A" | "B";

export interface PathOption {
  label: string;
  text: string;
  update: string;
  resource?: string;
}

export interface GameLevel {
  id: number;
  stage: string;
  stageName: string;
  daysRemaining: number;
  isEmergency?: boolean;
  isShift?: boolean;
  situation: string;
  guideIntro?: string;
  question: string;
  pathA: PathOption;
  pathB: PathOption;
}

export interface GameState {
  phase: GamePhase;
  currentLevelIndex: number;
  chosenPaths: PathChoice[];
  lastChosenPath: PathChoice | null;
  lastUpdate: string;
  lastResource: string | null;
  declaration: string;
}
