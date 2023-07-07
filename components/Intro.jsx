import Image from "next/image"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Intro = () => {
  const backgroundImage = useRef(null)
  const introImage = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=310px",
        scrub: true,
      },
    })

    timeline
      .from(backgroundImage.current, {
        clipPath: "inset(15% 15% 15% 15%)", //inset(0% 45% 0% 45% round 10px)
      })
      .to(
        introImage.current,
        {
          height: 170,
        },
        0
      )
  }, [])

  return (
    <div className="relative w-full flex justify-center">
      <div
        ref={backgroundImage}
        className="w-full h-[160vh] absolute brightness-[60%] overflow-hidden"
      >
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="background image"
          priority={true}
          className="object-cover"
        />
      </div>
      <div className="flex justify-center items-center relative mt-[35vh]">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="brightness-75 w-[350px] h-[475px] absolute overflow-hidden"
        >
          <Image
            src={"/images/intro.png"}
            alt="intro image"
            fill={true}
            priority={true}
            className="object-cover "
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className=" text-[7vw] z-10 text-center whitespace-nowrap font-black uppercase text-red-100"
        >
          los flamencos
        </h1>
      </div>
    </div>
  )
}

export default Intro
