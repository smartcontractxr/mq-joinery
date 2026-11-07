import { Footer, Nav } from '../components/Chrome';
import { photos } from '../photos';

export const metadata = { title: 'Photograph credits | MQ Joinery' };

const stock = Object.entries(photos).filter(([, p]) => p.source === 'unsplash');

export default function Credits() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="section" id="credits" aria-labelledby="credits-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="credits-h">Photograph credits</h2>
              <p>
                Every photograph of finished work on this site was supplied by MQ Joinery.
                {stock.length ? ' One workshop photograph comes from Unsplash and is used under the Unsplash licence.' : ''}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
