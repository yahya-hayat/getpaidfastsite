'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-foreground font-semibold text-lg tracking-tight">
          getpaidfast<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground tracking-wide uppercase transition-colors duration-150 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />
            </a>
          ))}
          <a
            href="https://dashboard.getpaidfast.ai/register"
            className="relative inline-flex items-center text-sm font-semibold text-accent uppercase tracking-wider group"
          >
            Get Started
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-accent scale-x-100 group-hover:scale-x-110 transition-transform duration-150 origin-left" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://dashboard.getpaidfast.ai/register"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-accent uppercase tracking-wider pt-2 border-t border-border"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
