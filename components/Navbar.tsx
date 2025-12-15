"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: 'Careers', href: '#careers' },
    { name: "Contact", href: "#contact" },
  ];

  const textColor = theme === "dark" ? "#ffffff" : "#1a1a1a";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar */}
      <div className="relative">
        {/* Center logo */}
        <div className="flex justify-center pt-4">
          <div className="mt-[-10px] mb-20">
            <Image
              src={theme === "dark" ? "/logo-white.png" : "/logo.png"}
              alt="Logo"
              width={280}
              height={80}
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Left side content - Social Links */}
        <div className="absolute left-4 lg:left-8 top-5 flex items-center gap-4 z-20">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-all hover:opacity-70"
            style={{ color: textColor }}
          >
            <Instagram className="w-4 h-4" />
            <span className="text-sm font-medium hidden lg:inline">
              Instagram
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-all hover:opacity-70"
            style={{ color: textColor }}
          >
            <Facebook className="w-4 h-4" />
            <span className="text-sm font-medium hidden lg:inline">
              Facebook
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right side content - Nav Links */}
        <div className="absolute right-4 lg:right-8 top-5 hidden md:flex items-center gap-6 z-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: textColor }}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:opacity-70"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="absolute right-4 top-5 md:hidden flex items-center gap-3 z-20">
          <button
            onClick={toggleTheme}
            className="transition-all hover:opacity-70"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: textColor }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium"
              style={{ color: textColor }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
