import { withBase } from './base';
import Frames from './components/Frames';
import HeroVideo from './components/HeroVideo';
import Photo from './components/Photo';
import { Fab, Arrow, CallButton, Footer, Nav } from './components/Chrome';

export const metadata = { title: 'MQ Joinery: made-to-measure joinery in Romford' };

const rows = [
  { key: 'windows', name: 'Windows', line: 'Traditional box sash windows, casements and bays, made to fit your opening.', photo: 'sash-kitchen', pos: '50% 40%' },
  { key: 'doors', name: 'Doors', line: 'French doors, glazed doors and internal doors in the size your frame needs.', photo: 'french-doors-white', pos: '50% 40%' },
  { key: 'stairs', name: 'Staircases', line: 'Spindles, newel posts, handrails and glass balustrades.', photo: 'newel-stairs', pos: '50% 35%' },
  { key: 'wardrobes', name: 'Wardrobes', line: 'Fitted wardrobes built to the wall, floor to ceiling.', photo: 'wardrobes-grey', pos: '50% 50%' },
  { key: 'garden', name: 'Garden joinery', line: 'Sheds and timber outbuildings built to the space in your garden.', photo: 'shed-pine', pos: '50% 50%' },
];

export default function Home() {
  return (
    <>
      <Nav current="/" />
      <main id="top">
        <section className="hero hero--split" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text grid hero-split">
              <div className="hero-copy span-6">
                <h1 id="hero-h">Made-to-measure joinery, crafted in Romford</h1>
                <p className="t-lead">
                  Box sash windows, French doors and staircases, built by bench joiners in our own workshop with
                  professional woodworking machinery.
                </p>
                <div className="btn-row">
                  <CallButton arrow />
                  <a className="btn btn--secondary" href={withBase('/services/')}>See our services</a>
                </div>
                <dl className="hero-facts">
                  <div><dt>Workshop</dt><dd>Navestock, Romford</dd></div>
                  <div><dt>Open</dt><dd>Mon to Fri, 8am to 6pm</dd></div>
                  <div><dt>Made</dt><dd>To measure, in timber</dd></div>
                </dl>
              </div>
              <div className="hero-visual frame frame--photo span-6 start-7">
                <HeroVideo />
              </div>
            </div>
          </div>
        </section>

        <section className="section sec-peek" id="services" aria-labelledby="services-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="services-h">Windows, doors and staircases</h2>
              <p>Every piece is cut to your opening and finished in our workshop.</p>
            </div>
            <div className="grid grid--top fill" data-peek="">
              <ul className="rows span-6">
                {rows.map((r) => (
                  <li key={r.key} data-peek-to={r.key} tabIndex={0}>
                    <span className="rows__name">{r.name}</span>
                    <p>{r.line}</p>
                  </li>
                ))}
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7">
                {rows.map((r, i) => (
                  <Photo
                    key={r.key}
                    className="frame__img"
                    name={r.photo}
                    data-peek-for={r.key}
                    hidden={i === 0 ? undefined : true}
                    fixed
                    pos={r.pos}
                    sizes="(min-width: 1024px) 628px, 100vw"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Frames
          cls="sec-triple"
          id="work"
          title="Staircases we have built"
          line="Glass, spindle and turned-post balustrades, made for the stairs they stand on."
          span="span-4"
          items={[
            ['stair-glass-hall', '50% 40%', withBase('/services/#staircases')],
            ['glass-balustrade', '50% 50%', withBase('/services/#staircases')],
            ['arch-stairs', '50% 50%', withBase('/services/#staircases')],
          ]}
        />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
