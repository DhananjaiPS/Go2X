'use client'

import { useState } from 'react'
import { Toaster } from 'sonner'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import RegistrationSection from '@/components/RegistrationSection'
import QuizSection from '@/components/quiz/QuizSection'
import CoursesSection from '@/components/CoursesSection'
import CourseSection from '@/components/CourseSection'
import DashboardSection from '@/components/DashboardSection'
import InterviewSection from '@/components/InterviewSection'
import MentorSection from '@/components/MentorSection'
import RecordingsSection from '@/components/RecordingsSection'
import LeaderboardSection from '@/components/LeaderboardSection'
import CompanyMarquee from '@/components/CompanyMarquee'
import { useQuizStore } from '@/store/useQuizStore'
import LeaderboardRanking from '@/components/LeaderboardRanking'
import Footer from '@/components/Footer'

export interface UserState {
  name: string
  email: string
  isRegistered: boolean
  points: number
  streak: number
  daysCompleted: number
}

export default function Home() {
  const [user, setUser] = useState<UserState>({
    name: '',
    email: '',
    isRegistered: false,
    points: 0,
    streak: 0,
    daysCompleted: 0,
  })

  const quizPoints = useQuizStore((s) => s.points)
  const quizStreak = useQuizStore((s) => s.streak)
  const completedDays = useQuizStore((s) => s.completedDays)

  const mergedUser = {
    ...user,
    points: user.points + quizPoints,
    streak: Math.max(user.streak, quizStreak),
    daysCompleted: completedDays.length,
  }

  const handleRegister = (name: string, email: string) => {
    setUser((prev) => ({ ...prev, name, email, isRegistered: true }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar user={mergedUser} />
      <HeroSection user={mergedUser} />
      <RegistrationSection user={mergedUser} onRegister={handleRegister} />
      <CompanyMarquee />
      <QuizSection />
      <CoursesSection />
      <CourseSection />
      <DashboardSection user={mergedUser} />
      <InterviewSection />
      <MentorSection />
      <RecordingsSection />
      <LeaderboardSection user={mergedUser} />
      <LeaderboardRanking user={mergedUser} />
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'hsl(0 0% 10%)',
            border: '1px solid hsl(25 100% 50% / 0.3)',
            color: 'hsl(0 0% 98%)',
          },
        }}
      />
    </div>
  )
}
