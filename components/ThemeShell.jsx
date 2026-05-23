"use client";

import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function ThemeShell({ children }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <>
      <div className="cosmos" aria-hidden="true">
        <div className="nebula" />
        <div className="stars" />
      </div>
      <div className="shell">
        <Nav dark={dark} setDark={setDark} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
