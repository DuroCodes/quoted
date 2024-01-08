"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useToast } from '~/components/ui/use-toast';
import { type AuthorID, type Author, randomAuthors, AUTHORS } from '~/util/authors';
import { PASSAGES, type Passage } from '~/util/passages';

function AuthorCard({ author, correctAuthor, handleAnswer }: { author: Author; correctAuthor: AuthorID; handleAnswer: (isCorrect: boolean) => unknown; }) {
  const handleClick = () => handleAnswer(author.id === correctAuthor);

  return (
    <button className="flex flex-col items-center space-y-2" id={author.id} onClick={handleClick}>
      <Image
        alt={author.name}
        className="w-24 h-24 rounded-full object-cover"
        height="100"
        src={`/authors/${author.id}.jpg`}
        style={{
          aspectRatio: "100/100",
          objectFit: "cover",
        }}
        width="100"
      />
      <h2 className="text-lg font-semibold text-white">{author.name}</h2>
    </button>
  );
}

export default function Home() {
  const [passage, setPassage] = useState<Passage | null>();
  const [authors, setAuthors] = useState<Author[] | null>();
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    generateNewQuestion();
  }, [score]);

  const generateNewQuestion = () => {
    const newPassage = PASSAGES[Math.floor(Math.random() * PASSAGES.length)]!;
    setPassage(newPassage);
    setAuthors(randomAuthors(newPassage.author));
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      const author = AUTHORS[passage!.author];
      toast({
        title: 'Correct!',
        description: `From ${author}${author.endsWith('s') ? "'" : "'s"} "${passage?.novel}."`,
      });
    } else {
      window.location.replace(`/lose?score=${score}`);
    }
  };

  if (!passage || !authors) return (
    <main key="1" className="dark flex flex-col items-center justify-center min-h-screen bg-gray-800 p-">
      <h1 className="text-4xl font-bold text-white">Quoted</h1>
      <p className="text-center text-gray-400 mb-2 max-w-lg md:text-lg">
        Choose the author you believe wrote the quote below:
      </p>
      <div className="mt-4 bg-gray-700 shadow-md rounded-lg p-6 max-w-2xl w-full mb-8">
        <p className="text-gray-400 text-sm italic md:text-lg">Loading...</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-24 h-24 rounded-full bg-gray-400 animate-pulse" />
          <div className="w-24 h-6 rounded-full bg-gray-400 animate-pulse" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-24 h-24 rounded-full bg-gray-400 animate-pulse" />
          <div className="w-24 h-6 rounded-full bg-gray-400 animate-pulse" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-24 h-24 rounded-full bg-gray-400 animate-pulse" />
          <div className="w-24 h-6 rounded-full bg-gray-400 animate-pulse" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-24 h-24 rounded-full bg-gray-400 animate-pulse" />
          <div className="w-24 h-6 rounded-full bg-gray-400 animate-pulse" />
        </div>
      </div>
    </main>
  );

  return (
    <main key="1" className="dark flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <header className="flex justify-center w-full max-w-2xl items-center mb-4">
        <h1 className="text-4xl font-bold text-white">Quoted</h1>
        <div className="absolute right-4 top-4 bg-gray-700 p-2 rounded-lg">
          <p className="text-white text-lg font-semibold">Score: {score}</p>
        </div>
      </header>
      <p className="text-center text-gray-400 mb-2 max-w-lg md:text-lg">
        Choose the author you believe wrote the quote below:
      </p>
      <div className="mt-4 bg-gray-700 shadow-md rounded-lg p-6 max-w-2xl w-full mb-8">
        <p className="text-gray-400 text-sm italic md:text-lg">{`"${passage?.passage}"`}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
        {authors?.map((author) => (
          <AuthorCard
            key={author.id}
            author={author}
            correctAuthor={passage.author}
            handleAnswer={handleAnswer}
          />
        ))}
      </div>
    </main>
  );
}
