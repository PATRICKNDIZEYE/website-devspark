"use client";

import { useState, useEffect } from "react";
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Background with blur effect */}
        <div
          className="absolute inset-0 backdrop-blur-md transition-colors duration-300 z-0"
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(15, 15, 15, 0.85)"
                : "rgba(255, 255, 255, 0.85)",
          }}
        />
        {/* Subtle border at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-colors duration-300 z-0"
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
          }}
        />
        {/* Main navbar */}
        <div className="relative z-10">
          {/* Center logo */}
          <div className="flex justify-center pt-4 relative">
            <div className="mt-[10px]  relative">
              <Image
                src={theme === "dark" ? "/logo-white.png" : "/logo.png"}
                alt="Logo"
                width={280}
                height={80}
                className="h-20 w-auto object-contain drop-shadow-lg"
                priority
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
          <div className="absolute right-4 top-5 md:hidden flex items-center gap-3 z-50 mobile-menu-button">
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
              className="transition-transform duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 rotate-0" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        style={{
          backgroundColor:
            theme === "dark"
              ? "rgba(15, 15, 15, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
        }}
      >
        {/* Backdrop blur effect */}
        <div className="absolute inset-0 backdrop-blur-md"></div>

        {/* Mobile Menu Content */}
        <div
          className={`mobile-menu absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="w-full max-w-sm px-8 space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-4 text-xl font-semibold transition-all duration-200 hover:scale-105 hover:opacity-80"
                style={{
                  color: textColor,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {link.name}
              </a>
            ))}

            {/* Social Links in Mobile Menu */}
            <div className="flex items-center justify-center gap-6 pt-8 border-t border-opacity-20" style={{ borderColor: textColor }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-all hover:opacity-70 hover:scale-110"
                style={{ color: textColor }}
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-all hover:opacity-70 hover:scale-110"
                style={{ color: textColor }}
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm font-medium">Facebook</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
