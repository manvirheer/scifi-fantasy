import { CLUB } from '@/lib/data';
import Crest from './Crest';

export default function Footer() {
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
