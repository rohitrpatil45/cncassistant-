'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Tools', href: '#tools' },
    { label: 'Generator', href: '#generator' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong neon-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#" className="flex-shrink0">
            <span className="text-xl md:text-2xl font-bold gradient-text">cncdesigner.io</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-primary smooth-transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 px-4 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <button className="px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-primary smooth-transition mx-4">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
