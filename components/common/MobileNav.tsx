import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../ui/NavLink";
import { MobileNavProps, MenuItem } from "@/types/navigation";
import { services, products, barbers } from "./Data/navigationData";

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { 
      title: "Services", 
      href: "/services",
      items: services.map(service => ({
        title: service.title,
        description: service.description,
        image: service.image,
        href: service.href
      }))
    },
    { 
      title: "Products", 
      href: "/products",
      items: products.map(product => ({
        title: product.title,
        description: product.description,
        image: product.image,
        href: product.href
      }))
    },
    { 
      title: "Our Team", 
      href: "/team",
      items: barbers.map(barber => ({
        title: barber.name,
        description: barber.specialty,
        image: barber.image,
        href: barber.href
      }))
    },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" }
  ];

  const handleItemClick = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 pt-2 pb-3 space-y-3">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => item.items && handleItemClick(item.title)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <span>{item.title}</span>
                  {item.items && (
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedItem === item.title ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedItem === item.title && item.items && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 space-y-2 pl-6"
                    >
                      {item.items.map((subItem, subIndex) => (
                        <motion.div
                          key={subItem.title}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: subIndex * 0.1 }}
                        >
                          <NavLink
                            href={subItem.href}
                            className="flex items-center p-2 space-x-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            onClick={onClose}
                          >
                            <div className="relative w-10 h-10">
                              <Image
                                src={subItem.image}
                                alt={subItem.title}
                                fill
                                className="rounded-md object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{subItem.title}</div>
                              <p className="text-xs text-gray-500">{subItem.description}</p>
                            </div>
                          </NavLink>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: menuItems.length * 0.1 }}
            >
              <NavLink
                href="/booking"
                className="block w-full text-center px-3 py-2 text-white bg-primary hover:bg-primary/90 rounded-md"
                onClick={onClose}
              >
                Book Now
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};