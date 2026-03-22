'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock, Send, X, CheckCircle, Zap, HelpCircle } from 'lucide-react'
import { toast } from 'sonner'
import { useQuizStore } from '@/store/useQuizStore'

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const s = (seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default function QuizActive() {
  const {
    questions,
    currentQuestion,
    answers,
    timeLeft,
    setAnswer,
    nextQuestion,
    prevQuestion,
    submitTest,
  } = useQuizStore()
  
  const [showConfirm, setShowConfirm] = useState(false)

  const q = questions[currentQuestion]
  const answered = answers[currentQuestion]
  const totalAnswered = answers.filter((a) => a !== null).length
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const isLast = currentQuestion === questions.length - 1
  const isUrgent = timeLeft <= 60

  const handleSelect = (optIdx: number) => {
    if (answered === optIdx) return
    setAnswer(currentQuestion, optIdx)
    toast.success('Response Locked', {
      icon: <Zap className="w-4 h-4 text-orange-500" />,
      style: { background: '#0a0a0a', color: '#fff', border: '1px solid #ff6b0033' }
    })
  }

  // 🌟 FIXED HANDLESUBMIT LOGIC 🌟
  const handleFinalSubmit = () => {
    setShowConfirm(false)
    submitTest() // This triggers the store submission
    toast.success('System Evaluation Complete', {
      description: 'Your responses have been transmitted successfully.',
    })
  }

  if (!q) return null

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* NEON BREATHING BORDER */}
      <div className={`absolute -inset-1 rounded-[2.5rem] blur-xl opacity-20 transition-colors duration-1000 ${isUrgent ? 'bg-red-500 animate-pulse' : 'bg-orange-500'}`} />
      
      <div className="relative glass-card rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 bg-white/[0.02] border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Assessment Phase</p>
              <h3 className="text-white font-bold tracking-tight">Question {currentQuestion + 1} <span className="text-gray-600">/ {questions.length}</span></h3>
            </div>
          </div>

          <motion.div 
            animate={isUrgent ? { scale: [1, 1.05, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1 }}
            className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl border font-mono font-black text-lg transition-all shadow-2xl
              ${isUrgent ? 'bg-red-500 text-white border-red-400' : 'bg-white/5 text-orange-500 border-white/10'}
            `}
          >
            <Clock className={`w-5 h-5 ${isUrgent ? 'animate-spin' : ''}`} />
            {formatTime(timeLeft)}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-white/5 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute h-full bg-gradient-to-r from-orange-600 to-yellow-400 shadow-[0_0_15px_rgba(255,107,0,0.5)]"
          />
        </div>

        {/* Question Area */}
        <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, rotateY: 20, x: 50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, rotateY: -20, x: -50 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="flex-1"
            >
              <div className="inline-block px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest mb-6">
                Topic: {q.topic}
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-10">
                {q.question}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((option, idx) => {
                  const isSelected = answered === idx;
                  return (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(idx)}
                      className={`relative group text-left p-6 rounded-[1.5rem] border transition-all duration-300 flex items-center gap-4 overflow-hidden
                        ${isSelected 
                          ? 'bg-orange-500 text-black border-transparent shadow-[0_0_30px_rgba(255,107,0,0.2)]' 
                          : 'bg-white/[0.02] border-white/5 text-gray-400 group-hover:border-white/20'}
                      `}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs
                        ${isSelected ? 'bg-black text-orange-500' : 'bg-white/5 text-gray-600'}
                      `}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="font-bold text-sm md:text-base leading-snug">{option}</span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-white/[0.01] border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {!isLast && (
              <button
                onClick={nextQuestion}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowConfirm(true)}
            className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-orange-500 text-black font-black uppercase tracking-wider text-sm shadow-[0_0_40px_rgba(255,107,0,0.3)]"
          >
            <Send className="w-4 h-4 fill-black" />
            Finalize Test
          </motion.button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setShowConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-[#0f0f0f] border border-orange-500/20 rounded-[2.5rem] p-10 max-w-md w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />
              <div className="w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-3xl font-display font-black text-center text-white mb-4 uppercase">Submit Data?</h3>
              <p className="text-gray-400 text-center mb-8 leading-relaxed">
                You have answered <span className="text-orange-500 font-bold">{totalAnswered} of {questions.length}</span> questions. Once transmitted, you cannot modify your responses.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 font-bold hover:text-white"
                >
                  Review
                </button>
                <button
                  onClick={handleFinalSubmit}
                  className="py-4 rounded-2xl bg-orange-500 text-white font-black uppercase shadow-[0_0_30px_rgba(255,107,0,0.3)] active:scale-95 transition-all"
                >
                  Transmit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}