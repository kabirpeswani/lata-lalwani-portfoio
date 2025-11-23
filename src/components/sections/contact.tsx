import { Phone, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Phone,
    text: '+91 8076546334',
    href: 'tel:8076546334',
    label: 'Call Lata Lalwani'
  },
  {
    icon: Instagram,
    text: '@the_latalalwani',
    href: 'https://www.instagram.com/the_latalalwani',
    label: 'Lata Lalwani on Instagram'
  },
  {
    icon: Youtube,
    text: 'Lata Lalwani on YouTube',
    href: 'https://www.youtube.com/@lata_lalwani',
    label: 'Lata Lalwani on YouTube'
  }
];

const SectionContainer = ({ id, children }: { id: string, children: React.ReactNode }) => (
    <section id={id} className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </section>
  );
  
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
<h2 className="text-4xl md:text-5xl font-headline font-bold text-center text-accent mb-12">
    Get In Touch
</h2>
);

const ContactSection = () => {
  return (
    <SectionContainer id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-lg mx-auto text-center">
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group flex items-center justify-center gap-4 text-lg text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              <item.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
