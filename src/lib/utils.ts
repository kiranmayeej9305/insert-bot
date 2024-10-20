// lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStripeOAuthLink(
  accountType: 'account' | 'chatbot',
  state: string
) {
  return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID}&scope=read_write&redirect_uri=${process.env.NEXT_PUBLIC_URL}${accountType}&state=${state}`;
}

export const extractUUIDFromString = (url: string) => {
  return url.match(
    /^[0-9a-f]{8}-?[0-9a-f]{4}-?[1-5][0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/i
  );
};

export const postToParent = (message: string) => {
  window.parent.postMessage(message, '*');
};

export const extractURLfromString = (url: string) => {
  return url.match(/https?:\/\/[^\s"<>]+/);
};

export const extractEmailsFromString = (text: string) => {
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
};

export const getMonthName = (month: number) => {
  return month === 1
    ? 'Jan'
    : month === 2
    ? 'Feb'
    : month === 3
    ? 'Mar'
    : month === 4
    ? 'Apr'
    : month === 5
    ? 'May'
    : month === 6
    ? 'Jun'
    : month === 7
    ? 'Jul'
    : month === 8
    ? 'Aug'
    : month === 9
    ? 'Sep'
    : month === 10
    ? 'Oct'
    : month === 11
    ? 'Nov'
    : month === 12 && 'Dec';
};
export function truncateStringByBytes(str: string, bytes: number): string {
  const enc = new TextEncoder();
  return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
}
// src/lib/utils.ts
export function convertToAscii(inputString: string) {
  if (!inputString || typeof inputString !== 'string') {
    throw new Error("Invalid input string for convertToAscii");
  }

  // remove non-ascii characters
  const asciiString = inputString.replace(/[^\x00-\x7F]+/g, "");
  return asciiString;
}
