"use client";

import { useState, useEffect } from 'react';

const FloatingNotes = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const noteTypes = ['♪', '♩', '♫', '♬'];
  const numNotes = 20;

  useEffect(() => {
    const generatedNotes = Array.from({ length: numNotes }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 15 + 10}s`, // 10s to 25s
        animationDelay: `${Math.random() * 10}s`,
        fontSize: `${Math.random() * 1 + 0.75}rem`, // 0.75rem to 1.75rem
      },
      content: noteTypes[Math.floor(Math.random() * noteTypes.length)],
    }));
    setNotes(generatedNotes);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {notes.map(note => (
        <span key={note.id} className="music-note" style={note.style}>
          {note.content}
        </span>
      ))}
    </div>
  );
};

export default FloatingNotes;
