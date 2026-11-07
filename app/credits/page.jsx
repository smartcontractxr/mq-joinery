import { Footer, Nav } from '../components/Chrome';

export const metadata = { title: 'Photograph credits | MQ Joinery' };

export default function Credits() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="section" id="credits" aria-labelledby="credits-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="credits-h">Photograph credits</h2>
              <p>Every photograph on this site was supplied by MQ Joinery.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
