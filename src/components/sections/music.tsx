import { Music4 } from "lucide-react";
import Link from 'next/link';

const music = [
  { title: "Dandiya Raas", url: "https://youtu.be/b2aXv2Qbp44" },
  { title: "Radha Rani Lage", url: "https://youtu.be/hYZw8BZQYUE?si=Ti6KzVgbnDhimBcs" },
  { title: "Waasta", url: "https://youtu.be/rlUhLiJmfbo?si=_FbNZvtq1aLas6RV" },
];

const SectionContainer = ({ id, children }: { id: string, children: React.ReactNode }) => (
  <section id={id} className="container mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-headline font-bold text-center text-accent mb-12">
    {children}
  </h2>
);

const MusicSection = () => {
  return (
    <SectionContainer id="music">
      <SectionTitle>Featured Music</SectionTitle>
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-8">
          {music.map((song, index) => (
            <Link
              key={index}
              href={song.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-3xl md:text-4xl lg:text-5xl font-headline text-foreground/80 hover:text-accent transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-4">
                <Music4 className="h-8 w-8 text-primary/70 group-hover:text-accent transition-colors" />
                <span>{song.title}</span>
              </div>
              <div className="mt-2 h-0.5 w-24 mx-auto bg-primary/30 group-hover:w-full group-hover:bg-accent transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default MusicSection;
