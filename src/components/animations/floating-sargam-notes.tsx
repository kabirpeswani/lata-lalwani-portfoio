"use client";

import { useState, useEffect } from 'react';

const FloatingSargamNotes = () => {
    const [sargam, setSargam] = useState<any[]>([]);
    const notes = "सा रे गा मा पा धा नी सा".split(" ");

    useEffect(() => {
        const generatedNotes = notes.map((note, i) => ({
        id: i,
        content: note,
        style: {
            left: `${Math.random() * 90 + 5}vw`,
            animationDuration: `${Math.random() * 20 + 15}s`, // 15s to 35s
            animationDelay: `${Math.random() * 15}s`,
        },
        }));
        setSargam(generatedNotes);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            {sargam.map(note => (
                <span
                    key={note.id}
                    className="sargam-note"
                    style={note.style}
                >
                    {note.content}
                </span>
            ))}
        </div>
    );
};

export default FloatingSargamNotes;
