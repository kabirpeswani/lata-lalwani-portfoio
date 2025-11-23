import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import JourneySection from '@/components/sections/journey';
import AchievementsSection from '@/components/sections/achievements';
import PerformancesSection from '@/components/sections/performances';
import MusicSection from '@/components/sections/music';
import ContactSection from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

const DevanagariPhrase = () => (
  <div className="text-center py-12 md:py-16 text-2xl md:text-3xl font-headline text-accent/80 tracking-widest bg-black/20">
    <p>सा रे गा मा पा धा नी सा</p>
  </div>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <DevanagariPhrase />
      <div className="space-y-24 md:space-y-32 pb-24 md:pb-32">
        <AboutSection />
        <JourneySection />
        <AchievementsSection />
        <PerformancesSection />
        <MusicSection />
        <ContactSection />
      </div>
    </>
  );
}
