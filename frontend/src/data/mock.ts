function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type  MockStar = {
    id: number;
    src: string;
    x: number;
    y: number;
    size: number;
    rotate: number;
};

// Jar interior is roughly x: 45 to 255, y: 135 to 385 in the Jar's 300x400 space.
export function makeMockStars(images: string[], count = 40): MockStar[] {
  if (images.length === 0) return [];
  const rand = mulberry32(7);
  const stars = Array.from({ length: count }, (_, i) => {
    const size = 42 + rand() * 14;
    return {
      id: i,
      src: images[Math.floor(rand() * images.length)],
      x: 48 + rand() * (208 - size),
      y: 140 + (245 - size) * Math.sqrt(rand()),   // sqrt pushes stars toward the bottom
      size,
      rotate: rand() * 360,
    };
  });
  // Lower stars are drawn last, so they overlap the ones behind them like a real pile
  return stars.sort((a, b) => a.y - b.y);
}


export const mockMessage =
  "You make this club feel like home. Thank you for showing up every week!";

export const mockGallery = [
  { id: 1, title: "Welcome Back GBM", date: "Sep 12, 2026", text: "We played icebreakers, met the new members, and folded 100 paper stars together.", colors: ["#7bafd4", "#ffe497", "#fbe0e6"] },
  { id: 2, title: "Craft Night", date: "Sep 26, 2026", text: "Everyone made friendship bracelets while we voted on this semester's service project.", colors: ["#b5e48c", "#ffba9c", "#7197d3"] },
  { id: 3, title: "Volunteer Day", date: "Oct 10, 2026", text: "Spent the morning volunteering together. So many smiles.", colors: ["#7bafd4", "#ffe497", "#f9a8c9"] },
];