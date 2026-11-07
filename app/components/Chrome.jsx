import { site } from '../site';
import { withBase } from '../base';

export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export function CallButton({ className = 'btn btn--primary', arrow = false, children }) {
  return (
    <a className={className} href={site.tel}>
      {children ?? site.action}
      {arrow ? <Arrow /> : null}
    </a>
  );
}

function Logo() {
  return (
    <a className="nav__logo" href={withBase('/')}>
      <img className="logo-img" src={withBase('/assets/img/logo-mq.webp')} width="640" height="170" alt="MQ Joinery" />
    </a>
  );
}

export function Nav({ current }) {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <Logo />
        <nav className="nav__links" aria-label="Main">
          {site.nav.map((item) => (
            <div className="nav__item" key={item.href}>
              <a className="nav__link" href={withBase(item.href)} aria-current={item.href === current ? 'page' : undefined}>
                {item.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <CallButton />
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export function Hours() {
  return (
    <dl className="hours" data-tz={site.tz}>
      {site.hours.flatMap((h) => [
        <dt key={`${h.days}-t`} data-days={h.days}>{h.label}</dt>,
        <dd key={`${h.days}-d`}>{h.time}</dd>,
      ])}
    </dl>
  );
}

// footer.closing: row 1 the close (close-type), row 2 the visit directory (footer-visit).
export function Footer({ heading = 'Talk to a joiner about your job', line }) {
  return (
    <footer className="footer closing footer--visit g2m" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">{heading}</h2>
            <p>
              {line ?? 'Open 8am to 6pm, Monday to Friday. Call '}
              <a className="link" href={site.tel}>{site.phoneText}</a>.
            </p>
          </div>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-6 stack-4">
              <address className="footer__address">
                {site.addressLines.map((l, i) => (
                  <span key={l}>{i ? <br /> : null}{l}</span>
                ))}
              </address>
              <p>
                <a className="link" href={site.directions}>Get directions</a>
              </p>
            </div>
            <div className="span-6 start-7 stack-4">
              <h4>Opening hours</h4>
              <Hours />
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; 2026 MQ Joinery</span>
            <a className="credits" href={withBase('/credits/')}>Photographs by MQ Joinery</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Small floating icons on a phone: call and WhatsApp (same number, no prefilled message).
export function Fab() {
  return (
    <div className="fab">
      <a className="fab__btn fab__btn--call" href={site.tel} aria-label="Call MQ Joinery">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" />
        </svg>
      </a>
      <a className="fab__btn fab__btn--wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp MQ Joinery">
        <img src={withBase('/assets/icons/whatsapp.svg')} width="24" height="24" alt="" />
      </a>
    </div>
  );
}
