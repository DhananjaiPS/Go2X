'use client'

import { motion } from 'framer-motion'
import { Flame, Zap, Target, CheckCircle } from 'lucide-react'
import { useQuizStore } from '@/store/useQuizStore'
import StreakGrid from '@/components/quiz/StreakGrid'

export default function CourseSection() {
  const { points, streak, completedDays, currentDay } = useQuizStore()
  const percentage = Math.min((points / 5000) * 100, 100)
  const daysLeft = 50 - completedDays.length

  return (
    <section id="course" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">50 Days Challenge</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Your Progress{' '}
            <span className="text-gradient">Streak</span>
          </h2>
          <p className="text-muted-foreground">
            Take a daily test, build your streak, and unlock your dream job
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Points Earned', value: points, icon: Zap, color: 'text-primary' },
            { label: 'Day Streak', value: `${streak}🔥`, icon: Flame, color: 'text-orange-400' },
            { label: 'Days Done', value: completedDays.length, icon: CheckCircle, color: 'text-green-400' },
            { label: 'Days Left', value: daysLeft, icon: Target, color: 'text-blue-400' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
              <p className={`text-2xl font-display font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <StreakGrid />
        </motion.div>
      </div>
    </section>
  )
}
