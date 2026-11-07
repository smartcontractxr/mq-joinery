'use client';

import { useEffect, useRef, useState } from 'react';

// Muted, looping workshop film behind the hero. It rests under reduced motion and has a pause button.
export default function HeroVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ref.current?.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  return (
    <>
      <video
        ref={ref}
        className="frame__img"
        style={{ objectPosition: '45% 40%' }}
        src="/assets/video/workshop.mp4"
        poster="/assets/video/workshop-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        data-source="client-video"
        data-subject="workshop-bench"
      />
      <button className="loop-pause" type="button" onClick={toggle} aria-label={playing ? 'Pause the video' : 'Play the video'}>
        <svg viewBox="0 0 14 14" aria-hidden="true">
          {playing ? <path d="M3 2h2.6v10H3zM8.4 2H11v10H8.4z" /> : <path d="M3.5 1.8v10.4L12 7z" />}
        </svg>
      </button>
    </>
  );
}
