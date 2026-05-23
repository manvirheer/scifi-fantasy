export const CLUB = {
  name: "SFU Sci-Fi & Fantasy Book Club",
  short: "SFU SFF",
  cadence: "First Friday of each month",
  email: "sff-club@sfu.ca",
  // TODO: paste the real Discord invite here
  discord: "https://discord.gg/INVITE_HERE",
  sfss: "https://go.sfss.ca/clubs/885/info",
  feedback: "https://forms.gle/Br4CoKCqNPr4tHFo7",
  execs: [
    { role: "President",      name: "Yahia" },
    { role: "Vice President", name: "Jen" },
    { role: "Executive",      name: "RetRet",  reading: "Wuthering Heights" },
    { role: "Executive",      name: "Kath",    reading: "Self-Reference Engine" },
  ],
};

export const CURRENT_READ = {
  title: "The Left Hand of Darkness",
  author: "Ursula K. Le Guin",
  year: 1969,
  pages: 304,
  genre: "Soft sci-fi · Anthropological",
  cover: { bg: "linear-gradient(155deg, #0b1d3a 0%, #1e3a6b 55%, #4a6fa5 100%)", solid: "#0b1d3a", fg: "#f0e9d4" },
  spineLabel: "GETHEN · 1969 · LE GUIN",
  blurb: "An envoy from a galactic federation arrives alone on the ice-bound world of Gethen, where the inhabitants are neither man nor woman. Equal parts political thriller and meditation on gender, friendship, and what it means to be foreign on someone else's planet.",
  syn: "A foundational New Wave novel the club has been circling for a while. Expect long winter chapters, long political arguments, and one of the great walks across the ice in all of science fiction.",
  // ONE meeting per book, on the first Friday of the next month.
  meeting: { when: "Fri Jun 5, 2026 · 6:00pm", place: "Halpern Centre, Room 126" },
  reading: { from: "May 1, 2026", to: "May 31, 2026", target: "~10 pages a day" },
  questions: [
    "Le Guin called this a thought experiment, not a prediction. What is the experiment, and where does it stop being neutral?",
    "Estraven's loyalty is the engine of the second half. Is it loyalty to Genly, to Gethen, or to something else entirely?",
    "The Gethenian creation myths sit between chapters. Do they read as folklore, as scripture, or as something the book refuses to label?",
    "If you removed the cold from this novel - the ice, the wind, the months of darkness - what is left of the politics?",
    "Compare Genly's first report (Ch. 7) to his closing letter. What has the planet done to him, and what has he failed to learn?",
  ],
};

export const PAST_READS = [
  { title: "Piranesi",            author: "Susanna Clarke",     bg: "linear-gradient(160deg,#1c1f2e,#3b4863)",      solid: "#1c1f2e", fg: "#e8e2d0", spine: "CLARKE · 2020" },
  { title: "A Wizard of Earthsea",author: "Ursula K. Le Guin",  bg: "linear-gradient(155deg,#2d1810,#7a3818)",      solid: "#2d1810", fg: "#f4e2c4", spine: "LE GUIN · 1968" },
  { title: "The Fifth Season",    author: "N. K. Jemisin",      bg: "linear-gradient(150deg,#1a1209,#4a2410 60%,#a04018)", solid: "#1a1209", fg: "#fef3c7", spine: "JEMISIN · 2015" },
  { title: "Children of Time",    author: "Adrian Tchaikovsky", bg: "linear-gradient(155deg,#0f2818,#1f5a3a)",      solid: "#0f2818", fg: "#dcfce7", spine: "TCHAIKOVSKY · 2015" },
  { title: "The Goblin Emperor",  author: "Katherine Addison",  bg: "linear-gradient(160deg,#1a0f2e,#3d1f5a)",      solid: "#1a0f2e", fg: "#e9d5ff", spine: "ADDISON · 2014" },
  { title: "Annihilation",        author: "Jeff VanderMeer",    bg: "linear-gradient(160deg,#0a1a0f,#1a4028 70%,#3d6b3d)", solid: "#0a1a0f", fg: "#d9f99d", spine: "VANDERMEER · 2014" },
];

export const EVENTS = [
  {
    id: "e1",
    tag: "Book of the Month",
    title: "The Left Hand of Darkness · discussion",
    body: "We talk through May's book. Show up even if you didn't finish - half the fun is hearing where everyone got to. Snacks provided.",
    day: 5, mon: "Jun", dow: "Fri",
    time: "6:00pm – 8:00pm",
    place: "Halpern Centre, Room 126",
    rsvp: 22, cap: 30,
  },
  {
    id: "e2",
    tag: "Movie Night",
    title: "Solaris (1972)",
    body: "Tarkovsky's slow, planet-sized grief. We're projecting on the wall in the lounge - late start because it runs 2h 47m and you should not rush it. Snacks in the lobby at 7.",
    day: 13, mon: "Jun", dow: "Sat",
    time: "7:30pm – 11:00pm",
    place: "SFU SUB Lounge",
    rsvp: 14, cap: 40,
  },
  {
    id: "e3",
    tag: "Short Story Saturday",
    title: "Ted Chiang · Story of Your Life",
    body: "30 pages, 90 minutes of arguing about determinism. Read it before you come or you'll be lost in the first ten minutes - we're not recapping.",
    day: 20, mon: "Jun", dow: "Sat",
    time: "2:00pm – 4:00pm",
    place: "Bennett Library, 7th floor",
    rsvp: 11, cap: 18,
  },
  {
    id: "e4",
    tag: "Buddy Read · kickoff",
    title: "Dune (Frank Herbert)",
    body: "Reading Dune together over six weeks. Pace and check-ins on Discord (#buddy-reads-and-watches). New readers welcome - we'll match you with someone going the same speed.",
    day: 24, mon: "Jun", dow: "Wed",
    time: "Discord only · async",
    place: "#buddy-reads-and-watches",
    rsvp: 19, cap: 50,
  },
  {
    id: "e5",
    tag: "Book of the Month",
    title: "July pick · discussion",
    body: "We discuss whatever wins the June vote. Suggestions go in #book-club-suggestions; ranked-choice ballot the last week of June.",
    day: 3, mon: "Jul", dow: "Fri",
    time: "6:00pm – 8:00pm",
    place: "Halpern Centre, Room 126",
    rsvp: 8, cap: 30,
  },
  {
    id: "e6",
    tag: "Author Q&A",
    title: "Evening with Premee Mohamed",
    body: "The Annual Migration of Clouds author joins us over video for 90 minutes - readings, pre-submitted questions, and as much unstructured chat as we can fit. Free; sign-up required.",
    day: 16, mon: "Jul", dow: "Thu",
    time: "6:30pm – 8:00pm",
    place: "Online · link emailed day-of",
    rsvp: 58, cap: 200,
  },
];

export const REVIEWS = [
  {
    id: "r1", book: "Piranesi", author: "Susanna Clarke", stars: 5,
    title: "A house that thinks it is the world",
    body: "I read this on the train and missed my stop twice. Clarke has done something almost unfair here - the prose looks simple and the structure is not. The slow widening of what Piranesi knows kept me up the whole night I finished it. Genuinely the only book I have re-read this year.",
    member: "Iyla Ndour", date: "May 14, 2026",
  },
  {
    id: "r2", book: "The Fifth Season", author: "N. K. Jemisin", stars: 5,
    title: "Earned every Hugo it got",
    body: "I was suspicious of the second-person and then ate my words by chapter four. The thing that floored me on re-read is how cleanly the structure works - once you know, every scene means twice. Bring tissues to the discussion.",
    member: "Marcus Wen", date: "Apr 28, 2026",
  },
  {
    id: "r3", book: "A Wizard of Earthsea", author: "Ursula K. Le Guin", stars: 4,
    title: "Quieter than I remembered",
    body: "Re-read for the first time since high school. The pacing is so much slower than modern fantasy and that's its whole point - Ged's pride has to have time to settle into shame before the chase makes sense. The shadow on the open water is one of the best images in the genre.",
    member: "Pria K.", date: "Apr 12, 2026",
  },
  {
    id: "r4", book: "Children of Time", author: "Adrian Tchaikovsky", stars: 4,
    title: "Spiders deserved better PR",
    body: "Did not expect to spend a Friday rooting for arachnids. The human chapters drag a little in the middle third and I'm willing to forgive that for what Tchaikovsky pulls off with the spider civilization. I would read four more of these.",
    member: "Devin O'Hara", date: "Apr 4, 2026",
  },
  {
    id: "r5", book: "The Goblin Emperor", author: "Katherine Addison", stars: 5,
    title: "A book that is kind to you",
    body: "Maia is a protagonist who is consistently treated badly by the world and consistently chooses to be decent anyway. There's a name-recall scene a third of the way in that is one of the most moving things I've read in fantasy. Comfort book of the year.",
    member: "Sara El-Amin", date: "Mar 22, 2026",
  },
  {
    id: "r6", book: "Annihilation", author: "Jeff VanderMeer", stars: 3,
    title: "Beautiful, and I'm not sure I liked it",
    body: "The atmosphere is unreal - the lighthouse, the tower, the whole rotting-orchid quality of the prose. I bounced off the surveyor as a character and I think the book wanted that. Still arguing with myself about the ending two weeks later, which probably means it worked.",
    member: "Yui Hashimoto", date: "Mar 10, 2026",
  },
];

export const FAQ = [
  { q: "Do I have to read the book?",     a: "Nope. Show up even if you got 30 pages in and bailed - half the fun is hearing why people stopped or kept going." },
  { q: "Is it free?",                     a: "Yes. SFSS-registered, no dues. We just ask you register through SFSS so the club stays officially active." },
  { q: "Can I just show up?",             a: "Yes. Drop-in welcome at any meeting. Discord helps but isn't required." },
  { q: "Do I need to be an SFU student?", a: "No - students, alumni, and friends of SFU students are all welcome." },
];

export const NEW_HERE_STEPS = [
  { n: 1, title: "Join the Discord",      body: "Where most of the chatter happens - current-read channels, buddy reads, recommendations, and a librarian bot." },
  { n: 2, title: "Register through SFSS", body: "Takes 30 seconds. Keeps us officially active and gets you on the email list." },
  { n: 3, title: "Read the rules",        body: "Three short ones: be kind, tag spoilers, no NSFW." },
  { n: 4, title: "Show up to a meeting",  body: "First Friday of each month, 6pm in Halpern 126. Drop in even if you didn't finish the book." },
];

export const IMG = {
  hero:   "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_(1789-1854)_-_Sadak_in_Search_of_the_Waters_of_Oblivion_-_1367_-_Southampton_City_Art_Gallery.jpg?width=900",
  worlds: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_(1789-1854)_-_Twilight_in_the_Woodlands_-_1502_-_Fitzwilliam_Museum.jpg?width=900",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_-_The_Last_Judgement_-_Google_Art_Project.jpg?width=1100",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_-_Belshazzar%27s_Feast_-_Google_Art_Project.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_-_Pandemonium_-_WGA14149.jpg?width=1200",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_(1789-1854)_-_Adam_and_Eve_Entertaining_the_Angel_Raphael_-_KIRMG-17_-_Kirkcaldy_Galleries.jpg?width=1200",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_(1789-1854)_-_Joshua_commanding_the_Sun_to_stand_still_-_WA1936.229_-_Ashmolean_Museum.jpg?width=1200",
  ],
};

export const WORLDS = [
  { where: "Area X",              what: "the tower that goes down",        src: "Annihilation" },
  { where: "Earthsea",            what: "the open ocean, the shadow",      src: "A Wizard of Earthsea" },
  { where: "The Halls",           what: "hall after hall after hall",      src: "Piranesi" },
  { where: "The Stillness",       what: "a continent that wants you dead", src: "The Fifth Season" },
  { where: "Kern's World",        what: "a planet inherited by spiders",   src: "Children of Time" },
  { where: "Untheileneise Court", what: "a court of small kindnesses",     src: "The Goblin Emperor" },
];
