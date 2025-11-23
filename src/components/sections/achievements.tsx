import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  "Performed at over 300+ live shows across India",
  "Recognized for her soulful stage presence",
  "Featured in cultural & corporate events",
  "Collaborated with top musicians",
  "Strong versatility in classical, Bollywood, and Sufi",
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


const AchievementsSection = () => {
  return (
    <SectionContainer id="achievements">
      <SectionTitle>Achievements</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-4 text-lg">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/80">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
    </SectionContainer>
  );
};

export default AchievementsSection;
