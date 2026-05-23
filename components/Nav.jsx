"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CLUB } from '@/lib/data';
import DiscordIcon from './DiscordIcon';

export default function Nav({ dark, setDark }) {
  const pathname = usePathname();

  const links = [
    { id: "home",    label: "Home",         href: "/" },
    { id: "current", label: "Current Read", href: "/current" },
    { id: "reviews", label: "Reviews",      href: "/reviews" },
    { id: "events",  label: "Events",       href: "/events" },
  ];

  const activeId = (() => {
    if (pathname === "/") return "home";
    const segment = pathname.replace(/^\//, "").split("/")[0];
    return segment || "home";
  })();

  return (
    <header className="nav">
      <Link href="/" className="brand" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
        <div className="brand-mark"><img src="/assets/mascot.jpg" alt="" /></div>
        <div className="brand-text">
          <span className="brand-name">SFU SFF Book Club</span>
          <span className="brand-sub">sci-fi &amp; fantasy at Simon Fraser</span>
        </div>
      </Link>
      <nav className="nav-links" aria-label="primary">
        {links.map(l => (
          <Link
            key={l.id}
            className={"nav-link" + (activeId === l.id ? " active" : "")}
            href={l.href}
          >
            {activeId === l.id && <span className="star">✦</span>}
            {l.label}
          </Link>
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
