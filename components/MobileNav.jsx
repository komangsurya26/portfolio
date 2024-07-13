"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Service",
    path: "/service",
  },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  const path = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <Menu className="h-8 w-8 text-accent" />
      </SheetTrigger>
      <SheetContent side="top" className="flex justify-center items-center h-screen">
        <nav className="flex flex-col gap-8 items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`
                ${path === link.path && "text-accent border-b-2 border-accent"}
                font-medium hover:text-accent transition-all capitalize
                `}
              onClick={handleClick}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
