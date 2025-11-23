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

const JourneySection = () => {
  return (
    <SectionContainer id="journey">
      <SectionTitle>Musical Journey</SectionTitle>
      <div className="max-w-3xl mx-auto text-center text-lg md:text-xl text-foreground/80 leading-relaxed">
        <p>
          Beginning her musical path at a young age, Lata Lalwani developed a deep love for classical and Bollywood music. She has trained with renowned vocal coaches and performed across major cultural festivals.
        </p>
      </div>
    </SectionContainer>
  );
};

export default JourneySection;
