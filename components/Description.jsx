import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

const phrases = [
  "Los Flamencos National Reserve",
  "is a nature reserve located",
  "in the commune of San Pedro de Atacama",
  "The reserve covers a total area",
  "of 740 square kilometres (290 sq mi)",
]

const Description = () => {
  return (
    <section className="relative text-white text-[3vw] uppercase mt-[45vh] ml-[10vw] z-10">
      {phrases.map((phrase, i) => (
        <AnimatedText key={`phrase-${i}`}>{phrase}</AnimatedText>
      ))}
    </section>
  )
}

const AnimatedText = ({ children }) => {
  const text = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0 bottom",
        end: "bottom+=300px bottom",
        scrub: true,
      },
      left: "-200px",
      opacity: 0,
    })
  }, [])

  return (
    <p ref={text} className="m-0 relative lowercase">
      {children}
    </p>
  )
}
export default Description
