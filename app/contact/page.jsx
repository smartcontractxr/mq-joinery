import Photo from '../components/Photo';
import { Fab, CallButton, Hours, Footer, Nav } from '../components/Chrome';
import { site } from '../site';

export const metadata = {
  title: 'Contact: call the workshop | MQ Joinery',
  description: 'Call MQ Joinery on 07746 572349. Workshop at Unit 1, Springvale Farm, Goatswood Lane, Navestock, Romford.',
};

export default function Contact() {
  return (
    <>
      <Nav current="/contact/" />
      <main id="top">
        <section className="hero hero--statement" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text hero__in">
              <div>
                <h1 id="hero-h">Call our Romford joinery workshop</h1>
                <p className="hero__lead">Phone the workshop to talk through a window, door, staircase or wardrobe.</p>
                <div className="btn-row">
                  <CallButton className="btn btn--primary hide-mobile" arrow />
                  <a className="btn btn--primary only-mobile" href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
                  <a className="btn btn--secondary" href={site.email}>Email us</a>
                </div>
              </div>
              <dl className="hero__facts">
                <div><dt>Phone</dt><dd>{site.phoneText}</dd></div>
                <div><dt>Open</dt><dd>Mon to Fri, 8am to 6pm</dd></div>
                <div><dt>Closed</dt><dd>Saturday and Sunday</dd></div>
                <div><dt>Workshop</dt><dd>Navestock, Romford</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="visit" aria-labelledby="visit-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="visit-h">Find the workshop</h2>
              <p>
                We are at Springvale Farm in Navestock, just outside Romford.
              </p>
            </div>
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <address className="visit__address">
                  {site.addressLines.map((l, i) => (
                    <span key={l}>{i ? <br /> : null}{l}</span>
                  ))}
                </address>
                <p>
                  <a className="link" href={site.directions}>Get directions</a>
                </p>
                <Hours />
                <ul className="rows">
                  <li>
                    <span className="rows__name">Tel</span>
                    <p><a className="link" href={site.tel}>+44 (0) 7746 572 349</a></p>
                  </li>
                  <li>
                    <span className="rows__name">Email</span>
                    <p><a className="link" href={site.email}>mqjoinery89@gmail.com</a></p>
                  </li>
                  <li>
                    <span className="rows__name">Instagram</span>
                    <p><a className="link" href="https://www.instagram.com/mqjoinery89/" target="_blank" rel="noopener noreferrer">@mqjoinery89</a></p>
                  </li>
                </ul>
              </div>
              <div className="tile span-6" style={{ '--tile-ratio': '4 / 3' }}>
                <div className="tile__media">
                  <Photo name="pine-newel-turned" fixed pos="50% 40%" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer heading="Call the workshop" />
      <Fab />
    </>
  );
}
