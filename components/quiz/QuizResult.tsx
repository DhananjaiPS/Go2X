'use client'

import { motion } from 'framer-motion'
import { Trophy, CheckCircle, XCircle, Zap, Flame, CalendarCheck, Target, BarChart3, ChevronRight, Award } from 'lucide-react'
import { useQuizStore } from '@/store/useQuizStore'

const levelConfig = {
  Beginner: {
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    glow: 'rgba(59, 130, 246, 0.2)',
    accent: 'bg-blue-500',
    emoji: '📘',
    message: 'Concepts are loading. Keep pushing to break the barrier!',
    tag: 'REVISE CORE'
  },
  Intermediate: {
    color: 'text-orange-500',
    border: 'border-orange-500/30',
    glow: 'rgba(255, 107, 0, 0.2)',
    accent: 'bg-orange-500',
    emoji: '⚡',
    message: "You're in the zone! Optimization is the next step.",
    tag: 'LEVEL UP'
  },
  'Interview Ready': {
    color: 'text-yellow-500',
    border: 'border-yellow-500/40',
    glow: 'rgba(234, 179, 8, 0.3)',
    accent: 'bg-yellow-500',
    emoji: '🏆',
    message: "Elite performance. The FAANG gates are opening!",
    tag: 'FAANG READY'
  },
}

const STACK_LABEL: Record<string, string> = {
  webdev: 'Web Development',
  datascience: 'Data Science',
  aiml: 'AI / ML',
}

export default function QuizResult() {
  const {
    questions = [],
    answers = [],
    score = 0,
    accuracy = 0,
    performanceLevel = 'Beginner',
    points = 0,
    streak = 0,
    currentDay = 1,
    selectedStack,
  } = useQuizStore()

  // Fallback if performanceLevel is not in config
  const cfg = levelConfig[performanceLevel as keyof typeof levelConfig] || levelConfig.Beginner
  const earned = score * 100

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-10 px-2">
      
      {/* 🌟 MAIN SCORE CARD 🌟 */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`relative rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border ${cfg.border} bg-[#0a0a0a] overflow-hidden shadow-2xl`}
        style={{ boxShadow: `0 20px 80px -20px ${cfg.glow}` }}
      >
        <div className={`absolute top-0 right-0 w-64 h-64 ${cfg.accent} opacity-[0.03] blur-[100px] rounded-full`} />
        
        {/* Top Status Bar - Responsive Flex */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 relative z-10 text-center sm:text-left">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl backdrop-blur-md w-full sm:w-auto">
            <div className="p-2 rounded-lg bg-green-500/20">
              <CalendarCheck className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Cycle Status</p>
              <p className="text-white font-bold text-sm">Day {currentDay} Secured</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-orange-500 bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20">
            <Flame className="w-4 h-4 fill-orange-500" />
            <span className="text-lg font-black">{streak} DAY STREAK</span>
          </div>
        </div>

        {/* 🌟 CENTRAL ACCURACY ORB 🌟 */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-0 border-2 border-dashed ${cfg.border} rounded-full opacity-30`} 
            />
            <div className="text-center z-10">
              <span className="block text-4xl mb-1">{cfg.emoji}</span>
              <h1 className="text-5xl font-black text-white">{accuracy}%</h1>
              <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${cfg.color}`}>Accuracy</p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
          {[
            { label: 'Correct', val: `${score}/${questions.length}`, icon: Target, color: 'text-emerald-400' },
            { label: 'Earned', val: `+${earned} XP`, icon: Zap, color: 'text-orange-500' },
            { label: 'Level', val: performanceLevel, icon: Award, color: cfg.color }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4">
              <div className={`p-2.5 rounded-xl bg-white/5 ${stat.color} border border-white/10`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</p>
                <p className="text-base font-black text-white">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🌟 REVIEW SECTION 🌟 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] p-6 md:p-8 border border-white/10 bg-[#0a0a0a]"
      >
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-5 h-5 text-orange-500" />
          <h4 className="font-bold text-xl text-white tracking-tight">Debriefing Report</h4>
        </div>

        <div className="grid gap-3">
          {questions.map((q, i) => {
            const userAns = answers[i]
            const isCorrect = userAns === q.correct
            return (
              <div 
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl border transition-all
                  ${isCorrect ? 'bg-green-500/5 border-green-500/10' : 'bg-red-500/5 border-red-500/10'}
                `}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                  ${isCorrect ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}
                `}>
                  {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-200 leading-snug">{q.question}</p>
                  {!isCorrect && (
                    <p className="text-xs font-bold text-green-500 mt-1">
                      Correct: {q.options[q.correct]}
                    </p>
                  )}
                </div>

                <div className={`text-right text-xs font-black ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                  {isCorrect ? '+100 XP' : '0 XP'}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Action Button */}
      <button 
        onClick={() => window.location.hash = '#courses'}
        className="w-full py-5 rounded-[2rem] bg-orange-500 text-black font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-orange-500/20"
      >
        Unlock Next Module
      </button>
    </div>
  )
}