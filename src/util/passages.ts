import { type AuthorID } from './authors';

export interface Passage {
  novel: string;
  year: number;
  passage: string;
  author: AuthorID;
}

export const PASSAGES: Passage[] = [
  {
    novel: 'Salem\'s Lot',
    year: 1975,
    passage: 'A flash of red caught his eye off to the left, and when he glanced that way, he felt a burst of pleasure and recognition. A large red barn stood on a hill far across a rising field of timothy and clover, a barn with a cupola painted white--even at this distance he could see the sun gleam on the weather vane atop that cupola. It had been there then and was still here now. It looked exactly the same. Maybe it was going to be all right after all. Then the trees blotted it out.',
    author: 'stephen-king'
  },
  {
    novel: 'It',
    year: 1986,
    passage: 'Smells of dirt and wet and long-gone vegetables would merge into one unmistakable ineluctable smell, the smell of the monster, the apotheosis of all monsters. It was the smell of something for which he had no name: the smell of It, crouched and lurking and ready to spring. A creature which would eat anything but which was especially hungry for boymeat.',
    author: 'stephen-king'
  },
  {
    novel: 'The Running Grave',
    year: 2023,
    passage: 'He opened his damp eyes again to stare at the cross on the altar. He might not believe, but the cross meant something to him, nonetheless. It stood for Ted and Joan, for order and stability, but also for the unknowable and unresolvable, for the human craving for meaning in chaos, and for the hope of something beyond the world of pain and endless striving. Some mysteries were eternal and unresolvable by man, and there was relief in accepting that, in admitting it. Death, love, the endless complexity of human beings: only a fool would claim to fully understand any of them.',
    author: 'jk-rowling'
  },
  {
    novel: 'A Game of Thrones',
    year: 1996,
    passage: 'Let him grow taller , she asked the gods. Let him know sixteen, and twenty, and fifty. Let him grow as tall as his father, and hold his own son in his arms. Please, please , please. As she watched him, this tall young man with the new beard and the direwolf prowling at his heels, all she could see was the babe they had laid at her breast at Riverrun, so long ago.',
    author: 'george-rr-martin'
  },
  {
    novel: 'The Da Vinci Code',
    year: 2003,
    passage: 'History is always written by the winners. When two cultures clash, the loser is obliterated, and the winner writes the history books-books which glorify their own cause and disparage the conquered foe. As Napoleon once said, \'What is history, but a fable agreed upon?\'',
    author: 'dan-brown'
  },
  {
    novel: 'The Firm',
    year: 1991,
    passage: 'When you were in law school you had some noble idea of what a lawyer should be. A champion of individual rights; a defender of the Constitution; a guardian of the oppressed; an advocate for your client\'s principles. Then after you practice for six months you realize we\'re nothing but hired guns. Mouthpieces for sale to the highest bidder, available to anybody, any crook, any sleazebag with enough money to pay our outrageous fees. Nothing shocks you. It\'s supposed to be an honorable profession, but you\'ll meet so many crooked lawyers you\'ll want to quit and find an honest job. Yeah, Mitch, you\'ll get cynical. And it\'s sad, really.',
    author: 'john-grisham'
  },
  {
    novel: 'My Sister\'s Keeper',
    year: 2004,
    passage: 'There should be a statute of limitation on grief. A rulebook that says it is all right to wake up crying, but only for a month. That after 42 days you will no longer turn with your heart racing, certain you have heard her call out your name. That there will be no fine imposed if you feel the need to clean out her desk; take down her artwork from the refrigerator; turn over a school portrait as you pass - if only because it cuts you fresh again to see it. That it\'s okay to measure the time she has been gone, the way we once measured her birthdays.',
    author: 'jodi-picoult'
  },
  {
    novel: 'Twilight',
    year: 2005,
    passage: 'The right thing isn\'t always real obvious. Sometimes the right thing for one person is the wrong thing for someone else. So...good luck figuring that out.',
    author: 'stephenie-meyer'
  },
  {
    novel: 'The Notebook',
    year: 1996,
    passage: 'They didn\'t agree on much. In fact, they didn\'t agree on anything. They fought all the time and challenged each other ever day. But despite their differences, they had one important thing in common. They were crazy about each other.',
    author: 'nicholas-sparks'
  },
  {
    novel: 'The Hunger Games',
    year: 2008,
    passage: 'And while I was talking, the idea of actually losing Peeta hit me again and I realized how much I don\'t want him to die. And it\'s not about the sponsors. And it\'s not about what will happen when we get home. And it\'s not just that I don\'t want to be alone. It\'s him. I do not want to lose the boy with the bread.',
    author: 'suzanne-collins'
  },
  {
    novel: 'Fifty Shades of Grey',
    year: 2011,
    passage: 'Drawing up my knees, I fold in on myself. I want to make myself as small as possible. Perhaps this nonsensical pain will be smaller the smaller I am. Placing my head on my knees, I let the irrational tears fall unrestrained. I am crying over the loss of something I never had. How ridiculous.',
    author: 'el-james'
  },
  {
    novel: 'Gone Girl',
    year: 2012,
    passage: 'It\'s a very difficult era in which to be a person, just a real, actual person, instead of a collection of personality traits selected from an endless Automat of characters.',
    author: 'gillian-flynn'
  },
  {
    novel: 'The Martian',
    year: 2011,
    passage: 'But really, they did it because every human being has a basic instinct to help each other out. It might not seem that way sometimes, but it\'s true.',
    author: 'andy-weir'
  },
  {
    novel: 'The Lightning Thief',
    year: 2005,
    passage: 'All I could think of was that the teachers must\'ve found the illegal stash of candy I\'d been selling out of my dorms room. Or maybe they\'d realized I got my Essay on Tom Sawyer from the Internet without ever reading the book and now they were going to take away my grade. Or worse, they were going to make me read the book.',
    author: 'rick-riordan'
  },
  {
    novel: 'The Fault in Our Stars',
    year: 2012,
    passage: 'I\'m in love with you, and I\'m not in the business of denying myself the simple pleasure of saying true things. I\'m in love with you, and I know that love is just a shout into the void, and that oblivion is inevitable, and that we\'re all doomed and that there will come a day when all our labor has been returned to dust, and I know the sun will swallow the only earth we\'ll ever have, and I am in love with you.',
    author: 'john-green'
  },
  {
    novel: 'The Hate U Give',
    year: 2017,
    passage: 'Daddy once told me there\'s a rage passed down to every black man from his ancestors, born the moment they couldn\'t stop the slave masters from hurting their families. Daddy also said there\'s nothing more dangerous than when that rage is activated.',
    author: 'angie-thomas'
  },
  {
    novel: 'It Ends with Us',
    year: 2016,
    passage: 'Cycles exist because they are excruciating to break. It takes an astronomical amount of pain and courage to disrupt a familiar pattern. Sometimes it seems easier to just keep running in the same familiar circles, rather than facing the fear of jumping and possibly not landing on your feet.',
    author: 'colleen-hoover'
  },
  {
    novel: 'Never Let Me Go',
    year: 2005,
    passage: 'I keep thinking about this river somewhere, with the water moving really fast. And these two people in the water, trying to hold onto each other, holding on as hard as they can, but in the end it\'s just too much. The current\'s too strong. They\'ve got to let go, drift apart. That\'s how it is with us. It\'s a shame, Kath, because we\'ve loved each other all our lives. But in the end, we can\'t stay together forever.',
    author: 'kazuo-ishiguro'
  },
] as const;
