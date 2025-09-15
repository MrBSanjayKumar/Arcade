const PRODUCTS = [
  {
    id: "g1",
    title: "Neon Drift",
    genre: "Racing",
    price: 799,
    desc: "Fast-paced synthwave racing with neon tracks.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
  },
  {
    id: "g2",
    title: "Dungeon Echoes",
    genre: "RPG",
    price: 1299,
    desc: "Epic dungeon-crawling single player RPG with deep story.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420"
  },
  {
    id: "g3",
    title: "Skyfront Siege",
    genre: "Strategy",
    price: 499,
    desc: "Tactical fleet battles in the skies. Build. Command. Conquer.",
    img: "https://images.unsplash.com/photo-1542826438-3c9b42f5c9b1"
  },
  {
    id: "g4",
    title: "Pixel Pals",
    genre: "Casual",
    price: 199,
    desc: "Cute pixel pet-raising casual game for all ages.",
    img: "https://images.unsplash.com/photo-1528747045269-390fe33c19b5"
  },
  {
    id: "g5",
    title: "Apex Warriors",
    genre: "Action",
    price: 1499,
    desc: "High-octane action with competitive multiplayer modes.",
    img: "https://images.unsplash.com/photo-1549975206-3c9f3d6f6d5f"
  },
  {
    id: "g6",
    title: "Mystic Garden",
    genre: "Puzzle",
    price: 249,
    desc: "Relaxing garden puzzles with calming visuals.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    id: "g7",
    title: "Galactic Trader",
    genre: "Simulation",
    price: 999,
    desc: "Trade, explore and build your galactic empire.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: "g8",
    title: "Shadow Runner",
    genre: "Action",
    price: 899,
    desc: "Stealth action across cyberpunk rooftops.",
    img: "https://images.unsplash.com/photo-1511511458043-7f3d00f1f7b3"
  },
  {
    id: "g9",
    title: "Cyber Clash",
    genre: "Shooter",
    price: 1099,
    desc: "Fast-paced cyberpunk FPS with futuristic weapons.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f"
  },
  {
    id: "g10",
    title: "Kingdom Forge",
    genre: "Strategy",
    price: 1299,
    desc: "Build and defend your medieval kingdom against invaders.",
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413"
  },
  {
    id: "g11",
    title: "Lost Realms",
    genre: "Adventure",
    price: 699,
    desc: "Explore mysterious islands filled with puzzles and secrets.",
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e"
  },
  {
    id: "g12",
    title: "Mech Arena",
    genre: "Action",
    price: 1599,
    desc: "Multiplayer robot battles with full mech customization.",
    img: "https://images.unsplash.com/photo-1558981403-c5f9891a29c0"
  },
  {
    id: "g13",
    title: "Frozen Tides",
    genre: "RPG",
    price: 1199,
    desc: "An epic role-playing journey through icy lands and dark magic.",
    img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee"
  },
  {
    id: "g14",
    title: "Pixel Raiders",
    genre: "Arcade",
    price: 299,
    desc: "Retro-inspired dungeon crawling with pixel graphics.",
    img: "https://images.unsplash.com/photo-1611605698335-8b06fbc168a1"
  },
  {
    id: "g15",
    title: "Starlight Odyssey",
    genre: "Simulation",
    price: 999,
    desc: "Explore distant galaxies, mine resources, and expand colonies.",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
  },
  {
    id: "g16",
    title: "Battle Rhythm",
    genre: "Music",
    price: 499,
    desc: "Action-packed rhythm battles synced with EDM tracks.",
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947"
  },
  {
    id: "g17",
    title: "Crystal Quest",
    genre: "Puzzle",
    price: 349,
    desc: "Solve magical crystal puzzles to unlock ancient powers.",
    img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
  },
  {
    id: "g18",
    title: "Desert Rally",
    genre: "Racing",
    price: 899,
    desc: "Extreme off-road rally racing across desert landscapes.",
    img: "https://images.unsplash.com/photo-1502877828070-33c17c72f3d1"
  },
  {
    id: "g19",
    title: "Vampire’s Veil",
    genre: "Horror",
    price: 1299,
    desc: "A dark gothic horror adventure with vampires and curses.",
    img: "https://images.unsplash.com/photo-1549921296-3a48a5e4f5b6"
  },
  {
    id: "g20",
    title: "Neural Nexus",
    genre: "Sci-Fi",
    price: 1399,
    desc: "Hack into AI-controlled cities in this cyber sci-fi thriller.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    id: "g21",
    title: "Jungle Mayhem",
    genre: "Action",
    price: 799,
    desc: "Survive wild jungles filled with dangerous beasts and traps.",
    img: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6"
  },
  {
    id: "g22",
    title: "Asteroid Miner",
    genre: "Simulation",
    price: 999,
    desc: "Mine asteroids for rare resources and expand your fleet.",
    img: "https://images.unsplash.com/photo-1581090700227-4c4d7e84b2e1"
  },
  {
    id: "g23",
    title: "Dragonspire",
    genre: "RPG",
    price: 1499,
    desc: "Defeat dragons and claim the throne in this epic RPG.",
    img: "https://images.unsplash.com/photo-1611606063069-6c4b857af1db"
  },
  {
    id: "g24",
    title: "Retro Racer X",
    genre: "Arcade",
    price: 399,
    desc: "Classic 80s-inspired arcade racing fun.",
    img: "https://images.unsplash.com/photo-1518552718880-9b67c70f24d3"
  },
  {
    id: "g25",
    title: "Dark Horizon",
    genre: "Sci-Fi",
    price: 1299,
    desc: "Fight alien invasions on distant planets with your crew.",
    img: "https://images.unsplash.com/photo-1473929731328-75c9d1e63d18"
  },
  {
    id: "g26",
    title: "Farmville Next",
    genre: "Casual",
    price: 299,
    desc: "Relax and build your dream farm with friends.",
    img: "https://images.unsplash.com/photo-1476231790875-016a80c274f3"
  },
  {
    id: "g27",
    title: "Titan’s Wrath",
    genre: "Action",
    price: 1599,
    desc: "Face colossal titans in this hack-and-slash adventure.",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
  },
  {
    id: "g28",
    title: "Haunted Harbor",
    genre: "Horror",
    price: 1199,
    desc: "Survive ghost ships and cursed waters.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: "g29",
    title: "Sky Kingdoms",
    genre: "Strategy",
    price: 1399,
    desc: "Rule floating islands and wage wars among the skies.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    id: "g30",
    title: "Zombie Carnival",
    genre: "Shooter",
    price: 899,
    desc: "Blast zombies in a creepy carnival full of traps.",
    img: "https://images.unsplash.com/photo-1549921296-3a48a5e4f5b6"
  }
];
export default PRODUCTS;
