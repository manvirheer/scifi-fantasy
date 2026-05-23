import Link from 'next/link';
import Crest from '@/components/Crest';
import DividerRule from '@/components/DividerRule';
import BookCover from '@/components/BookCover';
import ReviewCard from '@/components/ReviewCard';
import Orrery from '@/components/Orrery';
import WorldsBoard from '@/components/WorldsBoard';
import DiscordIcon from '@/components/DiscordIcon';
import FadeIn from '@/components/FadeIn';
import StaggerGroup from '@/components/StaggerGroup';
import StaggerItem from '@/components/StaggerItem';
import { CLUB, CURRENT_READ, PAST_READS, EVENTS, REVIEWS, FAQ, NEW_HERE_STEPS } from '@/lib/data';

export default function HomePage() {
  const upcoming = EVENTS.slice(0, 4);
  const featuredReviews = REVIEWS.slice(0, 3);

  return (
    <div>
      <section className="hero">
        <Orrery />
        <div className="hero-text">
          <FadeIn variant="fadeIn">
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
              <div className="img" style={{ backgroundImage: "url(/assets/mascot.jpg)" }} />
              <div className="txt">
                <h4>New here?</h4>
                <p>
                  Drop in any month, take a seat, accept the snacks. You don't need to
                  have finished — or even started — the book. We'd rather see you confused
                  than not at all.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
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
              <Link className="btn btn-primary" href="/current">
                More about this book
              </Link>
              <Link className="btn" href="/events">RSVP for the discussion</Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="events-strip">
          <div className="section-head">
            <div className="row">
              <h2>What's next</h2>
              <span className="meta">Upcoming · {upcoming.length} of {EVENTS.length}</span>
            </div>
            <Crest subtle glyph="✧">Events</Crest>
          </div>
          <StaggerGroup>
            {upcoming.map((e) => (
              <StaggerItem key={e.id}>
                <div className="event-row">
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
                  <Link className="event-rsvp" href="/events">
                    RSVP ✦
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div style={{ marginTop: 32, textAlign: "right" }}>
            <Link className="btn" href="/events">All events →</Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn variant="fadeIn"><DividerRule glyph="✦   ✧   ✦" /></FadeIn>

      {/* New here? 4 quick steps */}
      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>New here? Start with these.</h2>
            <span className="meta">Four small steps</span>
          </div>
          <Crest subtle glyph="✧">Getting started</Crest>
        </div>
        <StaggerGroup className="reviews-grid">
          {NEW_HERE_STEPS.map(s => (
            <StaggerItem key={s.n}>
              <article className="review-card">
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
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <FadeIn variant="fadeIn"><DividerRule glyph="✦   ✧   ✦" /></FadeIn>

      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>Recent member reviews</h2>
            <span className="meta">Written by members, posted unedited</span>
          </div>
          <Crest subtle glyph="✧">Reviews</Crest>
        </div>
        <StaggerGroup className="reviews-grid">
          {featuredReviews.map(r => (
            <StaggerItem key={r.id}>
              <ReviewCard r={r} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div style={{ marginTop: 32, textAlign: "right" }}>
          <Link className="btn" href="/reviews">All reviews →</Link>
        </div>
      </section>

      <FadeIn>
        <WorldsBoard />
      </FadeIn>

      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>Past reads</h2>
            <span className="meta">Recently concluded</span>
          </div>
          <Crest subtle glyph="✧">The shelf</Crest>
        </div>
        <StaggerGroup className="past-row">
          {PAST_READS.map((b, i) => (
            <StaggerItem key={i}>
              <BookCover book={{ ...b, spineLabel: b.spine }} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <FadeIn variant="fadeIn"><DividerRule glyph="✦   ✧   ✦" /></FadeIn>

      {/* Execs */}
      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>Run by</h2>
            <span className="meta">Your {new Date().getFullYear()} execs</span>
          </div>
          <Crest subtle glyph="✧">Reach out anytime</Crest>
        </div>
        <StaggerGroup className="reviews-grid">
          {CLUB.execs.map((e, i) => (
            <StaggerItem key={i}>
              <article className="review-card">
                <span className="book-ref">{e.role.toUpperCase()}</span>
                <h4 style={{ marginTop: 4 }}>{e.name}</h4>
                {e.reading && (
                  <p className="body" style={{ fontStyle: "italic" }}>
                    currently reading <em>{e.reading}</em>
                  </p>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p style={{ fontFamily: "var(--font-display)", color: "var(--ink-mute)", marginTop: 24, fontStyle: "italic" }}>
          Questions, suggestions, or something we should hear privately? Use the{" "}
          <a href={CLUB.feedback} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
            anonymous feedback form
          </a>.
        </p>
      </section>

      <FadeIn variant="fadeIn"><DividerRule glyph="✦   ✧   ✦" /></FadeIn>

      {/* FAQ */}
      <section className="events-strip" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="row">
            <h2>Quick answers</h2>
            <span className="meta">The basics</span>
          </div>
          <Crest subtle glyph="✧">FAQ</Crest>
        </div>
        <StaggerGroup className="q-list">
          {FAQ.map((f, i) => (
            <StaggerItem key={i}>
              <div className="q-item">
                <span className="n">Q{i + 1}</span>
                <span>
                  <strong style={{ color: "var(--ink)" }}>{f.q}</strong>
                  <br />
                  <span style={{ color: "var(--ink-2)" }}>{f.a}</span>
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}
