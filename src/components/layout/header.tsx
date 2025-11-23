"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Performances', href: '#performances' },
  { name: 'Music', href: '#music' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ isMobile = false }) => (
    <>
      {menuItems.map(item => (
        isMobile ? (
          <SheetClose asChild key={item.name}>
            <Link href={item.href} className="block px-4 py-2 text-lg rounded-md hover:bg-primary/20">{item.name}</Link>
          </SheetClose>
        ) : (
          <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-accent focus:text-accent">
            {item.name}
          </Link>
        )
      ))}
      {isMobile ? (
          <SheetClose asChild>
            <Link href="#contact" className="block px-4 py-2 text-lg rounded-md hover:bg-primary/20">Contact</Link>
          </SheetClose>
      ) : (
        <Button asChild size="sm" className="bg-primary hover:bg-primary/80 text-primary-foreground">
          <Link href="#contact">Contact</Link>
        </Button>
      )}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-accent">
            <Music className="h-6 w-6" />
            <span>Lata Lalwani</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[50vw] bg-background/90 backdrop-blur-xl">
                <div className="flex flex-col space-y-4 p-6">
                  <NavLinks isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
