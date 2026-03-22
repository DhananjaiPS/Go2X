'use client'

import { motion } from 'framer-motion'
import { 
  Clock, Target, Zap, Trophy, ChevronRight, 
  Flame, CheckCircle, CalendarDays, Rocket, 
  Sparkles, ShieldCheck
} from 'lucide-react'
import { useQuizStore } from '@/store/useQuizStore'

const features = [
  { icon: Clock, label: '10 Minutes', sub: 'Timed Sprint', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: Target, label: '10 Queries', sub: 'Targeted MCQ', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { icon: Zap, label: '1000 XP', sub: 'Max Potential', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { icon: Trophy, label: 'Instant Rank', sub: 'Live Analysis', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
]

export default function QuizIdle() {
  const { openStackSelect, currentDay, dailyCompleted, streak, completedDays } = useQuizStore()

  if (dailyCompleted) {
    return (
      <div className="relative group overflow-hidden">
        {/* Victory Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        
        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 text-center border-green-500/20 relative z-10 bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-2xl">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
            className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-8 relative"
            style={{
              background: 'linear-gradient(135deg, #22c55e, #10b981)',
              boxShadow: '0 0 50px rgba(34,197,94,0.3)',
            }}
          >
            <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] border-2 border-dashed border-green-500/30 rounded-full"
            />
          </motion.div>

          <h3 className="text-4xl font-display font-black mb-3 text-white tracking-tight uppercase italic">
            Day {currentDay} <span className="text-green-500">Secured</span>
          </h3>
          <p className="text-gray-400 mb-10 max-w-sm mx-auto font-medium">
            Data transmission complete. Your streak is protected. Access restricted until next cycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
            {[
              { icon: Flame, val: streak, label: 'Streak', col: 'text-orange-500' },
              { icon: CalendarDays, val: completedDays.length, label: 'Days Done', col: 'text-green-400' },
              { icon: Trophy, val: 50 - currentDay, label: 'Remaining', col: 'text-yellow-500' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <stat.icon className={`w-5 h-5 ${stat.col} mx-auto mb-2`} />
                <p className="text-2xl font-black text-white">{stat.val}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => useQuizStore.getState().simulateNextDay()}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all cursor-pointer group"
          >
            <span>Initiate Next Simulation</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* 🌟 AMBIENT BACKGROUND GLOW 🌟 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative glass-card rounded-[3rem] p-8 md:p-16 border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
        
        {/* Subtle Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] pointer-events-none" />

        <div className="text-center mb-12 relative z-10">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(255,107,0,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5 fill-orange-500" />
            <span>Deployment Cycle: Day {currentDay} / 50</span>
          </motion.div>
          
          <h3 className="text-4xl md:text-6xl font-display font-black mb-4 text-white tracking-tighter italic uppercase">
            Prepare for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Ignition</span>
          </h3>
          <p className="text-gray-400 font-medium max-w-lg mx-auto leading-relaxed">
            Verify your tech stack parameters. The evaluation module consists of 10 high-intensity data points.
          </p>
        </div>

        {/* 🌟 INTERACTIVE FEATURE GRID 🌟 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 relative z-10">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}
              className="flex flex-col items-center gap-3 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center shadow-inner`}>
                <f.icon className={`w-7 h-7 ${f.color}`} />
              </div>
              <div className="text-center">
                <p className="text-sm font-black text-white uppercase tracking-tight">{f.label}</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{f.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🌟 THE "IGNITION" BUTTON 🌟 */}
        <div className="flex justify-center relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
            <motion.button
              whileHover={{ scale: 1.05, letterSpacing: '0.25em' }}
              whileTap={{ scale: 0.95 }}
              onClick={openStackSelect}
              className="relative flex items-center gap-4 px-12 py-6 rounded-[2rem] bg-orange-500 text-white font-black text-xl uppercase tracking-widest transition-all duration-500 shadow-[0_0_40px_rgba(255,107,0,0.3)] hover:shadow-[0_0_60px_rgba(255,107,0,0.5)] overflow-hidden"
            >
              {/* Inner Shine Animation */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 text-white"
              />
              
              <Rocket className="w-6 h-6 fill-white text-white" />
              <span className='text-white'>Start Assessment</span>
              <ChevronRight className="w-6 h-6 stroke-[3px] text-white" />
            </motion.button>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Secure Link</span>
           </div>
           <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white fill-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Neural Eval</span>
           </div>
        </div>
      </div>
    </div>
  )
}