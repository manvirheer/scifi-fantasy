"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Crest, DividerRule } from '@/components/ui';
import { EVENTS } from '@/lib/data';
import { variants, defaultTransition, stagger as staggerPreset } from '@/lib/animations';

export default function EventsPage() {
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

      <motion.div
        className="events-list"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerPreset.normal } } }}
      >
        {EVENTS.map(e => {
          const on = !!rsvp[e.id];
          const cnt = e.rsvp + (on ? 1 : 0);
          return (
            <motion.article key={e.id} className="event-card" variants={variants.fadeUp} transition={defaultTransition}>
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
                <motion.button
                  className={"btn " + (on ? "btn-accent" : "btn-primary")}
                  onClick={() => toggle(e.id)}
                  style={{ minWidth: 150, justifyContent: "center" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {on ? "✦ You're in" : "RSVP"}
                </motion.button>
                <span className="e-count">{cnt} / {e.cap} attending</span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

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
            One member writes up the discussion afterwards - it lands in
            <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--gold)", margin: "0 4px" }}>#announcements</code>
            a couple of days later.
          </p>
        </div>
      </div>
    </div>
  );
}
