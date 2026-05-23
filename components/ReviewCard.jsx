import Stars from './Stars';

export default function ReviewCard({ r }) {
  return (
    <article className="review-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="book-ref">on <strong>{r.book}</strong></span>
        <Stars n={r.stars} />
      </div>
      <h4>{r.title}</h4>
      <p className="body">{r.body}</p>
      <div className="byline">
        <span className="avatar">{r.member.split(" ").map(w => w[0]).slice(0, 2).join("")}</span>
        <span className="name">{r.member}</span>
        <span className="date">{r.date}</span>
      </div>
    </article>
  );
}
