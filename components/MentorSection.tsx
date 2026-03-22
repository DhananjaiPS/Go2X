'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Calendar, Lock, GraduationCap } from 'lucide-react'
import { toast } from 'sonner'

const mentors = [
  {
    id: 1,
    logo:"data:image/png;base64,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",
    name: 'Ananya Sharma',
    role: 'SDE-2 @ Google',
    package: '35 LPA',
    sessions: 142,
    rating: 4.9,
    blur: false,
    blurLevel: '',
    tags: ['DSA', 'System Design', 'Interviews'],
    avatar: 'A',
    theme: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    textAccent: 'from-blue-400 to-cyan-300',
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    logo:"data:image/png;base64,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",
    role: 'Senior Engineer @ Amazon',
    package: '20 LPA',
    sessions: 98,
    rating: 4.8,
    blur: true,
    blurLevel: 'slight',
    tags: ['Backend', 'AWS', 'Python'],
    avatar: 'R',
    theme: 'from-orange-500 to-yellow-500',
    glowColor: 'rgba(249, 115, 22, 0.3)',
    textAccent: 'from-orange-400 to-yellow-400',
  },
  {
    id: 3,
    name: 'Priya Kapoor',
    logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8FBggAAAAAAQUDBwgFBwXo6Oji4uLy8vKtra28vLwFBgr6+vo8PDylpaV4eHiNjY2VlpYwMDBPUVBISEjExMTu7u6Fh4bW1taQkZBUVFRjY2WysrJlZ2YyNDQgISN7e3twcnGcnp1bXFvNz84OEhG4uLgZGxrAwsJJS0owMDMlKCba3Noj+TLrAAAEYUlEQVR4nO3cbV+iQBQFcLigYiriM6mllbW12/f/fMtgmSDUbh73Xt3zf9dvfXHPDjMMMwOeR0RERERERERERERERERERERERERERER/Lo37w7Z2EafTmolzrV3HqaTzLF3H9yXRruQ0ooWIn5OBdi0nsXzPlyW8yH54I4G/S3ilXQ1e93bXgC7hVLseuO6qEFC068EbuhH0I+Gddj1wi/0WvMRu2C4GDC7uIo32RtG8CWfaFaE9FJvw8kbStBiwI2vtitBGpWFGutoVgbUKATu+LLUrQpsVE8pcuyC4j/l24yKv0dI4I9LULgguLk5IX7XrwevLZbeg5/V2CQMZX1wfdBqya8BYu5bT2A6lInIXaZdyIvnioXSuL20u+qE/urletrSr+LeiZqs1PccxJ20nD8PVargYPNeW371KevJmnDydU8+c3Mm+cVxRfLf9kv/j+9Ca6VX9zqL7rNjCY3z297y0FjNZiJSehLdD7BlMAuKK0vPik90A0xxU/iYTivSN98nXVU3tLuPwftP10rhXl+/td8/aIT4zyGtvNGpD7nW9+ohr7Rj1yotM3yQj7SB1epiAWcSxdpRqtxKCEvryoB2myljCzte1f8114obFZeI+6hJ1Ql8m2oHKrpABs/F0Zu22GH11D/jLgOZaEHWfeA9ob+62AQZsyKPBCfgtMKGIwYCuCWtman8tEItLAHNgQpN73k3kNXqjnabKPS5hYHOrZghLGNpcJ57imtDo4aEnYEKTTeitgQkN3go9ZDe0+VjoecAmtHnQtAVKGGYJLU5nkE+GVk+4LXHdcKidpRpqRhOaHWiucW3Y185SbYZLaHCBzQEmXGtnqQZMaPLJCZcwNLuYn+Da8FE7S7UBcNZm8vG3fPT+29ysbaMdphLy8fBeO0wl4Gqw9LTDVIqQK232lvOd0hsiRyW0+b4scEnf6PMTcG80tNmIqNuFE5h8RyiF7h2aPGkCHGqM3hPH2D18ezvcyJmp77qivbcwkHvcvtu8SLUTHYB2RBfxSTtR2R22EQ2uSWGPC+URfxi7UsGXqYsoC1NL/PDLNM9o6czC5AQJjW3pQ4+1bRlbW8Te9LcJbZ1ojwR1YigXGjy0gL8lWvu00is4YWDv0MIIGTG0uEsDfQ62ueoGbUST3x2C9kSTyzXI4dTobjDontgw/LmMGNKILqHZT7qAVr+t7gV7qANggcU7xTvEddowesj0DWDpVF60Q3zq+PefDE5Ii45+2jf2WFjhyOM1BmfcB16OiWh0J7/kUb79tqzJt7oOTb892ojRY9AHmjUR9z4G4rvv7RWFJrdkalRFdF+NmLUnmzSdLJOf2w95FxOeTQs6UekdjEBk3N7vYlG7J+XvmP4y+UxYa7bXjFmDzQ6b57W/94mM7L/g7D7M3nr4+AJPzYsi3fh295u14dl2relyPZ/fDK4+uwFMn+NkncQ2zyQSERERERERERERERERERERERERERERERERERH9t34DGLk0N8tUqcIAAAAASUVORK5CYII=",
    role: 'Principal Engineer',
    package: '1 Cr+',
    sessions: 55,
    rating: 5.0,
    blur: true,
    blurLevel: 'heavy',
    tags: ['Leadership', 'Architecture', 'FAANG'],
    avatar: 'P',
    theme: 'from-yellow-400 to-yellow-600',
    glowColor: 'rgba(234, 179, 8, 0.3)',
    textAccent: 'from-yellow-300 to-yellow-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4 } },
}

export default function MentorSection() {
  const [hoveredMentor, setHoveredMentor] = useState<number | null>(null)

  const handleBook = (mentor: (typeof mentors)[0]) => {
    if (mentor.blur) {
      toast.error('Unlock this mentor!', {
        description:
          mentor.blurLevel === 'heavy'
            ? 'Upgrade to Premium plan to access.'
            : 'Upgrade to get access to this mentor.',
      })
      return
    }
    toast.success(`Session booked with ${mentor.name}! 🎉`, {
      description: "You'll receive a calendar invite shortly.",
    })
  }

  return (
    <section id="mentors" className="py-24 px-4 relative overflow-hidden bg-[#050505]">
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-6 backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Expert Guidance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-white">
            Learn from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Placed Students
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium">
            Book sessions with students who landed their dream jobs
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          onMouseLeave={() => setHoveredMentor(null)}
        >
          {mentors.map((mentor) => {
            const isHovered = hoveredMentor === mentor.id
            const isDimmed = hoveredMentor !== null && hoveredMentor !== mentor.id

            return (
              <motion.div
                key={mentor.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredMentor(mentor.id)}
                className={`relative group rounded-[2rem] p-8 flex flex-col gap-6 transition-all duration-500 overflow-hidden cursor-default
                  ${isHovered
                    ? 'bg-[#111] z-30 scale-[1.02] -translate-y-4'
                    : 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 z-10 scale-100 translate-y-0'}
                  ${isDimmed ? 'opacity-40 blur-[2px]' : 'opacity-100 blur-0'}
                `}
                style={{
                  borderWidth: '1px',
                  borderColor: isHovered ? mentor.glowColor.replace('0.3', '0.5') : 'rgba(255,255,255,0.1)',
                  boxShadow: isHovered ? `0 0 50px ${mentor.glowColor}` : 'none',
                }}
              >
                {/* Dynamic Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 pointer-events-none rounded-[2rem]
                  ${isHovered ? `from-white/5 via-transparent to-transparent opacity-100` : 'from-gray-500/5 to-transparent opacity-50'}`}
                />

                {/* ================================================== */}
                {/* 🔒 BLUR OVERLAY FOR LOCKED PROFILES 🔒 */}
                {/* ================================================== */}
                {mentor.blur && (
                  <div
                    className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-3 rounded-[2rem] transition-all duration-300"
                    style={{
                      backdropFilter: `blur(${mentor.blurLevel === 'heavy' ? 16 : 8}px)`,
                      background: isHovered ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)',
                    }}
                  >
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/20 mb-2">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg font-bold text-white">
                      {mentor.blurLevel === 'heavy' ? 'Premium Exclusive' : 'Paid Access'}
                    </p>
                    <p className="text-sm text-gray-300 text-center px-6">
                      {mentor.blurLevel === 'heavy'
                        ? 'Upgrade to Premium for ₹999'
                        : 'Available on paid plans'}
                    </p>
                    <button
                      onClick={() => handleBook(mentor)}
                      className={`mt-4 px-6 py-3 rounded-xl font-bold text-black text-sm active:scale-95 transition-transform shadow-lg bg-gradient-to-r ${mentor.theme}`}
                    >
                      Unlock Access
                    </button>
                  </div>
                )}

                {/* Card Content (Avatar & Name) */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`relative w-14 h-14 rounded-full p-[2px] flex-shrink-0 bg-gradient-to-br ${mentor.theme}`}>
                    <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center">
                      <img 
                        src={mentor.logo} 
                        alt={mentor.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  <div>
                    <p className={`font-semibold text-lg transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-200'}`}>
                      {mentor.name}
                    </p>
                    <p className="text-xs text-gray-500">{mentor.role}</p>
                  </div>
                </div>

                {/* Package & Rating Section */}
                <div className={`relative z-10 py-5 border-y transition-colors duration-500 flex items-center justify-between ${isHovered ? 'border-white/20' : 'border-white/5'}`}>
                  <p className={`text-4xl font-display font-black tracking-tighter transition-colors duration-500
                    ${isHovered ? `text-transparent bg-clip-text bg-gradient-to-r ${mentor.textAccent}` : 'text-gray-300'}`}
                  >
                    {mentor.package}
                  </p>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    <span className="text-sm font-bold text-white">{mentor.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {mentor.tags.map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-500 border ${isHovered ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-[#121212] border-white/5 text-gray-400'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-500 relative z-10">
                  <span className="font-semibold text-gray-300">{mentor.sessions}</span> sessions completed
                </p>

                {/* Action Button (Only visible if not blurred) */}
                {!mentor.blur && (
                  <button
                    onClick={() => handleBook(mentor)}
                    className={`relative z-10 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 mt-auto active:scale-95 flex items-center justify-center gap-2
                      ${isHovered
                        ? `bg-gradient-to-r ${mentor.theme} text-black shadow-[0_0_20px_${mentor.glowColor}]`
                        : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'}`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Session</span>
                  </button>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}