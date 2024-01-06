"use client";

import { redirect, useSearchParams } from 'next/navigation';

export default function LoseScreen() {
  const score = useSearchParams().get("score");

  if (!score) redirect("/");

  return (
    <main key="1" className="dark flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <header className="flex justify-center w-full max-w-2xl items-center mb-4">
        <h1 className="text-4xl font-bold text-white">Quoted</h1>
      </header>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold text-red-500">You Lost</h2>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-white text-2xl font-semibold">Your Score: {score}</p>
        </div>
        <a href="/">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Try Again</button>
        </a>
      </div>
    </main>
  );
}
