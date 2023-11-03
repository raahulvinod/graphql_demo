let games = [
  { id: '1', title: 'The Legend of Aurora', platform: ['PS5'] },
  { id: '2', title: 'Galactic Odyssey', platform: ['Xbox', 'PC'] },
  { id: '3', title: 'Shadow Realm', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '4', title: 'Super Racer X', platform: ['Switch'] },
  { id: '5', title: 'Space Explorers', platform: ['PS5', 'PC'] },
];

let authors = [
  { id: '1', name: 'Alice Johnson', verified: true },
  { id: '2', name: 'Charlie Brown', verified: false },
  { id: '3', name: 'Ella Davis', verified: true },
];

let reviews = [
  {
    id: '1',
    rating: 8,
    content: 'A fantastic game!',
    author_id: '1',
    game_id: '2',
  },
  {
    id: '2',
    rating: 9,
    content: 'Incredible storyline!',
    author_id: '2',
    game_id: '1',
  },
  {
    id: '3',
    rating: 7,
    content: 'Enjoyable gameplay.',
    author_id: '3',
    game_id: '3',
  },
  { id: '4', rating: 6, content: 'Lots of fun!', author_id: '2', game_id: '4' },
  {
    id: '5',
    rating: 8,
    content: 'Great graphics!',
    author_id: '2',
    game_id: '5',
  },
  {
    id: '6',
    rating: 9,
    content: 'Highly recommended!',
    author_id: '1',
    game_id: '2',
  },
  {
    id: '7',
    rating: 7,
    content: 'Addictive gameplay.',
    author_id: '3',
    game_id: '1',
  },
];

export default { games, authors, reviews };
