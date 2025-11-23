import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import FloatingNotes from '@/components/animations/floating-notes';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingSargamNotes from '@/components/animations/floating-sargam-notes';

export const metadata: Metadata = {
  title: 'Lata Lalwani Music',
  description: 'The official portfolio of Indian singer and performer, Lata Lalwani. Discover her musical journey, achievements, and listen to her featured music.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FloatingNotes />
        <FloatingSargamNotes />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
