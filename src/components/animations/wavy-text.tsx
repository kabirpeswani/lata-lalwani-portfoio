"use client";

import { cn } from "@/lib/utils";

interface WavyTextProps {
  text: string;
  className?: string;
  stagger?: number;
}

const WavyText = ({ text, className, stagger = 50 }: WavyTextProps) => {
  return (
    <h1
      className={cn(
        "text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white shadow-lg",
        className
      )}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{ animationDelay: `${index * stagger}ms` }}
        >
          <span
            className="inline-block animate-text-flow-in"
            style={{ animationDelay: `${index * stagger}ms` }}
          >
            <span
              className="inline-block animate-text-wave"
              style={{
                animationDelay: `${index * 100}ms`,
                animationDuration: "2.5s",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        </span>
      ))}
    </h1>
  );
};

export default WavyText;
