import Photo from './Photo';

// Text on the left, one photograph on the right (the page's one split), under a heading.
export function Rows({ items }) {
  return (
    <ul className="rows">
      {items.map((it) => {
        const [name, line] = Array.isArray(it) ? it : [it];
        return (
          <li key={name}>
            <span className="rows__name">{name}</span>
            {line ? <p>{line}</p> : null}
          </li>
        );
      })}
    </ul>
  );
}

export function Head({ id, title, line }) {
  return (
    <div className="section-head">
      <h2 id={`${id}-h`}>{title}</h2>
      {line ? <p>{line}</p> : null}
    </div>
  );
}

export default function Split({ id, title, line, photo, pos, cls = 'sec-peek', children }) {
  return (
    <section className={`section ${cls}`} id={id} aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <Head id={id} title={title} line={line} />
        <div className="grid grid--top fill">
          <div className="span-6 stack-4">{children}</div>
          <div className="frame frame--photo frame--fill span-6 start-7">
            <Photo className="frame__img" name={photo} pos={pos} fixed />
          </div>
        </div>
      </div>
    </section>
  );
}
