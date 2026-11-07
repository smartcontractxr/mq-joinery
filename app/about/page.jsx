import { withBase } from '../base';
import Frames from '../components/Frames';
import Photo from '../components/Photo';
import { Fab, Footer, Nav } from '../components/Chrome';

export const metadata = {
  title: 'About: bench joiners in Romford | MQ Joinery',
  description:
    'MQ Joinery combines traditional craftsmanship with modern machinery in a Navestock workshop, making bespoke joinery from fine timber.',
};

export default function About() {
  return (
    <>
      <Nav current="/about/" />
      <main id="top">
        <section className="hero hero--triptych" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="span-3">
                <h1 id="hero-h">Joinery workshop in Romford</h1>
                <p className="hero__lead">Windows, doors and staircases made to measure in Navestock. Open 8am to 6pm, Monday to Friday.</p>
              </div>
              <div className="ly-collage span-6 start-4" role="img" aria-label="Hands sanding a board, a pine balustrade and a turned-post staircase">
                <div className="ly-collage__set is-on">
                  <div className="ly-piece" style={{ left: '0%', top: '0%', width: '100%', height: '62%' }}>
                    <Photo name="hands-sanding" fixed eager alt="" />
                  </div>
                  <div className="ly-piece" style={{ left: '0%', top: '66%', width: '48%', height: '34%' }}>
                    <Photo name="spindles-pine" fixed eager alt="" pos="50% 40%" />
                  </div>
                  <div className="ly-piece" style={{ left: '52%', top: '66%', width: '48%', height: '34%' }}>
                    <Photo name="newel-stairs" fixed eager alt="" pos="50% 35%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Frames
          cls="sec-pair"
          id="craft"
          title="Joinery in our workshop"
          line="Our bench joiners blend traditional craftsmanship with modern techniques, so each piece is made the way it always was, to a finer tolerance."
          span="span-6"
          items={[
            ['handrail-pine', '50% 50%'],
            ['white-stair-finial', '50% 50%'],
          ]}
        />

        <Frames
          cls="sec-triple"
          id="made"
          title="Windows, doors and sheds made to measure"
          line="From a single door to a full staircase, each piece is built for the opening it fills."
          span="span-4"
          items={[
            ['sash-kitchen', '50% 40%', withBase('/services/#windows')],
            ['french-doors-white', '50% 40%', withBase('/services/#doors')],
            ['shed-pine', '50% 50%', withBase('/services/#fitted')],
          ]}
        />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
