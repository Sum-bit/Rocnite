export type Club = {
  id: string;
  name: string;
  vibe: string;
  area: string;
  entry: number;
  table: number;
  capacity: number;
  availability: "Filling Fast" | "Available" | "Almost Full";
  image: string;
  tags: string[];
  guaranteed?: boolean;
  vip?: boolean;
};

export const clubs: Club[] = [
  {
    id: "hardrock-jw-marriot",
    name: "Hard Rock",
    vibe: "Commercial · Bollywood · Hip-Hop",
    area: "JW Marriot",
    entry: 2000,
    table: 15000,
    capacity: 78,
    availability: "Filling Fast",
    image: "/images/Hardrock.jpg",
    tags: ["Rooftop", "Bollywood"],
    guaranteed: true,
    vip: true,
  },
  {
    id: "miami-baner",
    name: "Mi-A-Mi",
    vibe: "Afro House · Deep Tech",
    area: "Baner",
    entry: 1500,
    table: 12000,
    capacity: 55,
    availability: "Available",
    image: "/images/Mi-A-Mi.jpg",
    tags: ["Open Air", "Tech House"],
    guaranteed: true,
  },
  {
    id: "penthouze-koregaon-park",
    name: "Penthouze",
    vibe: "EDM · Open Format",
    area: "Koregaon Park",
    entry: 2500,
    table: 20000,
    capacity: 92,
    availability: "Almost Full",
    image: "/images/Penthouze.jpg",
    tags: ["Skybar", "EDM"],
    guaranteed: true,
    vip: true,
  },
  {
    id: "mix-at-36-mills",
    name: "MIX@36",
    vibe: "Techno · Underground",
    area: "The Mills",
    entry: 1800,
    table: 14000,
    capacity: 60,
    availability: "Available",
    image: "/images/MIX@36.jpg",
    tags: ["Underground", "Techno"],
    guaranteed: true,
  },
  {
    id: "house-of-medici-westin",
    name: "House of Medici",
    vibe: "House · Disco · Funk",
    area: "Westin Koregaon Park",
    entry: 1200,
    table: 10000,
    capacity: 42,
    availability: "Available",
    image: "/images/House of Medici.jpg",
    tags: ["Disco", "House"],
  },
  {
    id: "elrow-kalyani-nagar",
    name: "Elrow",
    vibe: "Hip-Hop · R&B",
    area: "Kalyani Nagar",
    entry: 2200,
    table: 18000,
    capacity: 85,
    availability: "Filling Fast",
    image: "/images/Elrow.jpg",
    tags: ["Hip-Hop", "Premium"],
    vip: true,
  },
];

export const events = [
  {
    id: "sat-saturate",
    title: "SATURATE — Saturday Special",
    club: "NEON Koregaon Park",
    date: "Every Saturday",
    dj: "DJ Aastha + Special Guest",
    cover: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    tag: "Saturday",
    price: 2500,
  },
  {
    id: "ladies-glow",
    title: "GLOW — Ladies Night",
    club: "Voyage Lounge",
    date: "Every Wednesday",
    dj: "Resident Selectors",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    tag: "Ladies Night",
    price: 0,
  },
  {
    id: "halo-orbit",
    title: "ORBIT — Sunset to Sunrise",
    club: "HALO Skybar",
    date: "Fri 31 May",
    dj: "Anish Sood",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    tag: "Headliner",
    price: 1800,
  },
  {
    id: "mist-cellar",
    title: "CELLAR — Pure Techno",
    club: "MIST",
    date: "Fri 7 Jun",
    dj: "BLOT! (live)",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
    tag: "DJ Night",
    price: 2000,
  },
  {
    id: "lumen-disco",
    title: "DISCOTHEQUE",
    club: "Lumen",
    date: "Sat 8 Jun",
    dj: "Kohra · Stalvart John",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    tag: "Saturday",
    price: 1500,
  },
  {
    id: "obsidian-rap",
    title: "BARS — Hip-Hop Live",
    club: "Obsidian",
    date: "Sat 15 Jun",
    dj: "Naezy + Resident",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    tag: "Live",
    price: 2200,
  },
];

export const vipTiers = [
  {
    name: "Silver Booth",
    price: 10000,
    seats: "4–6 guests",
    perks: ["Reserved booth", "1 bottle included", "Skip the queue", "Welcome shot round"],
    accent: "from-white/30 to-white/5",
  },
  {
    name: "Gold Lounge",
    price: 20000,
    seats: "6–10 guests",
    perks: ["Premium lounge", "2 bottles included", "Dedicated host", "Guaranteed entry +4", "Hookah on the house"],
    accent: "from-amber-300 to-yellow-600",
    highlight: true,
  },
  {
    name: "Platinum Cabana",
    price: 40000,
    seats: "10–16 guests",
    perks: ["Private cabana", "4 premium bottles", "Dedicated server + security", "DJ shoutout", "Birthday cake & sparklers"],
    accent: "from-fuchsia-400 to-violet-600",
  },
];