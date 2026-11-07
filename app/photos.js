import { withBase } from './base';

// Every photograph on the site: file stem in public/assets/img, size of its 1200 file, alt text and source.
// source: "client" = supplied by MQ Joinery; "unsplash" = a stock frame that came in the client's folder.
export const photos = {
  'door-glazed-geometric': { w: 1200, h: 1500, source: 'client', alt: 'White interior door with a geometric glazed panel and a pine-lined side light' },
  'sash-kitchen': { w: 1200, h: 1500, source: 'client', alt: 'Restored box sash window over a kitchen sink' },
  'french-doors-white': { w: 1024, h: 1188, source: 'client', alt: 'White glazed French doors with black handles in a kitchen' },
  'french-doors-fitting': { w: 1024, h: 718, source: 'client', alt: 'White French doors with six glazed panes in a new pine lining' },
  'doors-vertical-panel': { w: 1200, h: 1500, source: 'client', alt: 'Two painted internal doors with vertical panels and black handles' },
  'newel-stairs': { w: 1200, h: 1600, source: 'client', alt: 'White staircase with turned spindles and a ball-topped newel post' },
  'wardrobes-grey': { w: 1200, h: 900, source: 'client', alt: 'Fitted wardrobes with grey shaker doors and long black handles' },
  'shed-pine': { w: 1200, h: 1500, source: 'client', alt: 'Pent-roof timber shed with a ledged door and black hinges' },
  'shed-felt': { w: 1024, h: 1014, source: 'client', alt: 'Apex timber shed with four windows on a decking base' },
  'glass-balustrade': { w: 1200, h: 1600, source: 'client', alt: 'Black framed glass balustrade on a stair landing' },
  'stair-glass-hall': { w: 1200, h: 1600, source: 'client', alt: 'Hall staircase with a black glass balustrade and a black newel post' },
  'arch-stairs': { w: 1200, h: 1600, source: 'client', alt: 'White staircase with square spindles seen through an arched doorway' },
  'glass-stair-hall': { w: 1024, h: 574, source: 'client', alt: 'Staircase with glass balustrade panels on both flights' },
  'glass-stair-landing': { w: 1024, h: 718, source: 'client', alt: 'Glass panel set in the floor beside a stair opening' },
  'glass-floor-void': { w: 1024, h: 718, source: 'client', alt: 'Glass floor panel over a new pine staircase' },
  'white-stair-finial': { w: 1024, h: 684, source: 'client', alt: 'Painted staircase with turned balusters and a finial on the newel post' },
  'handrail-pine': { w: 1200, h: 900, source: 'client', alt: 'New pine handrail fixed to a wall beside a white balustrade' },
  'spindles-pine': { w: 750, h: 1334, source: 'client', alt: 'Pine staircase balustrade with turned spindles' },
  'bay-window-white': { w: 1024, h: 718, source: 'client', alt: 'White bay window looking over rooftops' },
  'black-bay-windows': { w: 1024, h: 1014, source: 'client', alt: 'Black framed arched bay windows in a brick wall' },
  'tilt-window': { w: 1024, h: 1014, source: 'client', alt: 'White casement window with a street outside' },
  'timber-casement': { w: 785, h: 1188, source: 'client', alt: 'Timber casement window with glazing bars' },
  'bath-panel': { w: 1024, h: 574, source: 'client', alt: 'Painted timber bath panel in a bathroom' },
  'timber-steps-outdoor': { w: 1024, h: 574, source: 'client', alt: 'New timber steps beside a white painted wall' },
  'hands-sanding': { w: 800, h: 560, source: 'unsplash', alt: 'Hands sanding a board on a workshop floor' },
};

export function src(name, w) {
  return withBase(`/assets/img/${name}-${w}.webp`);
}
