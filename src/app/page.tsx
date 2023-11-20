// 'use client';
import { Section } from '@/components/section'

export default function Home() {
  console.log("Where am I?")
  return (
    <div className="row px-7 flex flex-col items-center min-h-screen bg-white dark:bg-zinc-950">
      <Section />
    </div>
  )
}
