import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const FONT_WEIGHTS = {
  subTitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
}

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span key={i} className={className} style={{ fontVariationSettings: `'wght ${baseWeight}` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ))
}

const setupTextHover = (container, type) => {
  if (!container) return ()=>{};

  const letters = container.querySelectorAll('span')
  const { min, max, default: base } = FONT_WEIGHTS[type]

  const animateLetters = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration, ease: "power2.out",
      fontVariationSettings: `"wght" ${weight}`
    })
  }
  const handleMove = (clientX) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = clientX - left

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2))
      const intensity = Math.exp(-(distance ** 2) / 2000)

      animateLetters(letter, min + (max - min) * intensity)
    });
  }

  const handleMouseMove = (e) => handleMove(e.clientX)
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX)

  const handleLeave = () => letters.forEach((letter) => animateLetters(letter, base, 0.3))

  container.addEventListener("mousemove", handleMouseMove)
  container.addEventListener("mouseleave", handleLeave)
  container.addEventListener("touchmove", handleTouchMove, { passive: true })
  container.addEventListener("touchstart", handleTouchMove, { passive: true })
  container.addEventListener("touchend", handleLeave)

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleLeave)
    container.removeEventListener("touchmove", handleTouchMove)
    container.removeEventListener("touchstart", handleTouchMove)
    container.removeEventListener("touchend", handleLeave)
  }
}

const Welcome = () => {
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)


  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, 'title')
    const subtitleCleanup = setupTextHover(subTitleRef.current, 'subTitle')

    return () => {
      subtitleCleanup(),
        titleCleanup()
    }
  }, [])


  return (
    <section id='welcome'>
      <p ref={subTitleRef}>
        {renderText("Hey, I'm Kartik ! Wel-come to My", 'text-xl sm:text-3xl font-georama', 100)}
      </p>
      <h1 ref={titleRef} className='mt-3 sm:mt-7'>
        {renderText("PortFolio", 'text-5xl sm:text-9xl italic font-georama')}
      </h1>

    </section>
  )
}

export default Welcome
