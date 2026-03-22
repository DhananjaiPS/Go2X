'use client'

import { motion } from 'framer-motion'
import { User, Zap, Flame, Trophy, Target, Star, Sparkles } from 'lucide-react'
import ProgressCylinder from '@/components/ProgressCylinder'
import { UserState } from '@/app/page'

interface DashboardSectionProps {
  user: UserState
}

const stepsAway = (points: number) => {
  const pct = (points / 5000) * 100
  if (pct >= 100) return 0
  if (pct >= 80) return 1
  if (pct >= 60) return 3
  if (pct >= 40) return 5
  if (pct >= 20) return 8
  return 12
}

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: 'spring', bounce: 0.4 } 
  },
}

export default function DashboardSection({ user }: DashboardSectionProps) {
  const percentage = Math.min((user.points / 5000) * 100, 100)
  const steps = stepsAway(user.points)

  return (
    <section id="dashboard" className="py-24 px-4 relative overflow-hidden min-h-screen">
      {/* Background Blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, -90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.2 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          {/* Professional Eyebrow Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-400 mb-6 backdrop-blur-md cursor-default"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Command Center Activated</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-gradient-x">
              Dashboard
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
            Track your progress, conquer daily milestones, and accelerate your journey to the dream job.
          </p>
        </motion.div>

        {/* Data Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full"
        >
          {/* Card 1: User Stats */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(255,107,0,0.15)" }}
            className="glass-card rounded-3xl p-7 flex flex-col gap-6 border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-5 relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-black font-display text-2xl font-bold shadow-lg flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #ff6b00, #ffd700)',
                  boxShadow: '0 0 20px rgba(255,107,0,0.3)',
                }}
              >
                {user.isRegistered ? user.name.charAt(0).toUpperCase() : <User className="w-8 h-8" />}
              </motion.div>
              <div>
                <p className="font-display font-bold text-xl text-foreground">
                  {user.isRegistered ? user.name : 'Guest User'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user.isRegistered ? user.email : 'Register to track progress'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 relative z-10">
              {[
                { label: 'Points', value: user.points, icon: Zap, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                { label: 'Streak', value: `${user.streak}d`, icon: Flame, color: 'text-red-500', bg: 'bg-red-500/10' },
                { label: 'Tests', value: user.daysCompleted, icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
                { label: 'Goal', value: '50d', icon: Target, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1), type: "spring" }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className={`${stat.bg} rounded-2xl p-4 flex items-center gap-3 border border-white/5 cursor-default transition-colors`}
                >
                  <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`font-bold text-lg leading-none ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 relative z-10 mt-auto">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-muted-foreground">Loyalty Tier</span>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10"
                >
                  <Star className="w-3 h-3" style={{ color: percentage >= 80 ? '#ffd700' : percentage >= 40 ? '#ff8c00' : '#ff6b00' }} />
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: percentage >= 80 ? '#ffd700' : percentage >= 40 ? '#ff8c00' : '#ff6b00' }}
                  >
                    {percentage >= 80 ? 'Gold' : percentage >= 40 ? 'Silver' : 'Bronze'}
                  </span>
                </motion.div>
              </div>
              <div className="h-2.5 rounded-full bg-black/60 overflow-hidden shadow-inner relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
                  className="h-full rounded-full relative overflow-hidden"
                  style={{ background: 'linear-gradient(90deg, #ff6b00, #ffd700)' }}
                >
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Progress Cylinder (FIXED CONFLICT) */}
          <motion.div variants={itemVariants} className="h-full relative">
            {/* The float animation is now on an INNER wrapper so it doesn't break the variants */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card rounded-3xl p-6 flex flex-col items-center justify-between gap-6 border border-white/5 bg-white/5 backdrop-blur-xl relative h-full w-full"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent rounded-3xl pointer-events-none" />
              
              <div className="relative z-10 w-full flex flex-col items-center">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center mb-4 flex items-center justify-center gap-2">
                  <Target className="w-4 h-4" /> Dream Job Orbit
                </p>
                
                {/* Embedded Cylinder */}
                <ProgressCylinder percentage={percentage} size="lg" />
              </div>
              
              <div className="text-center relative z-10 mt-auto bg-black/30 w-full py-4 rounded-2xl border border-white/5">
                <p className="text-4xl font-display font-bold text-foreground">
                  {steps === 0 ? (
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }} 
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500"
                    >
                      Goal Met! 🎉
                    </motion.span>
                  ) : (
                    <>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 drop-shadow-sm">
                        {steps}
                      </span> <span className="text-2xl">steps</span>
                    </>
                  )}
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">Away from your dream job</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Milestones */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(255,107,0,0.15)" }}
            className="glass-card rounded-3xl p-7 flex flex-col gap-5 border border-white/5 bg-white/5 backdrop-blur-xl h-full"
          >
            <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-1 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-orange-400" />
              Journey Milestones
            </p>
            <div className="flex flex-col gap-3 h-full justify-between">
              {[
                { points: 500, label: 'Beginner', reward: 'Profile Badge', unlocked: user.points >= 500 },
                { points: 1500, label: 'Learner', reward: 'Mock Test Access', unlocked: user.points >= 1500 },
                { points: 2500, label: 'Advanced', reward: 'Mentor Session', unlocked: user.points >= 2500 },
                { points: 4000, label: 'Expert', reward: 'Premium Interview', unlocked: user.points >= 4000 },
                { points: 5000, label: 'Champion', reward: 'Dream Job Ready!', unlocked: user.points >= 5000 },
              ].map((milestone, i) => (
                <motion.div 
                  key={milestone.points} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                  whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.04)" }}
                  className="flex items-center gap-4 p-2.5 rounded-2xl transition-all cursor-default"
                >
                  <motion.div
                    whileHover={milestone.unlocked ? { rotate: 15, scale: 1.1 } : {}}
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-md relative"
                    style={{
                      background: milestone.unlocked
                        ? 'linear-gradient(135deg, #ff6b00, #ffd700)'
                        : 'rgba(255,255,255,0.03)',
                      border: milestone.unlocked ? 'none' : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {milestone.unlocked && (
                      <motion.div 
                        animate={{ opacity: [0.4, 0.8, 0.4] }} 
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-white/20 blur-[2px]"
                      />
                    )}
                    {milestone.unlocked ? (
                      <Trophy className="w-5 h-5 text-black relative z-10" />
                    ) : (
                      <span className="text-xs text-muted-foreground/50">○</span>
                    )}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <p className={`text-base font-bold ${milestone.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {milestone.label}
                      </p>
                      <span className="text-xs font-mono font-medium text-muted-foreground/70 bg-black/30 px-2.5 py-1 rounded-md border border-white/5">
                        {milestone.points} pts
                      </span>
                    </div>
                    <p className={`text-xs ${milestone.unlocked ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 font-medium' : 'text-muted-foreground/50'}`}>
                      {milestone.reward}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}