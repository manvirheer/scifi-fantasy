const { useState, useEffect, useMemo } = React;

function Crest({ children, subtle, glyph = "✦" }) {
  return (
    <span className={"crest" + (subtle ? " subtle" : "")}>
      <span className="ornament left">{glyph}</span>
      <span>{children}</span>
      <span className="ornament right">{glyph}</span>
    </span>
  );
}

function DividerRule({ glyph = "✦ ✧ ✦" }) {
  return (
    <div className="divider-rule">
      <span className="line" />
      <span className="glyph">{glyph}</span>
      <span className="line" />
    </div>
  );
}

function Stars({ n, max = 5 }) {
  return (
    <span className="stars" aria-label={`${n} of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <i key={i} className={i < n ? "" : "off"}>{i < n ? "★" : "☆"}</i>
      ))}
    </span>
  );
}

const DiscordIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.074.035c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.25.073.073 0 0 0-.074-.035 19.74 19.74 0 0 0-4.885 1.515.066.066 0 0 0-.03.027C.533 9.045-.32 13.579.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.2 14.2 0 0 0 1.226-1.994.075.075 0 0 0-.041-.104 13.1 13.1 0 0 1-1.872-.892.075.075 0 0 1-.007-.125c.126-.094.252-.192.372-.291a.075.075 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .078.009c.12.099.246.198.373.292a.075.075 0 0 1-.006.125 12.3 12.3 0 0 1-1.873.891.075.075 0 0 0-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .031-.056c.5-5.177-.838-9.673-3.548-13.661a.06.06 0 0 0-.03-.028zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const IMG = {
  hero:   "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_(1789-1854)_-_Sadak_in_Search_of_the_Waters_of_Oblivion_-_1367_-_Southampton_City_Art_Gallery.jpg?width=900",
  worlds: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_(1789-1854)_-_Twilight_in_the_Woodlands_-_1502_-_Fitzwilliam_Museum.jpg?width=900",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_-_The_Last_Judgement_-_Google_Art_Project.jpg?width=1100",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_-_Belshazzar%27s_Feast_-_Google_Art_Project.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_-_Pandemonium_-_WGA14149.jpg?width=1200",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_(1789-1854)_-_Adam_and_Eve_Entertaining_the_Angel_Raphael_-_KIRMG-17_-_Kirkcaldy_Galleries.jpg?width=1200",
    "https://commons.wikimedia.org/wiki/Special:FilePath/John_Martin_(1789-1854)_-_Joshua_commanding_the_Sun_to_stand_still_-_WA1936.229_-_Ashmolean_Museum.jpg?width=1200",
  ],
};

function Orrery() {
  const CX = 960;
  const CY = 90;

  const planets = [
    { name: "Mercury", r: 110, pr: 5,   period: 14,  a0: 150 },
    { name: "Venus",   r: 170, pr: 7,   period: 22,  a0: 200 },
    { name: "Earth",   r: 235, pr: 8,   period: 30,  a0: 175 },
    { name: "Mars",    r: 305, pr: 6.5, period: 42,  a0: 215 },
    { name: "Jupiter", r: 395, pr: 18,  period: 70,  a0: 168 },
    { name: "Saturn",  r: 500, pr: 15,  period: 95,  a0: 200, ring: true },
    { name: "Uranus",  r: 600, pr: 11,  period: 130, a0: 158 },
    { name: "Neptune", r: 720, pr: 12,  period: 170, a0: 188 },
  ];

  const rays = [];
  const rayCount = 40;
  for (let i = 0; i < rayCount; i++) {
    const a = (i * 360) / rayCount;
    const tier = i % 4;
    const long = tier === 0;
    const med  = tier === 2;
    const inner = 38;
    const outer = inner + (long ? 60 : med ? 36 : 20);
    rays.push(
      <line
        key={i}
        x1={CX} y1={CY - inner}
        x2={CX} y2={CY - outer}
        stroke="currentColor"
        strokeWidth={long ? 1.6 : med ? 0.9 : 0.6}
        opacity={long ? 0.95 : med ? 0.7 : 0.45}
        transform={`rotate(${a} ${CX} ${CY})`}
        strokeLinecap="round"
      />
    );
  }

  const arrow = (r, angDeg, size = 7) => {
    const a = (angDeg * Math.PI) / 180;
    const x = CX + r * Math.cos(a);
    const y = CY + r * Math.sin(a);
    return (
      <g transform={`translate(${x} ${y}) rotate(${angDeg + 90})`}>
        <path d={`M 0 ${-size} L ${size*0.7} ${size*0.7} L 0 ${size*0.2} L ${-size*0.7} ${size*0.7} Z`} fill="currentColor" opacity="0.9" />
      </g>
    );
  };

  const stars = [
    [60,180,1.3],[140,90,0.8],[210,40,1.0],[290,100,0.7],[80,260,1.1],[40,360,0.9],
    [120,420,1.2],[200,500,0.8],[60,580,1.0],[160,650,0.7],[230,730,1.1],[340,780,0.9],
    [430,820,1.0],[540,860,0.8],[640,890,1.2],[750,920,0.9],[280,330,0.7],[380,260,0.9],
    [460,180,0.8],[550,140,0.6],[660,80,0.7],[770,60,0.5],[180,180,0.6],[340,460,1.3],
    [420,540,0.7],[510,620,1.0],[620,700,0.8],[720,760,1.0],[820,820,0.6],[900,880,0.8],
    [40,500,0.6],[150,560,0.5],[260,610,0.7],[380,660,0.5],[490,720,0.6],[580,790,0.7],
    [780,400,0.5],[700,300,0.6],[820,500,0.5],[900,640,0.6],[860,720,0.5],[940,780,0.4],
    [220,250,0.5],[420,380,0.4],[600,540,0.5],[150,720,0.5],[330,580,0.5],[520,470,0.4],
    [60,720,0.4],[100,820,0.6],[300,860,0.5],[480,930,0.5],[660,960,0.4],[860,960,0.5],
  ];

  return (
    <div className="orrery" aria-hidden="true">
      <svg viewBox="0 0 1000 1000" className="orrery-svg" preserveAspectRatio="xMaxYMin meet">
        <defs>
          <radialGradient id="sun-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" />
            <stop offset="55%"  stopColor="#e8e6e0" />
            <stop offset="100%" stopColor="#7d7a72" />
          </radialGradient>
          <radialGradient id="sun-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="55%"  stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="planet-shade" cx="32%" cy="32%" r="80%">
            <stop offset="0%"   stopColor="#e8e6e0" />
            <stop offset="55%"  stopColor="#8a877f" />
            <stop offset="100%" stopColor="#070707" />
          </radialGradient>
        </defs>

        {stars.map(([x,y,r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="currentColor" opacity={0.35 + (r/3)} />
        ))}

        <circle cx={CX} cy={CY} r={180} fill="url(#sun-halo)" />

        {planets.map((p, i) => (
          <circle
            key={p.name}
            cx={CX} cy={CY} r={p.r}
            fill="none"
            stroke="currentColor"
            strokeWidth={i >= 4 ? 0.9 : 0.7}
            opacity={0.65}
            strokeDasharray={i % 2 === 0 ? "5 7" : "3 7"}
          />
        ))}

        {arrow(170, 130)}
        {arrow(235, 200)}
        {arrow(395, 150)}
        {arrow(500, 175)}
        {arrow(600, 135)}
        {arrow(720, 110)}

        <g className="orrery-sun-rays">{rays}</g>

        <g>
          <circle cx={CX} cy={CY} r={38} fill="url(#sun-grad)" stroke="#ffffff" strokeWidth="1.4" />
        </g>

        {planets.map((p) => (
          <g
            key={p.name}
            className="orrery-orbit"
            style={{
              animation: `orrery-rot ${p.period}s linear infinite`,
              transformOrigin: `${CX}px ${CY}px`,
              transformBox: "view-box",
            }}
            transform={`rotate(${p.a0} ${CX} ${CY})`}
          >
            <g transform={`translate(${CX + p.r} ${CY})`}>
              <circle r={p.pr + 2} fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
              <circle r={p.pr} fill="url(#planet-shade)" stroke="#ffffff" strokeWidth="0.7" />
              <path
                d={`M 0 ${-p.pr} A ${p.pr} ${p.pr} 0 0 1 0 ${p.pr} Z`}
                fill="#0a0805" opacity="0.6"
              />
              {p.ring && (
                <ellipse
                  rx={p.pr + 9} ry={p.pr * 0.38}
                  fill="none" stroke="#ffffff" strokeWidth="1.1" opacity="0.95"
                  transform="rotate(-18)"
                />
              )}
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

const WORLDS = [
  { where: "Area X",              what: "the tower that goes down",        src: "Annihilation" },
  { where: "Earthsea",            what: "the open ocean, the shadow",      src: "A Wizard of Earthsea" },
  { where: "The Halls",           what: "hall after hall after hall",      src: "Piranesi" },
  { where: "The Stillness",       what: "a continent that wants you dead", src: "The Fifth Season" },
  { where: "Kern's World",        what: "a planet inherited by spiders",   src: "Children of Time" },
  { where: "Untheileneise Court", what: "a court of small kindnesses",     src: "The Goblin Emperor" },
];

function WorldsBoard() {
  return (
    <section className="worlds">
      <div className="section-head">
        <div className="row">
          <h2>Worlds we've visited</h2>
          <span className="meta">Scenes from past picks</span>
        </div>
        <Crest subtle glyph="✧">From the shelf</Crest>
      </div>
      <div className="worlds-grid">
        {WORLDS.map((w, i) => (
          <div className="world-tile" key={i}>
            <image-slot
              id={`world-${i + 1}`}
              shape="rounded"
              radius="6"
              src={IMG.worlds[i]}
              placeholder={`Drop a scene · ${w.where.toLowerCase()}`}
            ></image-slot>
            <div className="caption">
              <span className="where">{w.where}</span>
              <span className="what">{w.what}</span>
              <span className="src">from, {w.src}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BookCover({ book, spine }) {
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

function Nav({ page, setPage, dark, setDark }) {
  const links = [
    { id: "home",    label: "Home" },
    { id: "current", label: "Current Read" },
    { id: "reviews", label: "Reviews" },
    { id: "events",  label: "Events" },
  ];
  return (
    <header className="nav">
      <div className="brand" onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
        <div className="brand-mark"><img src="assets/mascot.jpg" alt="" /></div>
        <div className="brand-text">
          <span className="brand-name">SFU SFF Book Club</span>
          <span className="brand-sub">sci-fi &amp; fantasy at Simon Fraser</span>
        </div>
      </div>
      <nav className="nav-links" aria-label="primary">
        {links.map(l => (
          <button
            key={l.id}
            className={"nav-link" + (page === l.id ? " active" : "")}
            onClick={() => setPage(l.id)}
          >
            {page === l.id && <span className="star">✦</span>}
            {l.label}
          </button>
        ))}
        <a
          className="nav-link"
          href={CLUB.discord}
          target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          title="Join the Discord"
        >
          <DiscordIcon /> Discord
        </a>
        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          title={dark ? "Light mode" : "Dark mode"}
          aria-label="Toggle theme"
        >
          {dark
            ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div>
          <Crest subtle glyph="✧">Get in touch</Crest>
          <p>
            <a href={CLUB.discord} target="_blank" rel="noopener noreferrer">Discord</a> ·{" "}
            <a href={CLUB.sfss} target="_blank" rel="noopener noreferrer">SFSS club page</a> ·{" "}
            <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
          </p>
          <p style={{ marginTop: 6 }}>
            <a href={CLUB.feedback} target="_blank" rel="noopener noreferrer">
              Anonymous feedback form →
            </a>
          </p>
        </div>
        <div className="right">
          <Crest subtle glyph="✧">When we meet</Crest>
          <p>First Friday of each month · 6pm · Halpern 126</p>
        </div>
      </div>
      <div className="footer-sub">
        <span>SFU SFF Book Club · Simon Fraser University</span>
        <span>On the unceded territory of the xʷməθkʷəy̓əm, Sḵwx̱wú7mesh, and səlilwətaɬ peoples</span>
      </div>
    </footer>
  );
}

function HomePage({ setPage }) {
  const upcoming = EVENTS.slice(0, 4);
  const featuredReviews = REVIEWS.slice(0, 3);

  return (
    <div>
      <section className="hero">
        <Orrery />
        <div className="hero-text">
          <Crest>Currently reading</Crest>
          <h1>
            A small room.<br/>
            A warm kettle.<br/>
            <em>An entire galaxy</em><br/>
            <span className="magic">on the table.</span>
          </h1>
          <p className="hero-sub">
            SFU's book club for science fiction and fantasy. One book a month, discussed
            on the <strong>first Friday</strong> at 6pm in Halpern 126. Drop in even
            if you haven't finished — most of us haven't either.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a className="btn btn-primary" href={CLUB.discord} target="_blank" rel="noopener noreferrer"
               style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <DiscordIcon /> Join the Discord
            </a>
            <a className="btn" href={CLUB.sfss} target="_blank" rel="noopener noreferrer">
              Register on SFSS →
            </a>
          </div>

          <div className="mascot-panel">
            <div className="img" style={{ backgroundImage: "url(assets/mascot.jpg)" }} />
            <div className="txt">
              <h4>New here?</h4>
              <p>
                Drop in any month, take a seat, accept the snacks. You don't need to
                have finished — or even started — the book. We'd rather see you confused
                than not at all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="current-read">
        <BookCover book={{ ...CURRENT_READ, stamp: "★" }} />
        <div className="cr-body">
          <Crest>Book of the Month · May 2026</Crest>
          <h2 className="cr-title">{CURRENT_READ.title}</h2>
          <div className="cr-author">by <strong>{CURRENT_READ.author}</strong> · {CURRENT_READ.year}</div>
          <p className="cr-syn">{CURRENT_READ.blurb}</p>
          <div className="cr-meta">
            <span><span className="glyph">✦</span> {CURRENT_READ.pages} pages</span>
            <span><span className="glyph">✦</span> {CURRENT_READ.genre}</span>
            <span><span className="glyph">✦</span> discussion {CURRENT_READ.meeting.when}</span>
          </div>
          <div className="cr-cta">
            <button className="btn btn-primary" onClick={() => setPage("current")}>
              More about this book
            </button>
            <button className="btn" onClick={() => setPage("events")}>RSVP for the discussion</button>
          </div>
        </div>
      </section>

      <section className="events-strip">
        <div className="section-head">
          <div className="row">
            <h2>What's next</h2>
            <span className="meta">Upcoming · {upcoming.length} of {EVENTS.length}</span>
          </div>
          <Crest subtle glyph="✧">Events</Crest>
        </div>
        {upcoming.map((e) => (
          <div key={e.id} className="event-row">
            <div className="event-date">
              <span className="d">{String(e.day).padStart(2, "0")}</span>
              <span className="m">{e.mon} · {e.dow}</span>
            </div>
            <div className="event-main">
              <span className="tag">{e.tag}</span>
              <h3>{e.title}</h3>
              <div className="info">
                <span>{e.time}</span>
                <span>·</span>
                <span>{e.place}</span>
              </div>
            </div>
            <button className="event-rsvp" onClick={() => setPage("events")}>
              RSVP ✦
            </button>
          </div>
        ))}
        <div style={{ marginTop: 32, textAlign: "right" }}>
          <button className="btn" onClick={() => setPage("events")}>All events →</button>
        </div>
      </section>

      <DividerRule glyph="✦   ✧   ✦" />

      {/* New here? 4 quick steps */}
      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>New here? Start with these.</h2>
            <span className="meta">Four small steps</span>
          </div>
          <Crest subtle glyph="✧">Getting started</Crest>
        </div>
        <div className="reviews-grid">
          {NEW_HERE_STEPS.map(s => (
            <article key={s.n} className="review-card">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className="avatar" style={{ fontFamily: "var(--font-caps)", fontSize: 12 }}>{s.n}</span>
                <h4 style={{ marginTop: 0 }}>{s.title}</h4>
              </div>
              <p className="body">{s.body}</p>
              {s.n === 1 && (
                <a className="btn" href={CLUB.discord} target="_blank" rel="noopener noreferrer"
                   style={{ alignSelf: "flex-start", marginTop: 8 }}>
                  <DiscordIcon /> Join Discord
                </a>
              )}
              {s.n === 2 && (
                <a className="btn" href={CLUB.sfss} target="_blank" rel="noopener noreferrer"
                   style={{ alignSelf: "flex-start", marginTop: 8 }}>
                  Register →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <DividerRule glyph="✦   ✧   ✦" />

      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>Recent member reviews</h2>
            <span className="meta">Written by members, posted unedited</span>
          </div>
          <Crest subtle glyph="✧">Reviews</Crest>
        </div>
        <div className="reviews-grid">
          {featuredReviews.map(r => <ReviewCard key={r.id} r={r} />)}
        </div>
        <div style={{ marginTop: 32, textAlign: "right" }}>
          <button className="btn" onClick={() => setPage("reviews")}>All reviews →</button>
        </div>
      </section>

      <WorldsBoard />

      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>Past reads</h2>
            <span className="meta">Recently concluded</span>
          </div>
          <Crest subtle glyph="✧">The shelf</Crest>
        </div>
        <div className="past-row">
          {PAST_READS.map((b, i) => (
            <BookCover key={i} book={{ ...b, spineLabel: b.spine }} />
          ))}
        </div>
      </section>

      <DividerRule glyph="✦   ✧   ✦" />

      {/* Execs */}
      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>Run by</h2>
            <span className="meta">Your {new Date().getFullYear()} execs</span>
          </div>
          <Crest subtle glyph="✧">Reach out anytime</Crest>
        </div>
        <div className="reviews-grid">
          {CLUB.execs.map((e, i) => (
            <article key={i} className="review-card">
              <span className="book-ref">{e.role.toUpperCase()}</span>
              <h4 style={{ marginTop: 4 }}>{e.name}</h4>
              {e.reading && (
                <p className="body" style={{ fontStyle: "italic" }}>
                  currently reading <em>{e.reading}</em>
                </p>
              )}
            </article>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-display)", color: "var(--ink-mute)", marginTop: 24, fontStyle: "italic" }}>
          Questions, suggestions, or something we should hear privately? Use the{" "}
          <a href={CLUB.feedback} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
            anonymous feedback form
          </a>.
        </p>
      </section>

      <DividerRule glyph="✦   ✧   ✦" />

      {/* FAQ */}
      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>Quick answers</h2>
            <span className="meta">The basics</span>
          </div>
          <Crest subtle glyph="✧">FAQ</Crest>
        </div>
        <div className="q-list">
          {FAQ.map((f, i) => (
            <div key={i} className="q-item">
              <span className="n">Q{i + 1}</span>
              <span>
                <strong style={{ color: "var(--ink)" }}>{f.q}</strong>
                <br />
                <span style={{ color: "var(--ink-2)" }}>{f.a}</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CurrentPage() {
  const cr = CURRENT_READ;
  return (
    <div>
      <section className="page-head">
        <Crest>Book of the Month · May 2026</Crest>
        <h1>{cr.title}</h1>
        <p className="lede">by {cr.author} · first published {cr.year}. A foundational New Wave novel about coldness, gender, and what foreignness costs both sides.</p>
      </section>

      <section className="cr-full">
        <div>
          <BookCover book={{ ...cr, stamp: "★" }} />
          <div className="cr-stat-row">
            <div className="cr-stat"><span className="k">Pages</span><span className="v">{cr.pages}</span></div>
            <div className="cr-stat"><span className="k">Published</span><span className="v">{cr.year}</span></div>
            <div className="cr-stat"><span className="k">Read by</span><span className="v">{cr.reading.to}</span></div>
            <div className="cr-stat"><span className="k">Target pace</span><span className="v" style={{ fontSize: 17 }}>{cr.reading.target}</span></div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <div>
            <Crest subtle glyph="✧">About the book</Crest>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontStyle: "italic", lineHeight: 1.5, color: "var(--ink-2)", marginTop: 18, maxWidth: "60ch" }}>
              {cr.blurb}
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 17, lineHeight: 1.6, color: "var(--ink-mute)", marginTop: 18, maxWidth: "62ch" }}>
              {cr.syn}
            </p>
          </div>

          <div>
            <div className="section-head">
              <div className="row">
                <h2>Discussion meeting</h2>
                <span className="meta">One per book</span>
              </div>
            </div>
            <div className="sched-item now">
              <span className="num">When</span>
              <span className="title">{cr.meeting.when}</span>
              <span className="when">{cr.meeting.place}</span>
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ink-mute)", marginTop: 18, maxWidth: "62ch" }}>
              Discuss as you read in the Discord <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--gold)" }}>#current-book-reads</code> channels.
              Tag spoilers with <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--gold)" }}>||double pipes||</code>.
            </p>
          </div>

          <div>
            <div className="section-head">
              <div className="row">
                <h2>Discussion questions</h2>
                <span className="meta">Bring one, leave with three</span>
              </div>
            </div>
            <div className="q-list">
              {cr.questions.map((q, i) => (
                <div key={i} className="q-item">
                  <span className="n">Q{i + 1}</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href={CLUB.discord} target="_blank" rel="noopener noreferrer"
               style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <DiscordIcon /> Discuss on Discord
            </a>
            <button className="btn">Add to calendar</button>
            <button className="btn">Submit a question</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ReviewCard({ r }) {
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

function ReviewsPage() {
  const [filter, setFilter] = useState("all");
  const books = useMemo(() => {
    const set = new Set(REVIEWS.map(r => r.book));
    return ["all", ...Array.from(set)];
  }, []);
  const list = filter === "all" ? REVIEWS : REVIEWS.filter(r => r.book === filter);
  const avg = (REVIEWS.reduce((a, r) => a + r.stars, 0) / REVIEWS.length).toFixed(1);

  return (
    <div>
      <section className="page-head">
        <Crest>Member reviews</Crest>
        <h1>What we thought.</h1>
        <p className="lede">
          Reviews are written by members after a Book of the Month wraps. We post them unedited — we only ask you sign your name and avoid spoilers past page one without a warning.
        </p>
        <div style={{ display: "flex", gap: 28, marginTop: 24, fontFamily: "var(--font-caps)", fontSize: 10.5, color: "var(--ink-mute)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          <span>average <strong style={{ color: "var(--gold)", marginLeft: 6, fontSize: 14, fontFamily: "var(--font-display)", fontStyle: "italic", letterSpacing: 0 }}>{avg} ★</strong></span>
          <span>· {REVIEWS.length} reviews</span>
          <span>· {new Set(REVIEWS.map(r => r.member)).size} reviewers</span>
        </div>
      </section>

      {books.length > 3 && (
        <div className="filter-bar">
          {books.map(b => (
            <button
              key={b}
              className={"chip" + (filter === b ? " on" : "")}
              onClick={() => setFilter(b)}
            >
              {b === "all" ? "All" : b}
            </button>
          ))}
        </div>
      )}

      <div className="reviews-grid" style={{ marginTop: books.length > 3 ? 0 : 36 }}>
        {list.map(r => <ReviewCard key={r.id} r={r} />)}
      </div>

      <div className="cta-card" style={{ marginTop: 64 }}>
        <Crest subtle glyph="✧">Write one</Crest>
        <h3>Finished a book with us?</h3>
        <p>
          Write a few honest paragraphs — we'll post them here unedited. Stars optional;
          if you give them, be willing to defend the rating at the next meeting.
        </p>
        <a className="btn btn-accent" href={`mailto:${CLUB.email}?subject=Review submission`}
           style={{ alignSelf: "flex-start", marginTop: 10 }}>
          Submit a review →
        </a>
      </div>
    </div>
  );
}

function EventsPage() {
  const [rsvp, setRsvp] = useState({});
  const toggle = (id) => setRsvp(s => ({ ...s, [id]: !s[id] }));

  return (
    <div>
      <section className="page-head">
        <Crest>Upcoming events · {EVENTS.length} on the calendar</Crest>
        <h1>What we're doing next.</h1>
        <p className="lede">
          Book of the Month discussions are the first Friday of each month. The rest is
          extras: movie nights, short-story Saturdays, buddy reads, occasional author Q&amp;As.
          All free, all drop-in. Mark yourself attending so we know how many chairs to set out.
        </p>
      </section>

      <div className="events-list">
        {EVENTS.map(e => {
          const on = !!rsvp[e.id];
          const cnt = e.rsvp + (on ? 1 : 0);
          return (
            <article key={e.id} className="event-card">
              <div className="e-date">
                <span className="day">{String(e.day).padStart(2, "0")}</span>
                <span className="mon">{e.mon} · 2026</span>
                <span className="dow">{e.dow}</span>
              </div>
              <div className="e-main">
                <span className="e-tag">{e.tag}</span>
                <h3 className="e-title">{e.title}</h3>
                <p className="e-body">{e.body}</p>
                <div className="e-info">
                  <span><span className="glyph">◷</span>{e.time}</span>
                  <span><span className="glyph">✦</span>{e.place}</span>
                </div>
              </div>
              <div className="e-cta">
                <button
                  className={"btn " + (on ? "btn-accent" : "btn-primary")}
                  onClick={() => toggle(e.id)}
                  style={{ minWidth: 150, justifyContent: "center" }}
                >
                  {on ? "✦ You're in" : "RSVP"}
                </button>
                <span className="e-count">{cnt} / {e.cap} attending</span>
              </div>
            </article>
          );
        })}
      </div>

      <DividerRule glyph="✦   ✧   ✦" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 880, marginTop: 32 }}>
        <div className="cta-card" style={{ padding: 28 }}>
          <Crest subtle glyph="✧">Regular cadence</Crest>
          <h3 style={{ fontSize: 24 }}>First Friday · 6pm</h3>
          <p>
            Halpern Centre, Room 126. We start within ten minutes of the hour and
            usually wrap by eight.
          </p>
        </div>
        <div className="cta-card" style={{ padding: 28 }}>
          <Crest subtle glyph="✧">Can't make it?</Crest>
          <h3 style={{ fontSize: 24 }}>Catch up on Discord</h3>
          <p>
            One member writes up the discussion afterwards — it lands in
            <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--gold)", margin: "0 4px" }}>#announcements</code>
            a couple of days later.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const Page = {
    home: HomePage,
    current: CurrentPage,
    reviews: ReviewsPage,
    events: EventsPage,
  }[page];

  return (
    <>
      <div className="cosmos" aria-hidden="true">
        <div className="nebula" />
        <div className="stars" />
      </div>
      <div className="shell">
        <Nav page={page} setPage={setPage} dark={dark} setDark={setDark} />
        <main>
          <Page setPage={setPage} />
        </main>
        <Footer />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
