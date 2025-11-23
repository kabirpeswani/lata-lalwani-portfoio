
"use client";

import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import JourneySection from '@/components/sections/journey';
import AchievementsSection from '@/components/sections/achievements';
import PerformancesSection from '@/components/sections/performances';
import MusicSection from '@/components/sections/music';
import ContactSection from '@/components/sections/contact';
import FadeIn from '@/components/animations/fade-in';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="py-12" />
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
