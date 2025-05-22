import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  baseText?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words, baseText = "Data " }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const wordPause = 2000; // Pause at complete word

    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(prev => prev.substring(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing text
        if (currentText === currentWord) {
          // Word complete, pause then start deleting
          setTimeout(() => setIsDeleting(true), wordPause);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block min-w-[140px]">
      {baseText}
      <span className="text-emerald-600">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
};

export default TypewriterEffect;