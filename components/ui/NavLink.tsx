import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({ href, children, className = '', onClick }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`${className} relative group`}
      onClick={onClick}
    >
      <motion.span
        className="inline-block"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
};