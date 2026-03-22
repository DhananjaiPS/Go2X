'use client'

import { motion } from 'framer-motion'
import { Flame, Info, Zap, Target, Calendar } from 'lucide-react'
import { useQuizStore } from '@/store/useQuizStore'

const STACK_COLORS: Record<string, string> = {
  webdev: '#3b82f6', // Bright Blue
  datascience: '#a855f7', // Purple
  aiml: '#ff6b00', // Neon Orange
}

const STACK_LABELS: Record<string, string> = {
  webdev: 'Web Development',
  datascience: 'Data Science',
  aiml: 'AI / Machine Learning',
}

const WEEK_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function StreakGrid() {
  const { completedDays, currentDay, streak, dailyCompleted } = useQuizStore()
  const completedMap = new Map(completedDays.map((d) => [d.day, d]))

  const totalCells = 50
  const weeks = Math.ceil(totalCells / 7)

  return (
    <div className="glass-card rounded-[2rem] p-7 border border-white/10 bg-[#0a0a0a] relative overflow-hidden group">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
            <Calendar className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-xl font-display font-black text-white tracking-tight uppercase">Preparation Journey</h3>
            <p className="text-xs text-gray-500 font-bold tracking-widest flex items-center gap-2">
              <Target className="w-3 h-3 text-orange-400" /> DAY {currentDay} OF 50 • {completedDays.length} COMPLETED
            </p>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-orange-500 text-black shadow-[0_0_25px_rgba(255,107,0,0.3)]"
        >
          <Flame className="w-5 h-5 fill-black" />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black">{streak} DAYS</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter opacity-80">Current Streak</span>
          </div>
        </motion.div>
      </div>

      {/* The Activity Grid */}
      <div className="overflow-x-auto no-scrollbar py-2">
        <div className="min-w-[500px] flex gap-3">
          {/* Weekday Labels */}
          <div className="flex flex-col gap-2 mt-1">
            {WEEK_LABELS.map((day) => (
              <div key={day} className="h-6 flex items-center justify-end pr-2">
                <span className="text-[10px] text-gray-600 font-black uppercase tracking-tighter">{day}</span>
              </div>
            ))}
          </div>

          {/* Grid Cells */}
          <div className="flex gap-2">
            {Array.from({ length: weeks }, (_, wk) => (
              <div key={wk} className="flex flex-col gap-2">
                {Array.from({ length: 7 }, (_, d) => {
                  const dayNum = wk * 7 + d + 1
                  if (dayNum > totalCells) return <div key={d} className="w-6 h-6" />

                  const record = completedMap.get(dayNum)
                  const isToday = dayNum === currentDay
                  const isFuture = dayNum > currentDay
                  const isDone = !!record

                  // Intelligent Coloring Logic
                  const baseColor = isDone ? STACK_COLORS[record.stack] : 'rgba(255,255,255,0.05)'
                  const opacity = isDone ? (record.accuracy >= 80 ? 1 : 0.6) : 1

                  return (
                    <motion.div
                      key={d}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: isFuture ? 0.2 : 1 }}
                      whileHover={{ 
                        scale: 1.25, 
                        zIndex: 20,
                        backgroundColor: isDone ? baseColor : 'rgba(255,255,255,0.2)'
                      }}
                      transition={{ 
                        delay: dayNum * 0.01,
                        type: 'spring',
                        stiffness: 400,
                        damping: 20
                      }}
                      className="w-6 h-6 rounded-md relative cursor-help transition-colors border border-white/5"
                      style={{
                        backgroundColor: isToday && !dailyCompleted ? 'rgba(255,107,0,0.2)' : baseColor,
                        boxShadow: isDone && record.accuracy >= 80 
                          ? `0 0 15px ${baseColor}88` 
                          : isToday ? '0 0 10px rgba(255,107,0,0.4)' : 'none',
                        border: isToday ? '1.5px solid #ff6b00' : '1px solid rgba(255,255,255,0.05)'
                      }}
                    >
                      {/* Interactive Tooltip on Hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black border border-white/10 rounded-xl text-[10px] text-white opacity-0 group-hover/cell:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-2xl transition-opacity">
                         {isDone ? (
                           <div className="flex flex-col gap-1">
                             <span className="font-black text-orange-400">DAY {dayNum} • {record.accuracy}%</span>
                             <span className="text-gray-400 font-bold">{STACK_LABELS[record.stack]}</span>
                           </div>
                         ) : `Day ${dayNum}`}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend & Stats */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8 pt-6 border-t border-white/5">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {Object.entries(STACK_COLORS).map(([stack, color]) => (
            <div key={stack} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" style={{ background: color }} />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{STACK_LABELS[stack].split(' ')[0]}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
             <div className="w-2.5 h-2.5 rounded-sm bg-orange-500/20 border border-orange-500 animate-pulse" />
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target Today</span>
           </div>
           <div className="flex items-center gap-2">
             <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
             <span className="text-[10px] font-black text-white uppercase tracking-widest">{Math.round((completedDays.length / 50) * 100)}% Progress</span>
           </div>
        </div>
      </div>

      {/* CSS for custom scrollbar hidden */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}