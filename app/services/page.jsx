import Photo from '../components/Photo';
import { Fab, Footer, Nav } from '../components/Chrome';

export const metadata = {
  title: 'Services: windows, doors and staircases | MQ Joinery',
  description:
    'Made-to-measure box sash windows, French doors, staircases, fitted wardrobes and garden joinery, built in our workshop in Navestock, Romford.',
};

function Peek({ id, title, line, rows }) {
  return (
    <section className="section sec-peek" id={id} aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <div className="section-head">
          <h2 id={`${id}-h`}>{title}</h2>
          <p>{line}</p>
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <Nav current="/services/" />
      <main id="top">
        <section className="hero hero--split" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text grid hero-split">
              <div className="hero-copy span-6">
                <h1 id="hero-h">Windows, doors and staircases, made to measure</h1>
                <p className="t-lead">
                  Everything is built by our bench joiners in the Romford workshop, from box sash windows to glass
                  balustrades and fitted wardrobes.
                </p>
                <dl className="hero-facts">
                  <div><dt>Windows</dt><dd>Box sash, bay</dd></div>
                  <div><dt>Doors</dt><dd>French, glazed, internal</dd></div>
                  <div><dt>Open</dt><dd>Mon to Fri, 8am to 6pm</dd></div>
                </dl>
              </div>
              <div className="hero-visual frame frame--photo span-6 start-7">
                <Photo className="frame__img" name="black-bay-windows" eager sizes="(min-width: 1024px) 628px, 100vw" pos="50% 50%" />
              </div>
            </div>
          </div>
        </section>

        <Peek
          id="windows"
          title="Windows and doors"
          line="Every window and door is cut to your opening, in the style your building needs."
          rows={[
            { key: 'sash', name: 'Box sash windows', line: 'Traditional sliding sashes, built to match the originals.', photo: 'sash-kitchen', pos: '50% 40%' },
            { key: 'bay', name: 'Bay windows', line: 'Bay windows made to the width of your wall.', photo: 'bay-window-white', pos: '50% 50%' },
            { key: 'french', name: 'French doors', line: 'Glazed double doors in a new pine lining, painted to match.', photo: 'french-doors-white', pos: '50% 40%' },
            { key: 'glazed', name: 'Glazed doors', line: 'Doors with glazing in your own pattern, with side lights if you need them.', photo: 'door-glazed-geometric', pos: '50% 40%' },
            { key: 'internal', name: 'Internal doors', line: 'Panelled and vertical-board doors in the size of your frame.', photo: 'doors-vertical-panel', pos: '50% 40%' },
          ]}
        />

        <Peek
          id="staircases"
          title="Staircases and fitted joinery"
          line="Stairs, balustrades and wardrobes, built to the space they fill."
          rows={[
            { key: 'glass', name: 'Glass balustrades', line: 'Black framed glass panels on landings and stair flights.', photo: 'stair-glass-hall', pos: '50% 40%' },
            { key: 'spindles', name: 'Spindle balustrades', line: 'Turned spindles, newel posts and finials in pine or paint.', photo: 'newel-stairs', pos: '50% 35%' },
            { key: 'handrails', name: 'Handrails', line: 'Wall-mounted timber handrails on black brackets.', photo: 'handrail-pine', pos: '50% 50%' },
            { key: 'wardrobes', name: 'Fitted wardrobes', line: 'Wardrobes built to the wall, floor to ceiling.', photo: 'wardrobes-grey', pos: '50% 50%' },
            { key: 'sheds', name: 'Sheds', line: 'Timber sheds with ledged doors, built to your space.', photo: 'shed-pine', pos: '50% 50%' },
          ]}
        />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
