import Crest from '@/components/Crest';
import BookCover from '@/components/BookCover';
import DiscordIcon from '@/components/DiscordIcon';
import FadeIn from '@/components/FadeIn';
import StaggerGroup from '@/components/StaggerGroup';
import StaggerItem from '@/components/StaggerItem';
import { CLUB, CURRENT_READ } from '@/lib/data';

export default function CurrentPage() {
  const cr = CURRENT_READ;
  return (
    <div>
      <FadeIn>
        <section className="page-head">
          <Crest>Book of the Month · May 2026</Crest>
          <h1>{cr.title}</h1>
          <p className="lede">by {cr.author} · first published {cr.year}. A foundational New Wave novel about coldness, gender, and what foreignness costs both sides.</p>
        </section>
      </FadeIn>

      <section className="cr-full">
        <FadeIn variant="slideLeft">
          <div>
            <BookCover book={{ ...cr, stamp: "★" }} />
            <div className="cr-stat-row">
              <div className="cr-stat"><span className="k">Pages</span><span className="v">{cr.pages}</span></div>
              <div className="cr-stat"><span className="k">Published</span><span className="v">{cr.year}</span></div>
              <div className="cr-stat"><span className="k">Read by</span><span className="v">{cr.reading.to}</span></div>
              <div className="cr-stat"><span className="k">Target pace</span><span className="v" style={{ fontSize: 17 }}>{cr.reading.target}</span></div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
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
            <StaggerGroup className="q-list">
              {cr.questions.map((q, i) => (
                <StaggerItem key={i}>
                  <div className="q-item">
                    <span className="n">Q{i + 1}</span>
                    <span>{q}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <FadeIn delay={0.2}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href={CLUB.discord} target="_blank" rel="noopener noreferrer"
                 style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <DiscordIcon /> Discuss on Discord
              </a>
              <button className="btn">Add to calendar</button>
              <button className="btn">Submit a question</button>
            </div>
          </FadeIn>
        </div>
        </FadeIn>
      </section>
    </div>
  );
}
