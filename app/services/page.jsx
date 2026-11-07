import Photo from '../components/Photo';
import Split, { Head, Rows } from '../components/Split';
import { Fab, Footer, Nav } from '../components/Chrome';

export const metadata = {
  title: 'Services: windows, doors and staircases | MQ Joinery',
  description:
    'Traditional box sash and casement windows, staircases and French doors, made to measure in our workshop in Navestock, Romford.',
};

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
                  Each window we manufacture is individually crafted by our expert bench joiners to produce a window
                  from the finest quality timber and materials.
                </p>
                <dl className="hero-facts">
                  <div><dt>Windows</dt><dd>Box sash and casement</dd></div>
                  <div><dt>Doors</dt><dd>French doors</dd></div>
                  <div><dt>Staircases</dt><dd>Oak and softwood</dd></div>
                </dl>
              </div>
              <div className="hero-visual frame frame--photo span-6 start-7">
                <Photo className="frame__img" name="bay-sash" eager sizes="(min-width: 1024px) 628px, 100vw" pos="50% 50%" />
              </div>
            </div>
          </div>
        </section>

        <Split
          id="windows"
          title="Traditional box sash windows and casement"
          line="We are proud to provide our clients with superior-quality, made-to-measure traditional bespoke box & sash windows."
          photo="sash-pair"
          pos="50% 40%"
        >
          <p>
            Our primary objective is to offer our clients the best service in order to meet their design and performance
            needs. All of our wooden sash windows are made with the finest materials including softwood and hardwood and
            are designed and built with professional tools and equipment.
          </p>
          <p>
            MQ Joinery manufactures wooden sash windows and casement windows, both available in hardwood or softwood. All
            windows are double glazed with toughened glass to your specification, with a draught seal all around the
            sashes.
          </p>
        </Split>

        <section className="section sec-peek" id="specification" aria-labelledby="specification-h">
          <div className="wrap">
            <Head id="specification" title="Window specification" line="All manufactured in our workshop." />
            <div className="grid grid--top">
              <div className="span-6">
                <Rows
                  items={[
                    'Mortice and tenon joints for strength, preventing jams and wobbles for smooth use',
                    'Traditional style with horns',
                    'European red wood for softwood, and Oak or Meranti for hardwood',
                    'Sash weight or spring balance',
                    'Weatherproof seal',
                    'All windows are painted white primer',
                  ]}
                />
              </div>
              <div className="span-6 start-7">
                <Rows
                  items={[
                    'All hardware is included: lock, bottom sash lift and pulley',
                    'Double glazed',
                    'Custom design',
                    'Every window made in our workshop',
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <Split id="glass" title="Glass description and specification" line="High quality double glazed units." photo="bay-sash" pos="50% 50%">
          <Rows
            items={[
              'High quality double glazed units',
              'Pilkington K glass: the K effect reflects heat from the internal pane back into your property, to maximise your home\'s heating, while letting in free heat from the sun',
              'All glass comes toughened',
              'Cavities filled with argon gas',
            ]}
          />
        </Split>

        <Split
          id="staircases"
          title="Staircases"
          line="We offer a wide range of staircase designs, whichever is best suited to your property."
          photo="pine-stair-hall"
          pos="50% 50%"
        >
          <Rows
            items={[
              'Straight flights',
              'Cut string staircases',
              'Kite winders staircases',
              'D shape and bullnose steps',
              'Closed or open treads',
              'Quarter and half landing areas',
              'Glazed panels and rails',
            ]}
          />
        </Split>

        <Split
          id="staircase-build"
          title="Built to your design"
          line="All of our staircases are handcrafted from rough sawn Oak timbers and softwood."
          photo="oak-landing"
          pos="50% 50%"
        >
          <p>
            We supply the balustrade to meet your design, including wooden spindles and toughened and polished glass or
            metal spindles.
          </p>
          <p>
            When working with MQ Joinery, staircases can be manufactured and assembled to your exact design, with
            compliant installation by our certified fitting team.
          </p>
        </Split>

        <Split
          id="french-doors"
          title="French doors"
          line="We have a team of experienced joiners that can design and build your French doors according to the exact specifications of your property."
          photo="french-doors-fitting"
          pos="50% 50%"
        >
          <p>
            We use quality woods for all our projects: softwood such as European red wood, and hardwood such as Oak,
            Sapele and Meranti.
          </p>
          <p>
            Our workshop is based in Romford, where we work with professional heavy woodworking machinery, ensuring we
            finish your project to a high quality standard.
          </p>
        </Split>

        <Split
          id="how"
          title="How it works"
          line="We measure, we make & we fit."
          photo="handrail-pine"
          pos="50% 50%"
        >
          <p>
            When you contact MQ Joinery we arrange an appointment to visit your property. Measurements of the job
            requested are taken and a free quote is provided. If you are happy to proceed, a start date for the build is
            agreed, along with the time for delivery and installation.
          </p>
          <p>
            A 50% deposit is taken prior to starting the job and the remainder is paid upon completion, on the day of
            delivery of the project.
          </p>
        </Split>
      </main>
      <Footer />
      <Fab />
    </>
  );
}
