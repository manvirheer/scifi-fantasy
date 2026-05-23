import Script from 'next/script';
import ThemeShell from '@/components/ThemeShell';
import './globals.css';

export const metadata = {
  title: "SFU Sci-Fi & Fantasy Book Club",
  description: "SFU's book club for science fiction and fantasy. One book a month, discussed on the first Friday.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" data-palette="scriptorium"
          data-density="regular" data-mascot="subtle"
          data-backdrop="shelves" data-fontset="lithic">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Cinzel:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=IM+Fell+English+SC&family=Marcellus&family=Forum&family=Cardo:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Manrope:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script src="/image-slot.js" strategy="beforeInteractive" />
        <ThemeShell>{children}</ThemeShell>
      </body>
    </html>
  );
}
