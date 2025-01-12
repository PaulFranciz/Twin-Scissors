'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { NoiseTexture } from '@/components/ui/NoiseTexture';
import { SplitText } from '@/components/ui/SpliText';



const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const clipperRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    
    const clipperY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
    const clipperRotate = useTransform(scrollYProgress, [0, 0.5], [0, 45]);
    const clipperScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
    return (
      <>
        <CustomCursor />
        <NoiseTexture />
        <div 
          ref={heroRef} 
          className="relative min-h-screen w-full bg-[#1a1a1a] overflow-hidden"
        >
          {/* Grain texture overlay */}
          <div className="absolute inset-0 bg-[url('/grain.png')] opacity-30 mix-blend-overlay pointer-events-none" />
          
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
              {/* Left content */}
              <div className="text-white pt-20 lg:pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-sm text-neutral-400 uppercase tracking-widest mb-6"
                >
                  SharpCutz. Smarter Looks.
                </motion.div>
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight [perspective:1000px]">
                  <SplitText text="Your Style" delay={0.2} />
                  <br />
                  <SplitText text="Our Expertise" delay={0.4} />
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-neutral-400 text-lg mb-12 max-w-md"
                >
                  Get the perfect haircut and grooming experience, crafted by professionals who understand your look and lifestyle.
                </motion.p>
                
                <div className="flex flex-wrap gap-6">
                  <MagneticButton>
                    Book Now
                  </MagneticButton>
                  <MagneticButton dark>
                    View Catalog
                  </MagneticButton>
                </div>
              </div>
  
              {/* Right content - Clipper */}
              <motion.div
                ref={clipperRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                style={{ y: clipperY, rotate: clipperRotate, scale: clipperScale }}
                className="relative hidden lg:block"
              >
                <Image
                  src="/images/Wahl_100_Year_Anniversary_Clipper-removebg.png"
                  alt="Professional Hair Clipper"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
  
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </div>
      </>
    );
  };
  
  export default Hero;

