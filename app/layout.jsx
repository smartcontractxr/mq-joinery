import KitScripts from './components/KitScripts';
import './globals.css';

export const metadata = {
  title: 'MQ Joinery: made-to-measure joinery in Romford',
  description:
    'Bespoke windows, doors, staircases and fitted wardrobes made by bench joiners in our own workshop in Navestock, Romford. Open 8am to 6pm, Monday to Friday.',
  other: { 'site-kind': 'other', 'page-type': 'service' },
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

// Woody palette taken from the client's photographs: pine, oak and matte black ironmongery.
const root = `:root {
  --p-bg: #f6f1e8; --p-surface: #ebe2d3; --p-ink: #2b2118; --p-muted: #6a5b4b;
  --p-accent: #7a4a1f; --p-accent-ink: #f6f1e8; --p-action: #7a4a1f; --p-action-ink: #f6f1e8;
  --p-inv-bg: #2b2118; --p-inv-surface: #372d24; --p-inv-ink: #f6f1e8; --p-inv-muted: #a39b91;
  --p-inv-accent: #f6f1e8; --p-inv-accent-ink: #2b2118; --p-inv-action: #f6f1e8; --p-inv-action-ink: #2b2118;
  --font-display: "Instrument Serif", Georgia, serif;
  --font-text: "Instrument Sans", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.012em;
  --display-tracking-xl: -0.016em;
  --ly-scale: 1.12;
}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-type="service" data-radius="soft" data-buttons="solid" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Instrument+Sans:wdth,wght@75..100,400..600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style dangerouslySetInnerHTML={{ __html: root }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
