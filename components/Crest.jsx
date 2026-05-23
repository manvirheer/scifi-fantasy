export default function Crest({ children, subtle, glyph = "✦" }) {
  return (
    <span className={"crest" + (subtle ? " subtle" : "")}>
      <span className="ornament left">{glyph}</span>
      <span>{children}</span>
      <span className="ornament right">{glyph}</span>
    </span>
  );
}
