import { GameLevel } from "./types";

export const LEVELS: GameLevel[] = [
  {
    id: 1,
    stage: "STAGE 1",
    stageName: "THE MOMENT",
    daysRemaining: 60,
    situation:
      "You have been in this parking garage for 47 minutes. You have not called Diego. You are composing, in your mind, the words that say it is over. The sun is going down behind the concrete pillars. The appeal is denied on a technicality. Four years of work. One document.",
    guideIntro: "The Guide is with you. Not to fix this. To help you see clearly.",
    question: "What is happening right now that makes quitting feel like the right choice?",
    pathA: {
      label: "The clean logic",
      text: "I gave this everything I had. The system failed him. That is not my fault.",
      update:
        "A momentary release — the clean logic of it. Then your phone buzzes. A text from Marcus: 'Judge Whitfield's clerk called. She wants to know if you're considering any emergency humanitarian motions.' You hadn't thought of that. A door opens a crack.",
      resource: "Procedural opening: emergency humanitarian motion",
    },
    pathB: {
      label: "The empty feeling",
      text: "I don't have anything left. I've tried everything. It's time to let go.",
      update:
        "You dial your office to step down. Marcus answers. Before you can speak, he says: 'Diego's wife called. She said Lucia has been asking every day if Ms. Elena is still fighting.' You hold the phone. You haven't spoken yet.",
      resource: "Lucia's question: are you still fighting?",
    },
  },
  {
    id: 2,
    stage: "STAGE 2",
    stageName: "THE WEIGHT",
    daysRemaining: 60,
    situation:
      "You're still in the car. Four years of this case. But something specific is pressing on you that goes beyond Diego's file — something you've been carrying longer than this case.",
    question: "What are you carrying that has nothing to do with this case?",
    pathA: {
      label: "Accumulated loss",
      text: "Nineteen years of cases I couldn't fix. Diego isn't the first. He won't be the last.",
      update:
        "You realize you've been grieving every case through this one. The weight isn't Diego's case — it's accumulated loss. That distinction matters. Diego's case is not yet lost. You write one word on the back of a gas receipt: Separate.",
      resource: "Insight: accumulated grief ≠ today's evidence",
    },
    pathB: {
      label: "The deeper fear",
      text: "I'm carrying the fear that I'm not actually good enough. That I never was.",
      update:
        "The truest thing you have said all day. It lands differently — not heavier. Lighter. Something hidden just became visible. Marcus texts again: 'The clerk is still waiting.' The fear is real. The clerk is also real.",
      resource: "The real weight is named — and separable",
    },
  },
  {
    id: 3,
    stage: "STAGE 3",
    stageName: "THE STORY",
    daysRemaining: 60,
    situation:
      "You've been here before. Not this garage — but this feeling. The story you tell yourself when things go wrong has a familiar shape. You've been telling it for days.",
    question:
      "What story are you telling yourself right now — and would you tell it to a colleague in your exact position?",
    pathA: {
      label: "The system is broken",
      text: "The system is broken and I can't fix it.",
      update:
        "That story is partly true. But you know attorneys who told themselves the same story and stopped filing — and attorneys who found emergency pathways no one else noticed. You open your laptop. You search: emergency humanitarian motion + USCIS + 60-day deportation order. Three results you haven't read.",
      resource: "Three unread pathways in the search results",
    },
    pathB: {
      label: "I failed him",
      text: "I failed Diego. A better attorney would have won this.",
      update:
        "Your phone rings. Judge Whitfield's clerk. She never calls attorneys directly. You listen to the voicemail: 'Judge Whitfield has asked me to inquire whether counsel has exhausted all available avenues — specifically humanitarian re-parole. She believes the record supports it.' A sitting federal judge just told you there is one more door.",
      resource: "Judge Whitfield's implicit endorsement of re-parole",
    },
  },
  {
    id: 4,
    stage: "STAGE 4",
    stageName: "THE UNSAID",
    daysRemaining: 60,
    situation:
      "There is something you haven't said to anyone. Not to Marisol. Not to Marcus. Not to yourself, clearly. It has been sitting in your chest since Monday when the denial came.",
    question: "What is the thing you haven't said out loud about this case?",
    pathA: {
      label: "Fear that Diego will give up",
      text: "I haven't admitted that I'm scared Diego will give up before I do.",
      update:
        "You call Diego — not with news, just to hear his voice. He answers on the first ring. He says, in the calm voice of a man who has been practicing for this: 'Ms. Rodriguez. I have been waiting.' Not angry. Not desperate. Waiting. He has not given up. He was waiting for you to call.",
      resource: "Diego has been holding the door open for you",
    },
    pathB: {
      label: "The personal stake",
      text: "I haven't admitted that I stayed on this case partly because I needed to win it for myself.",
      update:
        "The most honest thing you've said in four years. Also not disqualifying. Wanting to win for yourself and wanting to win for Diego are not opposites — they've been driving the same car. The question is whether you can keep driving even when the personal win is no longer guaranteed.",
      resource: "Personal investment named — and redirected",
    },
  },
  {
    id: 5,
    stage: "STAGE 5",
    stageName: "THE MeSIGHT®",
    daysRemaining: 60,
    situation:
      "Forget the case for a moment. Think about the person who has been inside this fight for four years. Something about you is not fully visible to you right now.",
    guideIntro: "The Guide shifts the light. Away from the problem. Toward the person.",
    question:
      "When have you been in an impossible situation before — and what did you do that you didn't know you could do?",
    pathA: {
      label: "The Christmas Eve brief",
      text: "My first year. A family about to be separated on Christmas Eve. I found a provision in a 1996 statute no one had cited in twelve years. I filed at 11pm.",
      update:
        "You remember that night. Not confidence — a specific stubborn curiosity. You open Diego's file and look at the technicality that caused the denial. Really look. The administrative record contains an inconsistency that wasn't in your appeal. It may not be a door. But it is something you have not yet pulled.",
      resource: "Unexamined inconsistency in the administrative record",
    },
    pathB: {
      label: "The midnight drive",
      text: "Three years ago, a client was detained with no representation. I drove four hours that night.",
      update:
        "What you felt in that car wasn't bravery — it was clarity. The kind that appears when you stop asking whether you can do something and start asking whether it is the right thing. You know what the right thing is right now. You have known it since Monday.",
      resource: "The clarity of the midnight drive — recovered",
    },
  },
  {
    id: 6,
    stage: "STAGE 6",
    stageName: "THE UNSEEN ASSET",
    daysRemaining: 60,
    situation:
      "There are resources in this situation you haven't fully activated. Not because you forgot them — because you couldn't see them clearly when you were carrying the weight alone.",
    question: "Who and what is already on your side that you haven't called on yet?",
    pathA: {
      label: "The network around you",
      text: "Judge Whitfield's opening. The immigration coalition I've referred cases to but never asked for help. And Marcus.",
      update:
        "You call Carmen Vega at the coalition. Second ring. She says: 'We've been watching Diego's case for two years. We have a congressional liaison waiting for a case with exactly this profile. Can we meet tomorrow morning?' Three assets you hadn't fully activated. None of them new. All of them ready.",
      resource: "Congressional liaison + coalition support activated",
    },
    pathB: {
      label: "The resources within",
      text: "Marisol. The drawing in my desk. And nineteen years of knowing how this system actually works versus how it says it works.",
      update:
        "You call Marisol. Second ring, as always. She says: 'Has Diego been able to fight for himself?' Diego is a construction foreman with connections across Houston's building industry. You've never asked who. You call him next.",
      resource: "Diego's own network — never yet activated",
    },
  },
  {
    id: 7,
    stage: "SHIFT",
    stageName: "THE UNEXPECTED ARRIVAL",
    daysRemaining: 46,
    isShift: true,
    situation:
      "You are back at your office. 6:47pm. Your desk is covered in files. Your phone rings. It is Diego Herrera. Before you can speak, he says: 'My daughter Lucia asks me to tell you something. She says to tell you that you have been the bravest person in our story. She says to say thank you.'",
    guideIntro: "The story shifts. Something arrives that you did not send for.",
    question: "What do you say back?",
    pathA: {
      label: "We are not finished yet",
      text: "Tell Lucia we are not finished yet.",
      update:
        "Diego exhales. Then: 'I have been thinking. My foreman supervisor — he worked with three congressmen on the stadium project. He said he will write a letter. He has been waiting for me to ask him.' Diego had an asset you never knew about. He was protecting you from knowing, in case it wasn't enough.",
      resource: "Construction supervisor's congressional letter",
    },
    pathB: {
      label: "Honest about where we stand",
      text: "I need to be honest with you about where we stand.",
      update:
        "You tell Diego about humanitarian re-parole — narrow, brutal timeline. He listens. Then: 'Ms. Rodriguez. My family did not come this far to stop three steps from the door.' He is not asking you to fight. He is telling you he already is. He just needed to know you were still in the car.",
      resource: "Diego: active co-fighter, not passive client",
    },
  },
  {
    id: 8,
    stage: "STAGE 7",
    stageName: "THE FUTURE SELF",
    daysRemaining: 43,
    situation:
      "It is late. You close the files and do something you rarely do: you imagine one year from now. Not a fantasy. A question about what is entirely possible if you do not stop.",
    question: "One year has passed. You did not stop. What happened — and what almost made you stop?",
    pathA: {
      label: "Diego stayed",
      text: "Diego stayed. His daughters graduated. I almost stopped in a parking garage on a Tuesday.",
      update:
        "That image — Diego at a graduation — is suddenly more real than your exhaustion. You write it down. Not as a goal. As a fact that hasn't happened yet but is entirely possible. You pin it above your monitor. Then you open a blank document: Emergency Humanitarian Re-Parole — Herrera — DRAFT 1.",
      resource: "Draft 1 of the emergency motion — started",
    },
    pathB: {
      label: "A different attorney",
      text: "I don't know if Diego stayed. But I became a different kind of attorney — one who fights differently.",
      update:
        "The goal was never just Diego. It's what fighting for Diego is teaching you about the system, about hidden pathways, about finding what's possible inside what appears impossible. You write one line: What I learn from fighting for Diego, I will use for every family after him.",
      resource: "Purpose expanded beyond a single case",
    },
  },
  {
    id: 9,
    stage: "EMERGENCY",
    stageName: "THE EMERGENCY",
    daysRemaining: 21,
    isEmergency: true,
    situation:
      "The next morning. Marcus bursts in. 'ICE contacted Diego's employer. They're accelerating the timeline. It's no longer 60 days. It may be 21.' Three weeks. You have an incomplete motion. An unconfirmed congressional contact. A coalition meeting tomorrow. A drawing of a bird.",
    guideIntro: "The situation changes. The weight increases. The window narrows.",
    question:
      "What is the one thing — just one thing — that if done in the next four hours, keeps this alive?",
    pathA: {
      label: "File the incomplete motion now",
      text: "File the protective emergency motion today. Incomplete is better than nothing. It buys time.",
      update:
        "You file at 2:14pm. Not your best brief — it contains a footnote that says essentially 'Additional documentation to follow.' The clerk stamps it received. The accelerated timeline is paused pending review. You just bought 10 days with an imperfect document. Perfect was the enemy of possible.",
      resource: "10-day review window — bought with an imperfect filing",
    },
    pathB: {
      label: "Call Carmen Vega now",
      text: "Call Carmen Vega. Skip the meeting. Get the congressional contact today.",
      update:
        "Carmen makes two calls while you wait. Priya, the congressional liaison, calls you twelve minutes later: 'We can get a congressional inquiry filed by end of day. It changes the political pressure on the case.' The inquiry is filed at 4:40pm.",
      resource: "Congressional inquiry filed — political pressure shifted",
    },
  },
  {
    id: 10,
    stage: "STAGE 8",
    stageName: "THE NEXT STEP",
    daysRemaining: 10,
    situation:
      "It is 11pm. You are alone. The motion is filed. The inquiry exists. You cannot do everything tonight. But you can do one specific, right thing.",
    question: "What is the smallest action that, if taken right now, future-you will be grateful for?",
    pathA: {
      label: "Write the three facts",
      text: "Write the three strongest facts in Diego's case and build the next section from there.",
      update:
        "Three facts. 22 years of continuous residence. Three US-citizen daughters, one in 6th grade. Zero criminal record, perfect tax compliance. You look at what you wrote. It does not look like a technicality. It looks like a family. You build the next section of the motion around those three facts.",
      resource: "The three-fact spine of the motion",
    },
    pathB: {
      label: "Send Diego a voice message",
      text: "Send Diego a voice message. Not an update — just acknowledgment.",
      update:
        "You record 40 seconds. You don't promise anything. You say: 'Diego — I want you to know I'm still here. We're still fighting. Tell Lucia the bird is still on my desk.' You send it at 11:17pm. Diego replies at 11:19pm: 'Gracias.' You sleep for the first time in four days.",
      resource: "The client knows. The fight is shared.",
    },
  },
  {
    id: 11,
    stage: "STAGE 9",
    stageName: "THE UNQUIT DECISION",
    daysRemaining: 3,
    situation:
      "Day 7 of the 10-day window. The motion is under review. The congressional inquiry was acknowledged but not yet acted on. Marcus tells you: 40% chance the review goes your way. 60% against. You know the numbers.",
    guideIntro: "The Guide asks the only question that matters now.",
    question: "Are you ready to quit?",
    pathA: {
      label: "No.",
      text: "No. I prepare for both outcomes. If it goes our way, we consolidate. If it doesn't, I've already identified three more pathways.",
      update:
        "You are no longer reacting to the case. You are navigating it. That is a different posture. The review board requests additional documentation — a good sign. You have the documentation. You file within the hour.",
      resource: "Navigator, not reactor — the posture has changed",
    },
    pathB: {
      label: "I don't know.",
      text: "I don't know. But I know what quitting would cost.",
      update:
        "You look at the drawing of the bird. Quitting would cost Diego's case. Lucia's next school year. The congressional inquiry that has no one to follow up. Marcus, who came into immigration law because of you. Everything remains unresolved. You pick up the phone.",
      resource: "The cost of quitting — fully seen and named",
    },
  },
  {
    id: 12,
    stage: "STAGE 10",
    stageName: "THE UNQUIT DECLARATION",
    daysRemaining: 0,
    situation:
      "The review board rules. The emergency motion is granted. Provisional stay of removal, pending a full humanitarian review. Diego Herrera does not have to leave on Friday. His daughters do not have to say goodbye. You are sitting at your desk. It is 3:50pm. Marcus is outside your door. You needed a moment.",
    guideIntro: "The Guide asks one final question. Not about the case. About you.",
    question: "Today I choose not to quit because",
    pathA: {
      label: "The specific reason",
      text: "a sixth grader in San Antonio draws birds when she is nervous, and she deserves to draw them here, in this country, for as many years as she wants.",
      update:
        "Diego stays. The case continues. The outcome is not certain. But the fight belongs to you again — chosen, not endured. That is the difference. That is everything.",
      resource: "The specific reason — the only kind that holds",
    },
    pathB: {
      label: "The earned identity",
      text: "nineteen years of this work has made me exactly the person this case requires. I am not too tired to fight. I am too experienced to stop.",
      update:
        "The motion holds. The review is scheduled. No guarantee. But you have stopped waiting for certainty before you act. That is new. That is the only change that mattered.",
      resource: "Identity recovered — not just a win, a self",
    },
  },
];

export const INITIAL_RESOURCES = [
  "19 years of immigration expertise",
  "Associate: Marcus",
  "Sister: Marisol (always picks up)",
  "Diego's case file",
  "Lucia's drawing of a bird",
];

export const STAGE_NAMES = [
  "THE MOMENT",
  "THE WEIGHT",
  "THE STORY",
  "THE UNSAID",
  "THE MeSIGHT®",
  "UNSEEN ASSET",
  "UNEXPECTED ARRIVAL",
  "FUTURE SELF",
  "THE EMERGENCY",
  "NEXT STEP",
  "THE DECISION",
  "THE DECLARATION",
];
