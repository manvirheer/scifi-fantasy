export default function DividerRule({ glyph = "✦ ✧ ✦" }) {
  return (
    <div className="divider-rule">
      <span className="line" />
      <span className="glyph">{glyph}</span>
      <span className="line" />
    </div>
  );
}
