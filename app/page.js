"use client"
import Intro from "@/components/Intro"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <main data-scroll-container className="flex flex-col w-full gap-10 h-full">
      <Intro />
    </main>
  )
}
