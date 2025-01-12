import React from 'react';
import Image from 'next/image';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import { ServiceItem, ProductItem, BarberItem } from '@/types/navigation';

export const ServiceMenuItem = ({ services }: { services: ServiceItem[] }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[800px] gap-4 p-6 md:w-[900px] md:grid-cols-2 bg-black text-white">
          {services.map((service) => (
            <NavigationMenuLink
              key={service.title}
              href={service.href}
              className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium leading-none mb-2">{service.title}</div>
                  <p className="line-clamp-3 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export const ProductMenuItem = ({ products }: { products: ProductItem[] }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[700px] gap-4 p-6 md:w-[800px] md:grid-cols-2 bg-black text-white">
          {products.map((product) => (
            <NavigationMenuLink
              key={product.title}
              href={product.href}
              className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium leading-none mb-2">{product.title}</div>
                  <p className="line-clamp-3 text-base leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export const BarberMenuItem = ({ barbers }: { barbers: BarberItem[] }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent">Our Team</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[600px] gap-4 p-6 bg-black text-white">
          {barbers.map((barber) => (
            <NavigationMenuLink
              key={barber.name}
              href={barber.href}
              className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="flex items-center gap-6">
                <div className="relative h-20 w-20">
                  <Image
                    src={barber.image}
                    alt={barber.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium leading-none mb-2">{barber.name}</div>
                  <p className="line-clamp-2 text-base leading-relaxed text-muted-foreground">
                    {barber.specialty}
                  </p>
                </div>
              </div>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};