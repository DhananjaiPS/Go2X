'use client'

import { motion } from 'framer-motion'
import { Code2, BarChart2, Brain, ChevronRight, X, Cpu, Network } from 'lucide-react'
import { useQuizStore, TechStack } from '@/store/useQuizStore'

const stacks = [
  {
    id: 'webdev' as TechStack,
    icon: Code2,
    label: 'Web Development',
    description: 'Master HTML, CSS, JavaScript, React, and Node.js infrastructure.',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'APIs'],
    color: 'text-blue-400',
    hex: '#3b82f6',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    glow: 'rgba(59,130,246,0.4)',
  },
  {
    id: 'datascience' as TechStack,
    icon: BarChart2,
    label: 'Data Science',
    description: 'Python algorithms, Pandas data manipulation, and Statistical models.',
    topics: ['Python', 'Pandas', 'ML Models', 'Statistics', 'SQL'],
    color: 'text-purple-400',
    hex: '#a855f7',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    glow: 'rgba(168,85,247,0.4)',
  },
  {
    id: 'aiml' as TechStack,
    icon: Brain,
    label: 'AI / ML',
    description: 'Neural Networks, Deep Learning architectures, and Generative LLMs.',
    topics: ['Neural Nets', 'Transformers', 'LLMs', 'Gen AI', 'PyTorch'],
    color: 'text-orange-500',
    hex: '#f97316',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    glow: 'rgba(249,115,22,0.4)',
  },
]

export default function QuizStackSelect() {
  const { selectStack, currentDay } = useQuizStore()

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none rounded-[3rem]" />

      <div className="relative glass-card rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
              <Cpu className="w-3.5 h-3.5 text-orange-500" />
              <span>Day {currentDay} Initialization</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter italic">
              Select <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Domain</span>
            </h3>
            <p className="text-sm text-gray-500 mt-2 font-medium">Calibrate your testing environment by selecting a specialized technology stack.</p>
          </div>
          
          <button
            onClick={() => useQuizStore.setState({ phase: 'idle' })}
            className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 backdrop-blur-md self-end md:self-auto shadow-lg"
          >
            <X className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
          </button>
        </div>

        {/* 🌟 MODULE GRID 🌟 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {stacks.map((stack, i) => (
            <motion.button
              key={stack.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => selectStack(stack.id)}
              className="relative group text-left p-8 rounded-[2rem] border border-white/10 bg-[#111] flex flex-col gap-6 cursor-pointer transition-all duration-500 overflow-hidden"
              style={{
                // Magic inline style for dynamic hover border glow
                '--hover-glow': stack.glow,
                '--hover-border': stack.hex,
              } as any}
            >
              {/* Magnetic Hover Aura */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${stack.glow}, transparent 70%)` }}
              />
              
              {/* Cyber Sweep Shine */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Dynamic Border on Hover */}
              <div 
                className="absolute inset-0 border-2 border-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{ borderColor: `${stack.hex}40` }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${stack.bg}`}
                >
                  <stack.icon className={`w-8 h-8 ${stack.color}`} />
                </div>
                <Network className="w-6 h-6 text-white/10 group-hover:text-white/30 transition-colors" />
              </div>

              <div className="relative z-10 flex-1">
                <p className={`font-display font-black text-2xl uppercase tracking-tight mb-2 transition-colors duration-300 text-white group-hover:${stack.color}`}>
                  {stack.label}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {stack.description}
                </p>
              </div>

              {/* Tactical Topic Tags */}
              <div className="relative z-10 flex flex-wrap gap-2 mt-2">
                {stack.topics.map((t) => (
                  <span 
                    key={t} 
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-black/50 border border-white/5 text-gray-400 group-hover:border-white/20 group-hover:text-white transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Engage CTA */}
              <div className={`relative z-10 flex items-center justify-between mt-4 pt-6 border-t border-white/5 ${stack.color} font-black uppercase tracking-widest text-xs`}>
                <span>Engage Module</span>
                <div className={`p-2 rounded-full ${stack.bg} transition-transform duration-300 group-hover:translate-x-2`}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}