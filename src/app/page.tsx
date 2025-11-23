
"use client";

import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import JourneySection from '@/components/sections/journey';
import AchievementsSection from '@/components/sections/achievements';
import PerformancesSection from '@/components/sections/performances';
import MusicSection from '@/components/sections/music';
import ContactSection from '@/components/sections/contact';
import FadeIn from '@/components/animations/fade-in';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const DevanagariPhrase = () => {
  const [sargam, setSargam] = useState<any[]>([]);
  const notes = "सा रे गा मा पा धा नी सा".split(" ");

  useEffect(() => {
    const generatedNotes = notes.map((note, i) => ({
      id: i,
      content: note,
      style: {
        left: `${Math.random() * 80 + 10}vw`,
        animationDuration: `${Math.random() * 20 + 15}s`, // 15s to 35s
        animationDelay: `${Math.random() * 10}s`,
      },
    }));
    setSargam(generatedNotes);
  }, []);

  return (
    <div className="relative text-center h-64 md:h-80 my-12 md:my-16 bg-black/20 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        {sargam.map(note => (
          <span
            key={note.id}
            className="sargam-note"
            style={note.style}
          >
            {note.content}
          </span>
        ))}
      </div>
      <p className="z-10 text-3xl md:text-4xl font-headline text-accent/90 tracking-widest bg-black/30 p-4 rounded-lg backdrop-blur-sm">
        The Seven Notes of Music
      </p>
    </div>
  );
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <FadeIn>
        <DevanagariPhrase />
      </FadeIn>
      <div className="space-y-24 md:space-y-32 pb-24 md:pb-32">
        <FadeIn>
          <AboutSection />
        </FadeIn>
        <FadeIn>
          <JourneySection />
        </FadeIn>
        <FadeIn>
          <AchievementsSection />
        </FadeIn>
        <FadeIn>
          <PerformancesSection />
        </FadeIn>
        <FadeIn>
          <MusicSection />
        </FadeIn>
        <FadeIn>
          <ContactSection />
        </FadeIn>
      </div>
    </>
  );
}
