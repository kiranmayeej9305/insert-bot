import React from 'react';

type Props = {
  message: string;
  createdAt: Date;
  sender: string | null;
};

export default function Bubble({ message, createdAt, sender }: Props) {
  const isChatbot = sender === 'chatbot';

  return (
    <div className={`flex ${isChatbot ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg shadow-md text-sm ${
          isChatbot
            ? 'bg-indigo-500 text-white rounded-tr-none' // Align chatbot messages to the extreme right
            : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-tl-none' // Align customer messages to the left
        }`}
      >
        <p>{message}</p>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block text-right">
          {new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
