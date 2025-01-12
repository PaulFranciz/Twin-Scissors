'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const progressRef = useRef<HTMLDivElement>(null)
  const nextPageRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Progress bar animation
    gsap.fromTo(
      progressRef.current,
      {
        scaleX: 0,
        transformOrigin: 'left center'
      },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: progressRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
        }
      }
    )

    // Content animation
    gsap.from([nextPageRef.current?.children || []], {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: nextPageRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
      }
    })

    // Image floating animation
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    
    // Create timeline for continuous floating animation
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    // Different animations based on screen size
    if (mediaQuery.matches) {
      // Mobile animation
      tl.to(imageRef.current, {
        x: -15, // Slight left movement
        y: -10, // Slight up movement
        duration: 2,
        ease: "sine.inOut"
      }).to(imageRef.current, {
        x: 0,
        y: 0,
        duration: 2,
        ease: "sine.inOut"
      })
    } else {
      // Desktop animation
      tl.to(imageRef.current, {
        y: -20,
        duration: 2,
        ease: "sine.inOut"
      }).to(imageRef.current, {
        y: 0,
        duration: 2,
        ease: "sine.inOut"
      })
    }

    // Cleanup
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <footer className="bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Logo Section */}
          <div className="col-span-1">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter">
              Sharpcutz
            </Link>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="space-y-3 md:space-y-4">
              <Link href="/home" className="block hover:text-[#7FFFD4] text-sm md:text-base">Home</Link>
              <Link href="/introducing" className="block hover:text-[#7FFFD4] text-sm md:text-base">Introducing</Link>
              <Link href="/features" className="block hover:text-[#7FFFD4] text-sm md:text-base">Features</Link>
              <Link href="/news" className="block hover:text-[#7FFFD4] text-sm md:text-base">News</Link>
              <Link href="/waitlist" className="block hover:text-[#7FFFD4] text-sm md:text-base">Waitlist</Link>
            </div>
           
            <div className="space-y-3 md:space-y-4">
              <Link href="/mission" className="block hover:text-[#7FFFD4] text-sm md:text-base">Mission</Link>
              <Link href="/about-us" className="block hover:text-[#7FFFD4] text-sm md:text-base">About Us</Link>
              <Link href="/people" className="block hover:text-[#7FFFD4] text-sm md:text-base">People</Link>
              <Link href="/news" className="block hover:text-[#7FFFD4] text-sm md:text-base">News</Link>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 pb-8 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="text-xs md:text-sm text-gray-400">
              <p>©2025 Sharpcutz</p>
              <p className="mt-2">📍 196 Old Odukpani road<br />Calabar, Nigeria</p>
            </div>
            <div className="text-xs md:text-sm text-gray-400 md:text-right">
              <p>Design by Paul & Ella</p>
            </div>
          </div>
        </div>

        {/* Next Page Section with Image */}
        <div className="relative mt-16 md:mt-24 pb-12">
          {/* Content Section */}
          <div ref={nextPageRef} className="relative z-10">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
                Sharpcutz
              </h2>
              <Link href="/">
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-[#7FFFD4]" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div 
            ref={imageContainerRef}
            className="absolute right-0 bottom-0 w-full md:w-[45%] h-[300px] md:h-[500px] z-0"
          >
            <div 
              ref={imageRef}
              className="w-full h-full relative translate-x-[20%] md:translate-x-0"
            >
              <Image
                src="/images/Wahl_100_Year_Anniversary_Clipper-removebg.png"
                alt="Sharpcutz"
                fill
                className="object-contain"
                style={{ 
                  filter: 'brightness(0.9) contrast(1.1)',
                  mixBlendMode: 'normal'
                }}
              />
            </div>
          </div>

          {/* Progress Bar */}
          <div 
            ref={progressRef}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 via-purple-400 to-blue-4004"
          />
        </div>
      </div>
    </footer>
  )
}