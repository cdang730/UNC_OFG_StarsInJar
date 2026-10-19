type StarProps = {
  color: string;
  size?: number;
  x?: number;       // only used when nested inside another <svg> (the jar)
  y?: number;
  rotate?: number;  // degrees
};

// 10 points: even index = outer tip, odd index = inner dent
function starPoints(cx = 50, cy = 50, outer = 46, inner = 24): [number, number][] {
  return Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  });
}

const pts = starPoints();
const outline = pts.map((p) => p.join(",")).join(" ");

export default function Star({ color, size = 40, x = 0, y = 0, rotate = 0 }: StarProps) {
  return (
    <svg x={x} y={y} width={size} height={size} viewBox="0 0 100 100" overflow="visible">
      <g transform={`rotate(${rotate} 50 50)`}>
        {/* base shape; the stroke rounds the corners so it looks puffy */}
        <polygon points={outline} fill={color} stroke={color} strokeWidth="4" strokeLinejoin="round" />
        {/* facets */}
        {pts.map((p, i) => {
          const next = pts[(i + 1) % 10];
          const light = i % 2 === 0;
          return (
            <polygon
              key={i}
              points={`50,50 ${p.join(",")} ${next.join(",")}`}
              fill={light ? "#ffffff" : "#000000"}
              fillOpacity={light ? 0.3 : 0.14}
            />
          );
        })}
      </g>
    </svg>
  );
}