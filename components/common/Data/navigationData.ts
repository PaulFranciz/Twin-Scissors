// components/common/navigationData.ts
import { BarberItem, ProductItem, ServiceItem } from "@/types/navigation";

export const services: ServiceItem[] = [
  {
    title: "Classic Haircut",
    description: "Traditional barbering with modern style",
    image: "/images/hair1.jpg",
    href: "/services/classic-haircut"
  },
  {
    title: "Beard Grooming",
    description: "Expert beard shaping and maintenance",
    image: "/images/Beardgrooming.jpeg",
    href: "/services/beard-grooming"
  },
  {
    title: "Hair Styling",
    description: "Contemporary styling for all hair types",
    image: "/images/hairstyle.jpg",
    href: "/services/hair-styling"
  },
  {
    title: "Home Service",
    description: "Premium barbering in your comfort",
    image: "/images/barber-tool-box.jpg",
    href: "/services/home-service"
  },
  {
    title: "Hair Dyeing",
    description: "Professional hair dyeing tailored to your style, with expert precision and care.",
    image: "/images/hair dye.jpg",
    href: "/services/home-service"
  },
  {
    "title": "Dreadlocks & Maintenance",
    "description": "Expert dreadlock styling and care, tailored to your unique look and needs.",
    "image": "/images/Deadlocks.jpeg",
    "href": "/services/dreadlocks"
  }
  
];

export const products: ProductItem[] = [
  {
    title: "Professional Clippers",
    description: "High-quality cutting tools",
    image: "/images/clipper-2.jpg",
    href: "/products/clippers"
  },
  {
    title: "Hair Care",
    description: "Premium hair products",
    image: "/images/shaving cream.jpg",
    href: "/products/hair-care"
  },
  {
    title: "Beard Care",
    description: "Essential beard maintenance products",
    image: "/images/Beard Oil - Strength _ Lemongrass & Clove.jpeg",
    href: "/products/beard-care"
  }
];

export const barbers: BarberItem[] = [
  {
    name: "Ubong Mark",
    specialty: "Classic Cuts & Styling",
    image: "/team/ubong.jpg",
    href: "/barbers/ubong"
  },
  {
    name: "Bassey",
    specialty: "Modern Fades & Beard Design",
    image: "/team/mark.jpg",
    href: "/barbers/mark"
  }
];