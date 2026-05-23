export default function Stars({ n, max = 5 }) {
  return (
    <span className="stars" aria-label={`${n} of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <i key={i} className={i < n ? "" : "off"}>{i < n ? "★" : "☆"}</i>
      ))}
    </span>
  );
}
