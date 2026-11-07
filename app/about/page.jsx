import Photo from '../components/Photo';
import Split, { Rows } from '../components/Split';
import { Fab, Footer, Nav } from '../components/Chrome';

export const metadata = {
  title: 'About: bench joiners in Romford | MQ Joinery',
  description:
    'MQ Joinery is experienced, professional and trustworthy: bespoke joinery from the start of the build through to installation.',
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
                <p className="hero__lead">We are passionate about what we do, from the start of the build through to installation.</p>
              </div>
              <div className="ly-collage span-6 start-4" role="img" aria-label="Fitted wardrobes, sash windows and a glazed door">
                <div className="ly-collage__set is-on">
                  <div className="ly-piece" style={{ left: '0%', top: '0%', width: '100%', height: '62%' }}>
                    <Photo name="wardrobes-grey" fixed eager alt="" />
                  </div>
                  <div className="ly-piece" style={{ left: '0%', top: '66%', width: '48%', height: '34%' }}>
                    <Photo name="door-glazed-geometric" fixed eager alt="" pos="50% 40%" />
                  </div>
                  <div className="ly-piece" style={{ left: '52%', top: '66%', width: '48%', height: '34%' }}>
                    <Photo name="sash-pair" fixed eager alt="" pos="50% 40%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Split
          id="about"
          title="About us"
          line="Experienced, talented, reliable and trustworthy."
          photo="sash-bathroom"
          pos="50% 40%"
        >
          <Rows
            items={[
              ['Experienced', 'We have years of experience in building a variety of bespoke projects.'],
              ['Professional', 'When starting any project we ensure we use the right professional machinery and the finest of materials.'],
              ['Trustworthy', 'When working with MQ Joinery you can rest assured your property will be in the safest of hands.'],
            ]}
          />
        </Split>

        <Split
          id="craft"
          title="Passionate about what we do"
          line="We are proud to provide our clients with superior-quality, made-to-measure traditional bespoke box & sash windows."
          photo="oak-landing"
          pos="50% 50%"
        >
          <p>
            Each window we manufacture is individually crafted by our expert bench joiners to produce a window from the
            finest quality timber and materials.
          </p>
          <p>
            All our work is completed to a high standard; our attention to detail enables us to produce a high quality
            finish. Our staff have years of experience in designing and building astonishing wooden sash windows using
            advanced machinery.
          </p>
          <p>
            At MQ Joinery we are passionate about what we do, from the start of the build through to installation. We
            handle every bespoke piece with compassion and care.
          </p>
        </Split>
      </main>
      <Footer />
      <Fab />
    </>
  );
}
