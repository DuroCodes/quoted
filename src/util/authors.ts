export const AUTHORS = {
  'stephen-king': 'Stephen King',
  'jk-rowling': 'J.K. Rowling',
  'george-rr-martin': 'George R.R. Martin',
  'dan-brown': 'Dan Brown',
  'john-grisham': 'John Grisham',
  'jodi-picoult': 'Jodi Picoult',
  'stephenie-meyer': 'Stephenie Meyer',
  'nicholas-sparks': 'Nicholas Sparks',
  'suzanne-collins': 'Suzanne Collins',
  'el-james': 'E.L. James',
  'gillian-flynn': 'Gillian Flynn',
  'andy-weir': 'Andy Weir',
  'rick-riordan': 'Rick Riordan',
  'john-green': 'John Green',
  'angie-thomas': 'Angie Thomas',
  'colleen-hoover': 'Colleen Hoover',
  'kazuo-ishiguro': 'Kazuo Ishiguro',
  'hp-lovecraft': 'H.P. Lovecraft',
} as const;

export type AuthorID = keyof typeof AUTHORS;
export type AuthorName = typeof AUTHORS[keyof typeof AUTHORS];
export interface Author {
  id: AuthorID;
  name: AuthorName;
}

const shuffle = <T>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

export const randomAuthors = (authorId: AuthorID) => {
  const authors = Object.entries(AUTHORS).filter(([id]) => id !== authorId);
  const shuffled = shuffle(authors).slice(0, 3).map(([id, name]) => ({ id: id as AuthorID, name }));
  return shuffle([...shuffled, { id: authorId, name: AUTHORS[authorId] }])
}
