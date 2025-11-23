import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-6 mt-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ivoria Systems — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
