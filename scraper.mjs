/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// ignore evefything because this is a MJS file and not a TS file
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as cheerio from 'cheerio';
import { writeFile } from 'fs/promises';

const authors = [
  'stephen-king',
  'jk-rowling',
  'george-rr-martin',
  'dan-brown',
  'john-grisham',
  'jodi-picoult',
  'stephenie-meyer',
  'nicholas-sparks',
  'suzanne-collins',
  'el-james',
  'gillian-flynn',
  'andy-weir',
  'rick-riordan',
  'john-green',
  'angie-thomas',
  'colleen-hoover',
  'kazuo-ishiguro',
  'hp-lovecraft',
  'min-jin-lee',
];

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const parseQuote = (text, author) => ({
  novel: text.split('\n')[8]?.trim(),
  passage: capitalize(text.split('\n')[1]?.trim().replace(/“|”|"/g, '').replaceAll('’', '\'')),
  author,
});

const jsonData = [];

for (const author of authors) {
  const url = `https://www.goodreads.com/quotes/search?q=${author.replaceAll(' ', '+')}&commit=Search`;
  const res = await fetch(url);
  const selector = cheerio.load(await res.text());
  const quotes = selector(".quoteText").map((_, e) => parseQuote(selector(e).text(), author)).get();
  const random = quotes.filter((q) => q.novel).sort(() => Math.random() - Math.random()).slice(0, 10);
  jsonData.push(...random);
}

await writeFile('./quotes.json', JSON.stringify(jsonData, null, 2));
