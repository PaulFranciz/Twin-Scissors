export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ProductItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface BarberItem {
  name: string;
  specialty: string;
  image: string;
  href: string;
}

export interface MenuItem {
  title: string;
  href: string;
  items?: Array<{
    title: string;
    description: string;
    image: string;
    href: string;
  }>;
}



export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ScissorsIconProps {
  isOpen: boolean;
}