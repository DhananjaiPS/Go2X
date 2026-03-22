'use client'

import { motion } from 'framer-motion'
import { Trophy, Zap, Flame, Crown, Target, ArrowRight, ShieldCheck } from 'lucide-react'
import { UserState } from '@/app/page'

interface LeaderboardSectionProps {
  user: UserState
}

const bgGrid = "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg?quality=90&strip=all&crop=0,0,100,100"

const topTen = [
  { rank: 1, name: 'Priya Sharma', points: 4900, badge: '👑' },
  { rank: 2, name: 'Rahul Mehta', points: 4750, badge: '🥈' },
  { rank: 3, name: 'Anjali Singh', points: 4600, badge: '🥉' },
  { rank: 4, name: 'Vikram Patel', points: 4400, badge: '⭐' },
  { rank: 5, name: 'Sneha Rao', points: 4250, badge: '⭐' },
  { rank: 6, name: 'Amit Kumar', points: 4100, badge: '⭐' },
  { rank: 7, name: 'Pooja Gupta', points: 3950, badge: '⭐' },
  { rank: 8, name: 'Rohit Singh', points: 3750, badge: '⭐' },
  { rank: 9, name: 'Karan Johar', points: 3600, badge: '⭐' },
  { rank: 10, name: 'Sonia Gandhi', points: 3450, badge: '⭐' },
]

export default function LeaderboardSection({ user }: LeaderboardSectionProps) {
  const userRank = 12 // Simulated

  return (
    <section id="leaderboard" className="py-24 px-4 relative overflow-hidden bg-[#050505]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* ================================================== */}
        {/* 🌟 LEFT SIDE: CONTENT WITH BG IMAGE 🌟 */}
        {/* ================================================== */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 relative group"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-12 border border-white/10 shadow-2xl min-h-[500px] flex flex-col justify-center">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <img src={bgGrid} alt="Target" className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-[#050505]/90 to-[#050505]" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-6">
                <Flame className="w-3.5 h-3.5" />
                <span>The Elite 1% Club</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
                Survival of the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Sharpest.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Consistency is the only currency here. Every test you take and every session you attend pushes you closer to the top.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-orange-500 font-black text-2xl">4.8k+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Active Peers</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-orange-500 font-black text-2xl">Top 10%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Unlock Swag</p>
                </div>
              </div>

              <button className="group flex items-center gap-2 text-white font-bold hover:text-orange-500 transition-colors">
                View Full Rankings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ================================================== */}
        {/* 🌟 RIGHT SIDE: CHOTU LEADERBOARD 🌟 */}
        {/* ================================================== */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full lg:w-[400px] shrink-0"
        >
          <div className="bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 p-6 shadow-2xl relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                <h3 className="text-white font-bold text-lg tracking-tight">Top 10 Legends</h3>
              </div>
              <div className="text-[10px] font-black bg-orange-500/10 text-orange-500 px-2 py-1 rounded-md border border-orange-500/20">
                LIVE UPDATES
              </div>
            </div>

            {/* Scrollable List */}
            <div className="space-y-2 max-h-[440px] overflow-y-auto custom-scrollbar pr-2">
              {topTen.map((player, i) => (
                <motion.div
                  key={player.rank}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all
                    ${i === 0 ? 'bg-orange-500/10 border-orange-500/30' : 'bg-white/[0.02] border-white/5 hover:bg-white/5'}
                  `}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm
                    ${i === 0 ? 'bg-orange-500 text-black' : 'text-gray-500 bg-white/5'}
                  `}>
                    {i < 3 ? player.badge : player.rank}
                  </div>
                  
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${i === 0 ? 'text-white' : 'text-gray-300'}`}>
                      {player.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-orange-500 fill-orange-500" />
                      <span className="text-[10px] text-gray-500 font-bold">{player.points} XP</span>
                    </div>
                  </div>

                  {i === 0 && (
                    <div className="animate-pulse">
                      <Crown className="w-4 h-4 text-orange-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Personal Rank Footer */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="bg-orange-500 rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-orange-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-orange-500 font-black">
                    {user.name?.charAt(0) || 'G'}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-orange-900 leading-none mb-1 uppercase">Your Rank</p>
                    <p className="text-black font-black text-sm">#{userRank} Overall</p>
                  </div>
                </div>
                <ShieldCheck className="w-6 h-6 text-orange-950" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 107, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 107, 0, 0.5);
        }
      `}</style>
    </section>
  )
}