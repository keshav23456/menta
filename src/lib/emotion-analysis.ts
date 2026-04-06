export type Emotion = 'happy' | 'sad' | 'anxious' | 'calm' | 'excited' | 'tired' | 'stressed' | 'neutral' | 'angry' | 'frustrated' | 'grateful' | 'hopeful' | 'lonely' | 'overwhelmed'

export interface EmotionAnalysisResult {
  emotion: Emotion
  confidence: number
  insight: string
}

const emotionKeywords: Record<Emotion, string[]> = {
  happy: ['happy', 'joy', 'joyful', 'great', 'wonderful', 'amazing', 'fantastic', 'excellent', 'good', 'glad', 'cheerful', 'pleased', 'content', 'delighted', 'elated', 'blissful'],
  sad: ['sad', 'down', 'depressed', 'unhappy', 'miserable', 'gloomy', 'melancholy', 'sorrowful', 'blue', 'crying', 'tears', 'heartbroken', 'grief', 'devastated'],
  anxious: ['anxious', 'worried', 'nervous', 'tense', 'uneasy', 'restless', 'panicked', 'fear', 'scared', 'dread', 'apprehensive', 'on edge'],
  calm: ['calm', 'peaceful', 'relaxed', 'serene', 'tranquil', 'quiet', 'still', 'composed', 'centered', 'balanced', 'at ease', 'grounded'],
  excited: ['excited', 'thrilled', 'enthusiastic', 'energized', 'eager', 'pumped', 'hyped', 'animated', 'exhilarated', 'stoked', 'looking forward'],
  tired: ['tired', 'exhausted', 'fatigued', 'weary', 'drained', 'sleepy', 'worn out', 'burned out', 'sluggish', 'lethargic', 'low energy'],
  stressed: ['stressed', 'pressure', 'strain', 'frazzled', 'overworked', 'deadline', 'swamped', 'too much', 'no time', 'behind'],
  neutral: ['okay', 'fine', 'alright', 'normal', 'average', 'regular', 'typical', 'ordinary', 'nothing special', 'so so'],
  angry: ['angry', 'anger', 'furious', 'rage', 'mad', 'irritated', 'irate', 'livid', 'outraged', 'seething', 'infuriated', 'hate', 'resent'],
  frustrated: ['frustrated', 'frustrating', 'annoyed', 'annoying', 'irritated', 'fed up', 'stuck', 'blocked', 'not working', 'pointless', 'useless'],
  grateful: ['grateful', 'thankful', 'appreciate', 'blessed', 'fortunate', 'gratitude', 'thank you', 'lucky', 'appreciative'],
  hopeful: ['hopeful', 'hope', 'optimistic', 'looking up', 'better days', 'positive', 'improving', 'light at the end', 'things will', 'forward'],
  lonely: ['lonely', 'alone', 'isolated', 'disconnected', 'left out', 'no one', 'by myself', 'nobody', 'miss', 'missing people'],
  overwhelmed: ['overwhelmed', 'too much', 'cannot cope', 'drowning', 'swamped', 'buried', 'falling apart', 'breaking point', 'out of control', 'chaos'],
}

const emotionInsights: Record<Emotion, string[]> = {
  happy: [
    'Your positive energy is shining through — hold onto what made today feel good.',
    'This joy is worth savoring. Note what contributed to it so you can recreate it.',
    'Happiness like this is a resource. Letting it fully land builds emotional resilience.',
    'Something is clearly working for you right now. Trust that and keep going.'
  ],
  sad: [
    'Sadness asks to be felt, not fixed. Being honest with yourself about it takes courage.',
    'You don\'t have to rush through this. Give yourself permission to sit with it gently.',
    'These feelings are real and valid — and they will shift. You\'re not stuck here.',
    'Consider reaching out to someone you trust. You don\'t have to carry this alone.'
  ],
  anxious: [
    'Your nervous system is in alert mode. Try a slow exhale — twice as long as the inhale.',
    'Anxiety often lives in the gap between now and "what if." Come back to right now.',
    'Name one thing you can control today and focus only on that. Small steps work.',
    'Most feared outcomes don\'t happen. Your brain is protecting you — you can thank it and move on.'
  ],
  calm: [
    'This stillness is a skill, not luck. Notice what helped you get here.',
    'Calm is your nervous system saying "you\'re safe." Let that settle in.',
    'A grounded state like this is the best time to reflect or make clear decisions.',
    'This peace is yours to return to. The more you notice it, the easier it becomes.'
  ],
  excited: [
    'This energy is a gift — use it intentionally toward something that matters to you.',
    'Excitement and anxiety live in the same part of the brain. Channel it purposefully.',
    'Ride this wave, but anchor it with one concrete action so the momentum carries forward.',
    'High energy is a window. What\'s one meaningful thing you can move on right now?'
  ],
  tired: [
    'Your body isn\'t failing you — it\'s communicating. Rest is not a reward, it\'s a requirement.',
    'Fatigue this deep often has layers. Is it physical, emotional, or both?',
    'Pushing through exhaustion costs more than it saves. Even 20 minutes of rest shifts everything.',
    'Ask yourself: what has been quietly draining you that you haven\'t acknowledged yet?'
  ],
  stressed: [
    'Stress peaks when demands outpace resources. What\'s one thing you can set down right now?',
    'You\'re carrying more than you let on. It\'s okay to name it out loud.',
    'Try this: write down everything stressing you. Seeing it outside your head reduces its weight.',
    'Your best thinking doesn\'t happen under pressure. Give yourself five minutes to breathe first.'
  ],
  neutral: [
    'Neutral is often underrated — it\'s a steady foundation, not an empty one.',
    'A flat day isn\'t a bad day. Sometimes equilibrium is exactly what the body needs.',
    'This is a good moment to reflect without the noise of strong emotion coloring things.',
    'Not every moment needs to be remarkable. Being okay is genuinely okay.'
  ],
  angry: [
    'Anger almost always has something underneath it — hurt, injustice, or unmet need. What is it here?',
    'Your anger is pointing at something real. Before reacting, ask what it\'s protecting.',
    'Physical movement helps anger dissipate. A walk, run, or even shaking your hands can help.',
    'You\'re allowed to be angry. Just don\'t let it make decisions for you right now.'
  ],
  frustrated: [
    'Frustration means you care and things aren\'t working the way you expected. Both are okay.',
    'Step back for a moment — sometimes a short break is the only thing that breaks the block.',
    'What specifically is the obstacle? Naming it precisely often reveals a path around it.',
    'Frustration is energy that hasn\'t found its target yet. Redirect it intentionally.'
  ],
  grateful: [
    'Gratitude rewires how you see things — you\'re building something valuable right now.',
    'Hold this feeling a little longer than feels natural. That\'s how it deepens.',
    'Something good reached you today. Let yourself actually receive it.',
    'Noticing what\'s working is just as important as fixing what isn\'t. You\'re doing that.'
  ],
  hopeful: [
    'Hope is an active stance — you\'re choosing to believe things can improve. That matters.',
    'This optimism is grounded in something. Trust what you\'re sensing about the way forward.',
    'Hold this feeling as a compass. Even on harder days, you can return to what you see from here.',
    'Something has shifted for you. Let that momentum guide your next small step.'
  ],
  lonely: [
    'Loneliness is one of the most quietly painful feelings. Naming it is the first brave act.',
    'Connection doesn\'t have to be deep to help. Even a brief, real exchange with someone can ease this.',
    'Your need for connection is healthy and human — it\'s okay to reach toward it.',
    'Consider one low-pressure way to be around people today, even briefly. Proximity helps.'
  ],
  overwhelmed: [
    'When everything feels urgent, nothing actually is. Pick just one thing and ignore the rest for now.',
    'Overwhelm is your brain trying to process too many open loops at once. Write them down.',
    'You don\'t have to solve everything today. What is the one next right thing?',
    'Take a breath. Then another. The situation hasn\'t changed, but your access to it has.'
  ],
}

export function getInsightForEmotion(emotion: Emotion): string {
  const insights = emotionInsights[emotion]
  return insights[Math.floor(Math.random() * insights.length)]
}

export function analyzeEmotion(text: string): EmotionAnalysisResult {
  const lowerText = text.toLowerCase()
  const emotionScores: Record<Emotion, number> = {
    happy: 0, sad: 0, anxious: 0, calm: 0, excited: 0,
    tired: 0, stressed: 0, neutral: 0,
    angry: 0, frustrated: 0, grateful: 0, hopeful: 0, lonely: 0, overwhelmed: 0,
  }

  // Count keyword matches for each emotion
  Object.entries(emotionKeywords).forEach(([emotion, keywords]) => {
    keywords.forEach(keyword => {
      if (lowerText.includes(keyword)) {
        emotionScores[emotion as Emotion] += 1
      }
    })
  })

  // Find the emotion with highest score
  let dominantEmotion: Emotion = 'neutral'
  let highestScore = 0

  Object.entries(emotionScores).forEach(([emotion, score]) => {
    if (score > highestScore) {
      highestScore = score
      dominantEmotion = emotion as Emotion
    }
  })

  // Calculate confidence based on keyword matches (more matches = higher confidence)
  const baseConfidence = highestScore > 0 ? 60 : 40
  const confidenceBoost = Math.min(highestScore * 8, 35)
  const randomVariation = Math.floor(Math.random() * 10) - 5
  const confidence = Math.max(45, Math.min(95, baseConfidence + confidenceBoost + randomVariation))

  // Select a random insight for the detected emotion
  const insights = emotionInsights[dominantEmotion]
  const insight = insights[Math.floor(Math.random() * insights.length)]

  return {
    emotion: dominantEmotion,
    confidence,
    insight
  }
}

export function getChatbotResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase()

  // Helper — check if a word appears WITHOUT a negation before it
  const matchesPositive = (pattern: RegExp) => {
    const m = lower.match(pattern)
    if (!m || m.index === undefined) return false
    const before = lower.slice(Math.max(0, m.index - 10), m.index)
    return !/\b(not|no|never|don't|dont|didn't|didn't|hardly|barely)\b/.test(before)
  }

  // Betrayal / hurt by someone
  if (/betray|betrayed|backstab|stab.{0,5}back|let me down|let me down|two.?face|fake friend/.test(lower)) {
    const r = [
      "That kind of betrayal from a friend cuts deep — it's not just about what happened, it's about losing someone you trusted. What did they do?",
      "Being betrayed by a friend is one of the most disorienting kinds of pain because you didn't see it coming. Do you want to talk through what happened?",
      "That's a real gut-punch. Feeling hurt and angry at the same time after something like that makes total sense. What's weighing on you most right now?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Anger
  if (/\b(angry|anger|furious|livid|rage|mad at|pissed|hate)\b/.test(lower)) {
    const r = [
      "That anger is telling you something important — something crossed a line for you. What happened?",
      "When you're this angry it usually means something matters a lot to you and it wasn't respected. What's going on?",
      "That sounds like real, justified anger. Before we figure out what to do with it — what exactly set this off?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Sad / grief
  if (/\b(sad|crying|cried|tears|heartbroken|depressed|grief|devastated|broken|miserable|lost)\b/.test(lower)) {
    const r = [
      "Something is clearly hurting you right now. You don't have to explain it perfectly — just tell me what's going on.",
      "That sadness sounds real and heavy. What happened, or has this been building for a while?",
      "I hear that you're in a low place. What's been weighing on you most?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Lonely / disconnected
  if (/\b(lonely|alone|isolated|no one|nobody|disconnected|invisible|left out|miss)\b/.test(lower)) {
    const r = [
      "Loneliness can feel incredibly isolating, even when you're surrounded by people. What's making you feel this way?",
      "That feeling of being unseen or disconnected is really painful. Is this something that came on recently or has it been there a while?",
      "You're not alone in feeling alone — but that doesn't make it hurt less. What's going on?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Anxious / worried
  if (/\b(anxious|anxiety|worried|worry|nervous|panic|scared|fear|dread|overwhelmed|on edge)\b/.test(lower)) {
    const r = [
      "Your nervous system is working overtime right now. What's the thing that keeps pulling at you most?",
      "Anxiety tends to make everything feel urgent at once. What's the actual thing underneath all of it?",
      "When you say you're worried — is there one specific thing, or does it feel like a general heaviness?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Frustrated / stuck
  if (/\b(frustrated|frustrating|annoyed|annoying|stuck|not working|fed up|pointless|useless|ugh)\b/.test(lower)) {
    const r = [
      "Frustration usually means you care and something is in the way. What specifically isn't working?",
      "That sounds genuinely aggravating. What have you already tried?",
      "Being stuck is exhausting. What does 'stuck' look like for you right now?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Tired / exhausted
  if (/\b(tired|exhausted|drained|fatigued|sleepy|worn out|burned out|no energy|low energy)\b/.test(lower)) {
    const r = [
      "That kind of tiredness — is it physical, emotional, or both? Sometimes it's hard to tell.",
      "Exhaustion has a way of making everything feel harder. What's been draining you most lately?",
      "Your body and mind are signaling something. Has this been building for a while?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Grateful
  if (/\b(grateful|thankful|appreciate|blessed|fortunate|gratitude)\b/.test(lower)) {
    const r = [
      "That's worth sitting with for a moment. What specifically are you grateful for?",
      "Noticing good things when life is complicated takes real awareness. What's bringing that feeling up?",
      "Gratitude like this is grounding. What happened that made you feel this way?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Genuinely positive (with negation guard)
  if (matchesPositive(/\b(happy|great|wonderful|amazing|fantastic|joy|excited|love it|loving)\b/)) {
    const r = [
      "Something good is happening for you. What is it?",
      "That's a real shift — what's contributing to this feeling?",
      "Glad to hear that. What's going well right now?"
    ]
    return r[Math.floor(Math.random() * r.length)]
  }

  // Default — open, never assumptive
  const defaults = [
    "Tell me more — what's actually going on for you right now?",
    "I'm here. What's on your mind?",
    "Something brought you here today. What's been weighing on you?",
    "Say more — I want to understand what you're experiencing.",
  ]
  return defaults[Math.floor(Math.random() * defaults.length)]
}

export function generateDailyFactorInsight(
  sleepHours: number,
  caffeineIntake: number,
  exercise: boolean
): string {
  const insights: string[] = []

  if (sleepHours < 6) {
    insights.push('Low sleep (under 6 hours) is strongly correlated with increased anxiety and stress. Prioritizing 7-9 hours may improve your mood significantly.')
  } else if (sleepHours >= 8) {
    insights.push('Great sleep! Getting 8+ hours supports emotional regulation and resilience.')
  }

  if (caffeineIntake > 3) {
    insights.push('High caffeine intake (4+ servings) can amplify anxiety and disrupt sleep quality. Consider moderating consumption after 2 PM.')
  } else if (caffeineIntake === 0) {
    insights.push('Zero caffeine can support better sleep and reduced anxiety for many people.')
  }

  if (exercise) {
    insights.push('Exercise is one of the most effective mood boosters! It reduces stress hormones and releases endorphins.')
  } else {
    insights.push('Regular physical activity, even a 10-minute walk, can significantly improve mood and reduce stress.')
  }

  // Combination insights
  if (sleepHours < 6 && caffeineIntake > 2) {
    insights.push('The combination of low sleep and high caffeine can create a challenging cycle. Focus on sleep first.')
  }

  if (sleepHours >= 7 && exercise && caffeineIntake <= 2) {
    insights.push('Your lifestyle factors are well-balanced! This combination strongly supports emotional wellbeing.')
  }

  return insights.length > 0
    ? insights[Math.floor(Math.random() * insights.length)]
    : 'Your daily habits play a significant role in your emotional health. Keep tracking to identify patterns!'
}
