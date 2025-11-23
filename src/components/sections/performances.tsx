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
  
  const PerformancesSection = () => {
    return (
      <SectionContainer id="performances">
        <SectionTitle>Live Performances</SectionTitle>
        <div className="max-w-3xl mx-auto text-center text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p>
          Lata has captivated audiences at weddings, concerts, devotional gatherings, private shows, and grand cultural festivals. She connects emotionally with listeners through her voice.
          </p>
        </div>
      </SectionContainer>
    );
  };
  
  export default PerformancesSection;