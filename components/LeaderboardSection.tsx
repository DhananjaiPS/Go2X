'use client'

import { motion } from 'framer-motion'
import { Trophy, Medal, Star, Gift, Crown, Zap, ShieldCheck, Flame, TrendingUp } from 'lucide-react'
import { UserState } from '@/app/page'
import { toast } from 'sonner'

interface LeaderboardSectionProps {
  user: UserState
}

// Custom BG Image URL
const bgGrid = "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg?quality=90&strip=all&crop=0,0,100,100"

const leaderboardData = [
  { rank: 1, name: 'Priya Sharma', score: 98, badge: '👑', points: 4900, color: 'from-yellow-400 to-orange-500' },
  { rank: 2, name: 'Rahul Mehta', score: 95, badge: '🥈', points: 4750, color: 'from-gray-300 to-slate-500' },
  { rank: 3, name: 'Anjali Singh', score: 92, badge: '🥉', points: 4600, color: 'from-orange-700 to-orange-900' },
  { rank: 4, name: 'Vikram Patel', score: 88, badge: '⭐', points: 4400 },
  { rank: 5, name: 'Sneha Rao', score: 85, badge: '⭐', points: 4250 },
]

const rewards = [
  {
    threshold: 50,
    title: 'Starter Swag Kit',
    description: 'Exclusive DreamJob T-shirt + Leather Finish Diary + Insulated Bottle.',
    icon: Medal,
    color: 'text-orange-500',
    glow: 'shadow-orange-500/20',
    emoji: '🎒'
  },
  {
    threshold: 90,
    title: 'Elite Founders Pack',
    description: 'Tech-organizer Backpack + Premium Sippers + Ultra-rare community stickers.',
    icon: Crown,
    color: 'text-yellow-500',
    glow: 'shadow-yellow-500/20',
    emoji: '💎'
  }
]

export default function LeaderboardSection({ user }: LeaderboardSectionProps) {
  const userScore = Math.min((user.points / 5000) * 100, 100)
  const userRank = 12 // Simulated rank

  return (
    <section id="leaderboard" className="py-24 px-4 relative overflow-hidden bg-[#050505]">
      {/* 🌟 CRAZY BACKGROUND EFFECTS 🌟 */}
      <div className="absolute inset-0 z-0">
        <img src={bgGrid} alt="bg" className="w-full h-full object-cover opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>
      
      {/* Moving Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }}
            className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6"
          >
            <Trophy className="w-10 h-10 text-orange-500" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 tracking-tighter text-white">
            HALL OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">FAME</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Only the top 1% make it here. Progress to unlock the world's most exclusive developer swag.
          </p>
        </div>

        {/* 🏆 PODIUM SECTION (TOP 3) 🏆 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
          {/* Rank 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="order-2 md:order-1 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] text-center relative pt-16"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-slate-400 overflow-hidden bg-slate-800 flex items-center justify-center text-3xl font-bold">
              {leaderboardData[1].name.charAt(0)}
            </div>
            <p className="text-slate-400 font-black mb-1">#2ND PLACE</p>
            <h3 className="text-2xl font-bold text-white mb-4">{leaderboardData[1].name}</h3>
            <div className="bg-slate-400/20 py-2 px-4 rounded-xl inline-flex items-center gap-2">
              <Zap className="w-4 h-4 text-slate-400" />
              <span className="font-bold">{leaderboardData[1].points} XP</span>
            </div>
          </motion.div>

          {/* Rank 1 (THE KING) */}
          <motion.div 
            whileHover={{ y: -15 }}
            className="order-1 md:order-2 bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-500/40 backdrop-blur-2xl p-10 rounded-[3rem] text-center relative pt-20 shadow-[0_0_50px_rgba(255,107,0,0.2)]"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-yellow-500 overflow-hidden bg-yellow-500 flex items-center justify-center text-5xl font-bold text-black shadow-[0_0_30px_rgba(255,215,0,0.5)]">
              {leaderboardData[0].badge}
            </div>
            <p className="text-orange-500 font-black mb-1 animate-pulse">👑 OVERLORD</p>
            <h3 className="text-3xl font-black text-white mb-4">{leaderboardData[0].name}</h3>
            <div className="bg-orange-500 py-3 px-6 rounded-2xl inline-flex items-center gap-2 text-black font-black">
              <Flame className="w-5 h-5 fill-black" />
              <span>{leaderboardData[0].points} XP</span>
            </div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="order-3 md:order-3 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] text-center relative pt-16"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-orange-900 overflow-hidden bg-orange-950 flex items-center justify-center text-3xl font-bold">
              {leaderboardData[2].name.charAt(0)}
            </div>
            <p className="text-orange-800 font-black mb-1">#3RD PLACE</p>
            <h3 className="text-2xl font-bold text-white mb-4">{leaderboardData[2].name}</h3>
            <div className="bg-orange-900/20 py-2 px-4 rounded-xl inline-flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-800" />
              <span className="font-bold">{leaderboardData[2].points} XP</span>
            </div>
          </motion.div>
        </div>

        {/* 🎁 CRAZY REWARDS CARDS 🎁 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {rewards.map((reward, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`relative p-8 rounded-[3rem] bg-[#0a0a0a] border border-white/10 group overflow-hidden shadow-2xl`}
            >
              {/* Animated Inner Shine */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              />

              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="w-40 h-40 rounded-[2rem] bg-white/5 flex items-center justify-center text-7xl shadow-inner border border-white/5">
                  {reward.emoji}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <reward.icon className={`w-5 h-5 ${reward.color}`} />
                    <span className={`font-black uppercase tracking-widest text-xs ${reward.color}`}>
                      Unlock at {reward.threshold}%
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-3">{reward.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{reward.description}</p>
                  
                  {/* Progress Pill */}
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min((userScore / reward.threshold) * 100, 100)}%` }}
                      className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* User's Current Status Footer */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mt-12 p-8 rounded-[2rem] bg-orange-600 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_60px_rgba(234,88,12,0.3)]"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             <div className="w-18 h-18 p-2 rounded-xl bg-black flex items-center justify-center shadow-2xl">
                <ShieldCheck className="w-8 h-8 text-white" />
             </div>
             <div>
               <h4 className="text-2xl font-black text-black">YOUR STANDING</h4>
               <p className="text-orange-100 font-bold">Rank #{userRank} • Top {Math.round(100 - userScore)}% of developers</p>
             </div>
          </div>
          <button className="px-8 py-4 bg-black text-white rounded-2xl font-black hover:scale-105 transition-transform flex items-center gap-2" onClick={()=> toast.success("Feature under developemnt")}>
            CLAIM REWARDS <TrendingUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}