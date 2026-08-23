import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Example: GSAP animation specifically for the Hero section
    const ctx = gsap.context(() => {
      // Create a timeline for sequenced animations
      const tl = gsap.timeline();
      
      tl.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5
      })
      .from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
      
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-tighter mb-6 overflow-hidden">
        <span className="inline-block">Creative</span>{" "}
        <span className="inline-block text-indigo-400">Developer</span>
      </h1>
      
      <p className="hero-subtitle text-zinc-400 max-w-lg mx-auto text-lg md:text-xl">
        I build interactive and engaging web experiences using React and GSAP. 
        (Replace this with your own intro!)
      </p>

      <div className="mt-10 fade-in">
        <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors">
          View My Work
        </a>
      </div>
    </section>
  );
}
