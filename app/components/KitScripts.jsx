'use client';

import { useEffect } from 'react';
import { withBase } from '../base';

// The design kit's scripts (nav sheet, hours, hover layer, hero moments) act on the finished DOM,
// so they load once React has hydrated. Every link is a full page load, so they run once per page.
const scripts = ['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js'].map(withBase);

export default function KitScripts() {
  useEffect(() => {
    const added = scripts.map((s) => {
      const el = document.createElement('script');
      el.type = 'module';
      el.src = s;
      document.body.appendChild(el);
      return el;
    });
    return () => added.forEach((el) => el.remove());
  }, []);
  return null;
}
