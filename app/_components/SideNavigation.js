"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathName = usePathname();

  return (
    <nav className="border-r border-primary-900 h-full flex flex-col w-14 sm:w-64 shrink-0">
      <ul className="flex flex-col gap-1 sm:gap-2 flex-1 text-sm sm:text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-2 px-2 sm:py-3 sm:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-2 sm:gap-4 font-semibold text-primary-200 ${pathName === link.href ? "bg-primary-900" : ""}`}
              href={link.href}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
