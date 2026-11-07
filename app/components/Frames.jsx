import Photo from './Photo';

// A section of photographs that fill the screen under their heading (the kit's .fill frames), so every
// section is one or two whole screens at any width. items: [photo name, object-position, optional link].
export default function Frames({ cls, id, title, line, span, items }) {
  return (
    <section className={`section ${cls}`} id={id} aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <div className="section-head">
          <h2 id={`${id}-h`}>{title}</h2>
          <p>{line}</p>
        </div>
        <div className="grid grid--top fill">
          {items.map(([name, pos, href]) => {
            const Tag = href ? 'a' : 'div';
            return (
              <Tag className={`frame frame--photo frame--fill ${span}`} key={name} href={href}>
                <Photo className="frame__img" name={name} pos={pos} fixed />
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
