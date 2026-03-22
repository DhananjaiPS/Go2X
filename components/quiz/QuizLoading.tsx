'use client'

import { motion } from 'framer-motion'
import { Code2, BarChart2, Brain, Zap, Loader2, Database, Shield } from 'lucide-react'
import { useQuizStore } from '@/store/useQuizStore'

const STACK_META = {
  webdev: { label: 'Web Development', icon: Code2, color: 'text-blue-400', glow: 'rgba(59, 130, 246, 0.4)' },
  datascience: { label: 'Data Science', icon: BarChart2, color: 'text-purple-400', glow: 'rgba(168, 85, 247, 0.4)' },
  aiml: { label: 'AI / ML', icon: Brain, color: 'text-orange-500', glow: 'rgba(249, 115, 22, 0.4)' },
}

export default function QuizLoading() {
  const selectedStack = useQuizStore((s) => s.selectedStack) as keyof typeof STACK_META
  const meta = selectedStack ? STACK_META[selectedStack] : STACK_META.webdev
  const Icon = meta.icon

  return (
    <div className="relative glass-card rounded-[3rem] p-12 md:p-20 flex flex-col items-center justify-center gap-10 overflow-hidden bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)]">
      
      {/* 🌟 CYBER SCANLINE ANIMATION 🌟 */}
      <motion.div 
        animate={{ y: [-100, 400] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-20 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none z-0"
      />

      <div className="relative z-10">
        {/* Core Pulsing Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-[-40px] rounded-full blur-3xl pointer-events-none opacity-50"
          style={{ backgroundColor: meta.glow }}
        />

        {/* Triple Orbital Rings */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Ring 1 - Fast */}
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-white/5 border-t-orange-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
          {/* Ring 2 - Slow Reverse */}
          <motion.div
            className="absolute inset-3 rounded-full border-[3px] border-white/5 border-b-yellow-400 opacity-60"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          {/* Ring 3 - Pulse Out */}
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-white/10"
          />

          {/* Centered Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icon className={`w-12 h-12 ${meta.color} drop-shadow-[0_0_15px_${meta.glow}]`} />
          </motion.div>
        </div>
      </div>

      {/* Loading Tactical Info */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.25em] text-orange-500 mb-6">
          <Zap className="w-3.5 h-3.5 fill-orange-500 animate-pulse" />
          <span>Syncing Neural Core</span>
        </div>

        <h3 className="font-display text-2xl md:text-4xl font-black text-white tracking-tighter uppercase italic mb-3">
          Preparing <span className={meta.color}>{meta.label}</span>
        </h3>
        
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
            <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Compiling Data Points...
            </motion.span>
          </div>
          <p className="text-[10px] text-gray-600 font-medium">ESTIMATED TIME: 00:03:00 SEC</p>
        </div>

        {/* Dynamic Matrix Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                height: [6, 16, 6],
                backgroundColor: ['#333', '#ff6b00', '#333']
              }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
              className="w-1.5 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Side HUD Elements (Non-Functional Decor) */}
      <div className="absolute top-10 left-10 opacity-20 hidden md:block">
        <Database className="w-5 h-5 text-white mb-2" />
        <div className="w-1 h-12 bg-white/10 rounded-full" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 hidden md:block">
        <div className="w-1 h-12 bg-white/10 rounded-full mb-2 ml-4" />
        <Shield className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}