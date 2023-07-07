import Image from "next/image"

const Intro = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full h-[140vh] absolute brightness-[60%]">
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="background image"
          priority={true}
          className="object-cover"
        />
      </div>
      <div className="flex justify-center relative mt-[35vh]">
        <div
          data-scroll
          data-scroll-speed="0.3"
          className="brightness-75 w-[350px] h-[475px] absolute"
        >
          <Image
            src={"/images/intro.png"}
            alt="intro image"
            fill={true}
            priority={true}
            className="object-cover object-top"
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="text-white text-[7vw] z-10 text-center whitespace-nowrap font-bold"
        >
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  )
}

export default Intro
