import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from '../ui/button';
import Link from 'next/link';

const HeroSection = () => {
  const heroImage = placeholderData.placeholderImages.find(p => p.id === 'hero-bg');

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white shadow-lg animate-pulse animation-delay-500">
          Lata Lalwani
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-body text-accent italic">
          Indian Singer • Performer • 10 Years of Musical Journey
        </p>
        <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
                <Link href="#music">Listen Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
                <Link href="#contact">Contact Me</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
