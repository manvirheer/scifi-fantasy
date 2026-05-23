export function Crest({ children, subtle, glyph = "✦" }) {
  return <span className={"crest" + (subtle ? " subtle" : "")}><span className="ornament left">{glyph}</span><span>{children}</span><span className="ornament right">{glyph}</span></span>
}

export function DividerRule({ glyph = "✦ ✧ ✦" }) {
  return <div className="divider-rule"><span className="line" /><span className="glyph">{glyph}</span><span className="line" /></div>
}

export function Stars({ n, max = 5 }) {
  return <span className="stars" aria-label={`${n} of ${max} stars`}>{Array.from({ length: max }, (_, i) => <i key={i} className={i < n ? "" : "off"}>{i < n ? "★" : "☆"}</i>)}</span>
}

export function DiscordIcon({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.074.035c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.25.073.073 0 0 0-.074-.035 19.74 19.74 0 0 0-4.885 1.515.066.066 0 0 0-.03.027C.533 9.045-.32 13.579.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.2 14.2 0 0 0 1.226-1.994.075.075 0 0 0-.041-.104 13.1 13.1 0 0 1-1.872-.892.075.075 0 0 1-.007-.125c.126-.094.252-.192.372-.291a.075.075 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .078.009c.12.099.246.198.373.292a.075.075 0 0 1-.006.125 12.3 12.3 0 0 1-1.873.891.075.075 0 0 0-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .031-.056c.5-5.177-.838-9.673-3.548-13.661a.06.06 0 0 0-.03-.028zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
}

export function BookCover({ book, spine }) {
  return (
    <div className="book-cover" style={{ "--cover-bg": book.bg, "--cover-fg": book.fg, "--cover-bg-solid": book.solid, background: book.bg, color: book.fg }}>
      <div className="bc-top"><span>{spine || book.spineLabel || "SFU · SFF"}</span><span className="stamp">{book.stamp || "★"}</span></div>
      <div><div className="bc-divider" /><div className="bc-mid">{book.title}</div><div className="bc-orn">✦ ✧ ✦</div><div className="bc-author">{book.author?.toUpperCase()}</div><div className="bc-divider" /></div>
    </div>
  )
}

export function ReviewCard({ r }) {
  return (
    <article className="review-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="book-ref">on <strong>{r.book}</strong></span><Stars n={r.stars} max={5} /></div>
      <h4>{r.title}</h4>
      <p className="body">{r.body}</p>
      <div className="byline"><span className="avatar">{r.member.split(" ").map(w => w[0]).slice(0, 2).join("")}</span><span className="name">{r.member}</span><span className="date">{r.date}</span></div>
    </article>
  )
}
