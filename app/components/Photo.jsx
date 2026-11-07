import { photos, src } from '../photos';

// One photograph from the client's folder, as a 600 and a 1200 WebP.
// Landscape sources shown in tall, cropped frames need their full file on a phone, not the 600 one.
const FULL_ONLY = new Set(['wardrobes-grey', 'handrail-pine', 'bath-panel', 'timber-steps-outdoor', 'bay-window-white', 'sash-kitchen', 'oak-landing', 'pine-stair-hall', 'pine-stair-brick']);

export default function Photo({ name, sizes, eager = false, className, style, pos, big = false, fixed = false, ...rest }) {
  const p = photos[name];
  const widths = big ? [1200, 1440] : [600, 1200];
  const full = big ? 1440 : Math.min(p.w, 1200);
  return (
    <img
      className={className}
      src={src(name, widths[1])}
      srcSet={fixed && FULL_ONLY.has(name) ? undefined : `${src(name, widths[0])} ${widths[0]}w, ${src(name, widths[1])} ${full}w`}
      sizes={fixed && FULL_ONLY.has(name) ? undefined : sizes ?? (fixed ? '(min-width: 1024px) 628px, 600px' : undefined)}
      width={big ? 1440 : p.w}
      height={big ? 1080 : p.h}
      alt={p.alt}
      loading={eager ? undefined : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      style={pos ? { objectPosition: pos, ...style } : style}
      data-source={p.source}
      data-subject={name}
      {...rest}
    />
  );
}
