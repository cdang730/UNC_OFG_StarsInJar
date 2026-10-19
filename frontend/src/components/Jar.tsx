import type { MockStar } from "../data/mock";

type JarProps = { stars: MockStar[]; shaking: boolean };

const JAR_PATH =
  "M95 50 L205 50 L205 75 C205 92 258 92 258 135 L258 350 Q258 388 220 388 L80 388 Q42 388 42 350 L42 135 C42 92 95 92 95 75 Z";

export default function Jar({ stars, shaking }: JarProps) {
  return (
    <div className={`jar-box ${shaking ? "shake" : ""}`}>
      <svg viewBox="0 0 300 400" role="img" aria-label="A jar full of origami stars">
        <defs>
          <clipPath id="jar-clip"><path d={JAR_PATH} /></clipPath>
          <linearGradient id="glass" x1="0" x2="1">
            <stop offset="0" stopColor="#dff3ff" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="1" stopColor="#bfe3ff" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="copper" x1="0" x2="1">
            <stop offset="0" stopColor="#b8733a" />
            <stop offset="0.35" stopColor="#f3c58b" />
            <stop offset="0.7" stopColor="#d99256" />
            <stop offset="1" stopColor="#a8622d" />
          </linearGradient>
        </defs>

        {/* 1. back of the glass */}
        <path d={JAR_PATH} fill="url(#glass)" />

        {/* 2. your star pictures, clipped to the jar */}
        <g clipPath="url(#jar-clip)">
          {stars.map((s) => (
            <image
              key={s.id}
              href={s.src}
              x={s.x}
              y={s.y}
              width={s.size}
              height={s.size}
              transform={`rotate(${s.rotate} ${s.x + s.size / 2} ${s.y + s.size / 2})`}
            />
          ))}
        </g>

        {/* 3. glass outline + highlights over the stars */}
        <path d={JAR_PATH} fill="none" stroke="#9ccbe6" strokeWidth="4" />
        <path d="M62 160 L62 330" stroke="#fff" strokeOpacity="0.75" strokeWidth="8" strokeLinecap="round" />
        <path d="M62 345 L62 350" stroke="#fff" strokeOpacity="0.75" strokeWidth="8" strokeLinecap="round" />
        <path d="M240 170 L240 250" stroke="#fff" strokeOpacity="0.45" strokeWidth="5" strokeLinecap="round" />

        {/* 4. copper lid */}
        <rect x="86" y="22" width="128" height="36" rx="8" fill="url(#copper)" stroke="#9a5a28" strokeWidth="2" />
        <path d="M96 34 H204 M96 46 H204" stroke="#9a5a28" strokeOpacity="0.35" strokeWidth="2" />
      </svg>
    </div>
  );
}