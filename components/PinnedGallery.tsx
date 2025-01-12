'use client'

import React, { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  { id: 1, title: 'Be Bold', image: '/images/IMG_5117.jpg' },
  { id: 2, title: 'Be Fierce', image: '/images/Beardgrooming.jpeg' },
  { id: 3, title: 'Be Resilient', image: '/images/hairstyle.jpg' },
  { id: 4, title: 'Be Brave', image: '/images/IMG_5115.jpg' },
  { id: 5, title: 'Be Determined!!!', image: '/images/Deadlocks.jpeg' },
]

export default function PinnedGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (containerRef.current && sectionRefs.current.length) {
      const container = containerRef.current
      const sectionElements = sectionRefs.current

      gsap.to(sectionElements, {
        xPercent: -100 * (sectionElements.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sectionElements.length - 1),
          end: () => '+=' + container.offsetWidth,
        },
      })
    }
  }, [])

  const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div className="flex h-full">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            ref={(el) => setRef(el, index)}
            className="w-screen h-full flex-shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-full">
              <div className="relative w-full h-full">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-6xl lg:text-9xl font-bold">{section.title}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}