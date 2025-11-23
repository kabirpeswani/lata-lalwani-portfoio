import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

const AboutSection = () => {
  return (
    <SectionContainer id="about">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto text-center text-lg md:text-xl text-foreground/80 leading-relaxed">
            <p>
            Lata Lalwani is a soulful Indian singer known for her mesmerizing voice and emotional depth. With 10 years of experience in live performances, studio recordings, and musical collaborations, she has built a unique identity in the world of music.
            </p>
        </div>
    </SectionContainer>
  );
};

export default AboutSection;
