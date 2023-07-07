"use client"
import Description from "@/components/Description"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      new LocomotiveScroll()
    })()
  }, [])

  return (
    <main data-scroll-container className="flex flex-col w-full gap-10 h-full">
      <Intro />
      <Description />
      <Projects />
    </main>
  )
}
