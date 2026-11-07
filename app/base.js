// Path prefix for a temporary GitHub Pages address (for example /mq-joinery). Empty on a custom domain.
export const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const withBase = (path) => base + path;
