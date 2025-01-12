
// components/common/DesktopNav.tsx
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { services, products, barbers } from "./Data/navigationData";
import { ServiceMenuItem, ProductMenuItem, BarberMenuItem } from "./MenuItems";
import { NavLink } from "../ui/NavLink";

export const DesktopNav = () => {
  return (
    <div className="hidden md:flex justify-center w-2/4">
      <NavigationMenu>
        <NavigationMenuList className="space-x-6">
          <ServiceMenuItem services={services} />
          <ProductMenuItem products={products} />
          <BarberMenuItem barbers={barbers} />
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};