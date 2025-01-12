'use client';

import { motion } from 'framer-motion';
import { splitText } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({ text, className = '', delay = 0 }: SplitTextProps) => {
  const characters = splitText(text);

  return (
    <span className={className}>
      {characters.map(({ char, index }) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: delay + index * 0.04,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
