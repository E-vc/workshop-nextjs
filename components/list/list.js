import Cta from 'components/cta/cta';

function List(props) {
  const { heroes } = props;
  return (
    <ol>
      {heroes
        && heroes.map((el, i) => (
          <li>
            <Cta href={`/heroes/${el}`}>
              <span>
                {i}
.
                {' '}
              </span>
              <span>{el}</span>
            </Cta>
          </li>
        ))}
    </ol>
  );
}

export default List;
