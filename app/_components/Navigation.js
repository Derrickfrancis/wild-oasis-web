"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/cabins", label: "Cabins" },
    { href: "/about", label: "About" },
    { href: "/account", label: "Guest area" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="z-50">
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8 lg:gap-16 items-center text-lg lg:text-xl">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-accent-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-md hover:bg-primary-800 transition-colors"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-primary-950 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-10 text-2xl">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-accent-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
