"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crest, ReviewCard } from '@/components/ui';
import { CLUB, REVIEWS } from '@/lib/data';
import { variants, defaultTransition, stagger } from '@/lib/animations';

export default function ReviewsPage() {
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
          Reviews are written by members after a Book of the Month wraps. We post them unedited - we only ask you sign your name and avoid spoilers past page one without a warning.
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
            <motion.button
              key={b}
              className={"chip" + (filter === b ? " on" : "")}
              onClick={() => setFilter(b)}
              whileTap={{ scale: 0.97 }}
            >
              {b === "all" ? "All" : b}
            </motion.button>
          ))}
        </div>
      )}

      <motion.div className="reviews-grid" style={{ marginTop: books.length > 3 ? 0 : 36 }} layout>
        <AnimatePresence mode="popLayout">
          {list.map(r => (
            <motion.div
              key={r.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={defaultTransition}
            >
              <ReviewCard r={r} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="cta-card" style={{ marginTop: 64 }}>
        <Crest subtle glyph="✧">Write one</Crest>
        <h3>Finished a book with us?</h3>
        <p>
          Write a few honest paragraphs - we'll post them here unedited. Stars optional;
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
