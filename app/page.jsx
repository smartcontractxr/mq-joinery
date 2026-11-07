import HeroVideo from './components/HeroVideo';
import Photo from './components/Photo';
import Split, { Rows } from './components/Split';
import { withBase } from './base';
import { CallButton, Fab, Footer, Nav } from './components/Chrome';

export const metadata = { title: 'MQ Joinery: made-to-measure joinery in Romford' };

const rows = [
  { key: 'windows', name: 'Box sash and casement windows', line: 'Made-to-measure traditional bespoke windows, individually crafted by our expert bench joiners.', photo: 'sash-kitchen', pos: '50% 40%' },
  { key: 'doors', name: 'French doors', line: 'Designed and built by our experienced joiners to the exact specifications of your property.', photo: 'french-doors-white', pos: '50% 40%' },
  { key: 'stairs', name: 'Staircases', line: 'Handcrafted from rough sawn Oak timbers and softwood, to your exact design.', photo: 'newel-stairs', pos: '50% 35%' },
  { key: 'more', name: 'And more', line: 'Years of experience in designing and fitting a variety of staircases, windows, doors and more.', photo: 'wardrobes-grey', pos: '50% 50%' },
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
                  We are proud to provide our clients with superior-quality, made-to-measure traditional bespoke box
                  &amp; sash windows.
                </p>
                <div className="btn-row">
                  <CallButton arrow />
                  <a className="btn btn--secondary" href={withBase('/services/')}>See our services</a>
                </div>
                <dl className="hero-facts">
                  <div><dt>Workshop</dt><dd>Navestock, Romford</dd></div>
                  <div><dt>Open</dt><dd>Mon to Fri, 8am to 6pm</dd></div>
                  <div><dt>Service</dt><dd>We measure, we make &amp; we fit</dd></div>
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
              <h2 id="services-h">What we do</h2>
              <p>Our primary objective is to offer our clients the best service in order to meet their design and performance needs.</p>
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
                  <Photo key={r.key} className="frame__img" name={r.photo} data-peek-for={r.key} hidden={i === 0 ? undefined : true} fixed pos={r.pos} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Split
          id="why"
          title="Why choose us"
          line="Providers of quality bespoke joinery. At MQ Joinery we have years of experience in designing and fitting a variety of different staircases, windows, doors and more."
          photo="pine-stair-hall"
          pos="50% 50%"
        >
          <Rows
            items={[
              'An experienced team of professionals',
              'All our work is done with advanced heavy woodworking machinery',
              'We use the finest woods such as soft wood and hard wood for all our work',
              'All our work is completed to a high standard and our attention to detail enables a high quality finish, which will complement any interior',
              'Excellent job with a competitive and attractive price',
              'We measure, we make & we fit',
            ]}
          />
        </Split>
      </main>
      <Footer />
      <Fab />
    </>
  );
}
