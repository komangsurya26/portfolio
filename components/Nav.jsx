"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
const Nav = () => {
  const path = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${path === link.path && "text-accent border-b-2 border-accent"}
          font-medium hover:text-accent transition-all capitalize
          `
        }
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
