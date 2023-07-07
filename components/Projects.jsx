"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useLayoutEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Salar de Atacama",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "Valle de la luna",
    src: "valle_de_la_muerte.jpeg",
  },
  {
    title: "Miscanti Lake",
    src: "miscani_lake.jpeg",
  },
  {
    title: "Miniques Lagoons",
    src: "miniques_lagoon.jpg",
  },
]

const Projects = () => {
  const [selected, setSelected] = useState(0)
  const image = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: image.current,
      start: "-=50px",
      end: document.body.offsetHeight,
      pin: true,
    })
  }, [])

  return (
    <section className="flex flex-col mt-[25vh] p-[10%]">
      <div className="flex h-[700px] justify-between g-[5%]">
        <div className="relative w-[40%] h-full" ref={image}>
          <Image
            src={`/images/${projects[selected].src}`}
            fill
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="w-[20%] text-[1.6vw]">
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
        </div>
        <div className="flex h-full w-[20%] items-end text-[1vw]">
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
          </p>
        </div>
      </div>
      <div className="mt-64 flex flex-col justify-center">
        {projects.map(({ title }, i) => (
          <div
            onMouseOver={() => setSelected(i)}
            key={`project-${i}`}
            className="flex justify-end border-t border-white text-[3vw] pb-5 pt-5 last-of-type:border-b font-bold"
          >
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
