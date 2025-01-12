import React from 'react';
import gsap from "gsap";
import { ScissorsIconProps } from "@/types/navigation";

export const ScissorsIcon: React.FC<ScissorsIconProps> = ({ isOpen }) => {
  const leftBladeRef = React.useRef<SVGGElement>(null);
  const rightBladeRef = React.useRef<SVGGElement>(null);

  React.useEffect(() => {
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <g ref={leftBladeRef} transform-origin="12 12">
        <path d="M6 9C6 9 8 6 12 6C16 6 18 9 18 9" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <g ref={rightBladeRef} transform-origin="12 12">
        <path d="M6 15C6 15 8 18 12 18C16 18 18 15 18 15" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  );
};