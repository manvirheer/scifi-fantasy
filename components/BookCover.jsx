export default function BookCover({ book, spine }) {
  const style = {
    "--cover-bg": book.bg,
    "--cover-fg": book.fg,
    "--cover-bg-solid": book.solid,
    background: book.bg,
    color: book.fg,
  };
  return (
    <div className="book-cover" style={style}>
      <div className="bc-top">
        <span>{spine || book.spineLabel || "SFU · SFF"}</span>
        <span className="stamp">{book.stamp || "★"}</span>
      </div>
      <div>
        <div className="bc-divider" />
        <div className="bc-mid">{book.title}</div>
        <div className="bc-orn">✦ ✧ ✦</div>
        <div className="bc-author">{book.author?.toUpperCase()}</div>
        <div className="bc-divider" />
      </div>
    </div>
  );
}
