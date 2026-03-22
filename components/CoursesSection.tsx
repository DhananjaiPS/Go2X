'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, Cpu, Brain, Star, Clock, Users, 
  ChevronRight, Sparkles, Layout, Code2, Database, Terminal,
  Lock, Zap
} from 'lucide-react'
import { toast } from 'sonner'
import { useQuizStore } from '@/store/useQuizStore'

interface Course {
  id: string
  category: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  students: string
  rating: number
  icon: any
  color: string // Tailwind text class
  hexColor: string // Actual Hex for dynamic styles
  glow: string
  tags: string[]
  targetLevel: ('Beginner' | 'Intermediate' | 'Interview Ready')[]
}

const courses: Course[] = [
  {
    id: 'webdev-basics',
    category: 'Web Development',
    title: 'Full Stack Web Development',
    description: 'Master HTML, CSS, JavaScript, React, and Node.js from scratch.',
    difficulty: 'Beginner',
    duration: '8 weeks',
    students: '12.4k',
    rating: 4.8,
    icon: Layout,
    color: 'text-blue-400',
    hexColor: '#3b82f6',
    glow: 'shadow-blue-500/20',
    tags: ['Next.js', 'React', 'Node.js'],
    targetLevel: ['Beginner'],
  },
  {
    id: 'dsa-intermediate',
    category: 'DSA',
    title: 'DSA for Placement Elite',
    description: 'Arrays, Trees, Graphs, DP — everything for top-tier coding rounds.',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    students: '9.8k',
    rating: 4.9,
    icon: Code2,
    color: 'text-orange-500',
    hexColor: '#f97316',
    glow: 'shadow-orange-500/20',
    tags: ['Trees', 'DP', 'Graphs'],
    targetLevel: ['Beginner', 'Intermediate'],
  },
  {
    id: 'data-science',
    category: 'Data Science',
    title: 'ML & AI Foundation',
    description: 'Python, Pandas, Scikit-learn, and neural network model building.',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    students: '7.2k',
    rating: 4.7,
    icon: Database,
    color: 'text-purple-400',
    hexColor: '#a855f7',
    glow: 'shadow-purple-500/20',
    tags: ['Python', 'ML', 'Pandas'],
    targetLevel: ['Intermediate'],
  },
]

const categories = ['All', 'Web Development', 'DSA', 'Data Science', 'Architecture', 'Career']

export default function CoursesSection() {
  const { performanceLevel, phase } = useQuizStore()
  const [enrolled, setEnrolled] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState('All')
  
  const hasResult = phase === 'submitted'
  
  const filteredCourses = useMemo(() => {
    let list = courses
    if (activeTab !== 'All') {
      list = list.filter(c => c.category === activeTab)
    }
    return list
  }, [activeTab])

  const handleAction = (courseTitle: string) => {
    toast.info("Module Access Restricted", {
      description: `Neural Link for "${courseTitle}" will open soon. Stay tuned! 🚀`,
      icon: <Lock className="w-4 h-4 text-orange-500" />,
    })
  }

  return (
    <section id="courses" className="py-24 px-4 relative overflow-hidden bg-[#050505]">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-500 mb-6 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 fill-orange-500" />
            <span className="font-bold tracking-widest uppercase">The Learning Vault</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-black mb-6 tracking-tighter text-white">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">LEGACY</span>
          </h2>
        </motion.div>

        {/* 🌟 CENTERED FILTER DOCK 🌟 */}
        <div className="flex justify-center mb-16">
          <motion.div 
            layout
            className="flex items-center gap-1 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl shadow-2xl overflow-x-auto no-scrollbar max-w-full"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap uppercase tracking-wider ${
                  activeTab === cat 
                  ? 'bg-orange-500 text-black shadow-[0_0_25px_rgba(255,107,0,0.4)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative"
              >
                {/* Magnetic Hover Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${course.hexColor} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-[2.5rem]`} 
                     style={{ backgroundColor: course.hexColor }} />

                <div className={`h-full glass-card rounded-[2.5rem] p-8 flex flex-col gap-6 border border-white/10 transition-all duration-500 relative overflow-hidden bg-[#0a0a0a] group-hover:border-white/20 group-hover:translate-y-[-8px]`}>
                  
                  {/* Subtle Scanline Animation */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:100%_4px] pointer-events-none" />

                  <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <course.icon className={`w-8 h-8 ${course.color}`} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-white leading-tight group-hover:text-orange-500 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter bg-white/5 border border-white/5 text-gray-400 group-hover:border-orange-500/20 group-hover:text-orange-300 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {course.duration}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> {course.students}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg border border-white/5">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-black text-white">{course.rating}</span>
                    </div>
                  </div>

                  {/* 🌟 COLOR-FULL HOVER BUTTON 🌟 */}
                  <button
                    onClick={() => handleAction(course.title)}
                    className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 flex items-center justify-center gap-2 border
                      bg-white/5 text-white border-white/10
                      group-hover:text-black group-hover:border-transparent`}
                    style={{ 
                      // Using inline styles for the hover color flip
                      '--hover-bg': course.hexColor 
                    } as any}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = course.hexColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    Start Journey <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}