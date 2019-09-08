import Link from 'next/link';
import css from './cta.scss';

function Cta(props) {
  const { href, callback, children } = props;
  return href ? (
    <Link href={href}>
      <a type="button" href={href} className={css.superCta}>{children}</a>
    </Link>
  ) : (
    <button type="button" className={css.superCta} onClick={callback}>
      {children}
    </button>
  );
}

export default Cta;
