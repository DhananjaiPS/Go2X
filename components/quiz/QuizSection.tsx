'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Target } from 'lucide-react'
import { useQuizStore } from '@/store/useQuizStore'
import QuizIdle from './QuizIdle'
import QuizStackSelect from './QuizStackSelect'
import QuizLoading from './QuizLoading'
import QuizActive from './QuizActive'
import QuizResult from './QuizResult'

// Premium Cinematic Animation Variants
const phaseVariants = {
  initial: { opacity: 0, scale: 0.95, filter: 'blur(10px)', y: 20 },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: { opacity: 0, scale: 1.05, filter: 'blur(10px)', y: -20, transition: { duration: 0.3 } }
}

export default function QuizSection() {
  const { phase, timerActive, tickTimer } = useQuizStore()

  useEffect(() => {
    if (!timerActive) return
    const interval = setInterval(tickTimer, 1000)
    return () => clearInterval(interval)
  }, [timerActive, tickTimer])

  return (
    <section id="quiz" className="py-24 px-4 relative overflow-hidden bg-[#050505] min-h-screen flex flex-col justify-center">
      
      {/* 🌟 VIRTUAL SIMULATION ENVIRONMENT (BACKGROUND) 🌟 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep Core Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.08)_0%,transparent_70%)]" />
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* COMMAND CENTER HEADER (Only show if not active/loading for full immersion) */}
        <AnimatePresence>
          {(phase === 'idle' || phase === 'stack-select' || phase === 'submitted') && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 shadow-[0_0_20px_rgba(255,107,0,0.1)] backdrop-blur-md">
                <Target className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  50-Day Neural Challenge
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-4 tracking-tighter text-white uppercase italic">
                Daily <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Evaluation</span>
              </h2>
              <p className="text-gray-400 font-medium max-w-lg mx-auto">
                Select your tech stack. Answer 10 targeted queries in 10 minutes. Maintain your survival streak.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🌟 ORCHESTRATOR / VIEW CONTROLLER 🌟 */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            
            {phase === 'idle' && (
              <motion.div key="idle" variants={phaseVariants} initial="initial" animate="animate" exit="exit">
                <QuizIdle />
              </motion.div>
            )}

            {phase === 'stack-select' && (
              <motion.div key="stack-select" variants={phaseVariants} initial="initial" animate="animate" exit="exit">
                <QuizStackSelect />
              </motion.div>
            )}

            {phase === 'loading' && (
              <motion.div key="loading" variants={phaseVariants} initial="initial" animate="animate" exit="exit">
                <QuizLoading />
              </motion.div>
            )}

            {phase === 'active' && (
              <motion.div key="active" variants={phaseVariants} initial="initial" animate="animate" exit="exit">
                <QuizActive />
              </motion.div>
            )}

            {phase === 'submitted' && (
              <motion.div key="submitted" variants={phaseVariants} initial="initial" animate="animate" exit="exit">
                <QuizResult />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}