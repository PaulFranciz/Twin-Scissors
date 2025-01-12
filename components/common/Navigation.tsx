"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { NavLink } from "../ui/NavLink";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

// Scissors Icon Component with white stroke
const ScissorsIcon = ({ isOpen }: { isOpen: boolean }) => {
  const leftBladeRef = useRef<SVGGElement>(null);
  const rightBladeRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to([leftBladeRef.current, rightBladeRef.current], {
        rotate: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to([leftBladeRef.current, rightBladeRef.current], {
        rotate: "+=45",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isOpen]);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white">
      <g ref={leftBladeRef} transform="translate(12 12)">
        <path
          d="M-6 -3C-6 -3 -4 -6 0 -6C4 -6 6 -3 6 -3"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <g ref={rightBladeRef} transform="translate(12 12)">
        <path
          d="M-6 3C-6 3 -4 6 0 6C4 6 6 3 6 3"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <circle cx="12" cy="12" r="1.5" fill="white"/>
    </svg>
  );
};

// Updated Navigation Component
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline();
    
    tl.from(logoRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Scroll animation with dark theme
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;

      gsap.to(navRef.current, {
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.3)" : "none",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-50 transition-all duration-300 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div ref={logoRef} className="w-1/4">
            <NavLink href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-white/90">
              SharpCutz
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Section */}
          <div className="w-1/4 flex justify-end items-center">
            {/* Book Now Button - Desktop */}
            <div className="hidden md:block">
              <NavLink
                href="/booking"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors"
              >
                Book Now
              </NavLink>
            </div>

            {/* Mobile Menu Button with Scissors Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-white/80"
              aria-label="Toggle mobile menu"
            >
              <ScissorsIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navigation;