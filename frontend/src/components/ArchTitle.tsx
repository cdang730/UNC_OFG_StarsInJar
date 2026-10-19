type Props = { text: string };

export default function ArchTitle({ text }: Props) {
  return (
    <svg className="arch-title" viewBox="0 0 600 540" role="img" aria-label={text}>
      <defs>
        <path id="arch" d="M 92 397 A 230 230 0 1 1 508 397" />
      </defs>
      <text>
        <textPath href="#arch" startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
}