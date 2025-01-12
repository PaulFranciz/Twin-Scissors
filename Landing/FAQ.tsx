'use client';


import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Plus, X } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    gsap.fromTo(
      faqItems,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          end: 'bottom center',
        },
      }
    );
  }, []);

  const faqData: FAQItem[] = [
    {
      question: 'What are your operating hours?',
      answer: 'We are open Monday through Saturday from 9:00 AM to 8:00 PM, and Sundays from 10:00 AM to 6:00 PM. Last appointments are taken 45 minutes before closing.'
    },
    {
      question: 'Do you accept walk-ins?',
      answer: 'Yes, we accept walk-ins based on availability. However, we recommend booking an appointment to ensure you get your preferred time slot and avoid waiting.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of services including haircuts, beard trims, hot towel shaves, hair styling, hair coloring, scalp treatments, and facial grooming. Each service includes a consultation to ensure we meet your specific needs.'
    },
    {
        question: 'Do you offer home services?',
        answer: 'Yes we do, Please provide a well-lit area with access to an electrical outlet and a chair. Our barbers bring their own equipment, cape, and cleaning supplies. A nearby sink is helpful but not required.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our basic haircuts start at ₦1,000, beard trims at ₦500, and hot towel shaves at ₦2,000. Premium services and packages are also available. Please contact us for a detailed price list or specific service quotes.'
    },
    {
      question: 'Do I need to bring anything for my appointment?',
      answer: 'Just yourself! We provide all necessary supplies and products. If you have a specific hairstyle in mind, feel free to bring reference pictures to help communicate your desired look.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, cash, and mobile payments. We also have gift cards available for purchase.'
    }
  ];

  const accordionVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold">?</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">FAQs</h2>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-12">
          <span className="text-white">We've got the </span>
          <span className="text-gray-500">answers</span>
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item bg-zinc-900 rounded-lg overflow-hidden"
              initial={false}
              animate={{
                backgroundColor: openItem === index ? 'rgba(39, 39, 42, 1)' : 'rgba(24, 24, 27, 1)'
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenItem(openItem === index ? null : index)}
                initial={false}
                animate={{ backgroundColor: openItem === index ? 'rgba(39, 39, 42, 1)' : 'rgba(24, 24, 27, 1)' }}
              >
                <span className="font-medium text-sm md:text-base">{faq.question}</span>
                <motion.div
                  animate={{ 
                    rotate: openItem === index ? 45 : 0,
                    scale: openItem === index ? 1.1 : 1
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  {openItem === index ? <X size={20} /> : <Plus size={20} />}
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {openItem === index && (
                  <motion.div
                    className="overflow-hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={accordionVariants}
                  >
                    <motion.div
                      className="px-6 pb-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: 0.1,
                          duration: 0.3
                        }
                      }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <p className="text-gray-400 text-sm md:text-base">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400">
          Still have more questions? Contact our{' '}
          <Link href="/help-center" className="text-white hover:underline">
              Help Center
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default FAQSection;