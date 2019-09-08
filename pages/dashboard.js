import axios from 'axios';
import Cta from 'components/cta/cta';
import List from 'components/list/list';
import SearchBar from 'components/searchBar/searchBar';

/* Redux */
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  filterHeroes() {
    const { heroes, search } = this.props;
    const pattern = search.toLowerCase();
    return heroes.filter((hero) => hero.toLowerCase().includes(pattern));
  }

  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <Cta href="/heroes">Go to heroes list</Cta>
        <h1>Tour of Heroes</h1>
        {/* Hero search */}
        <SearchBar placeholder="Search a hero" />
        {/* List of Heroes */}
        <List heroes={this.filterHeroes()} />
      </div>
    );
  }
}

Dashboard.getInitialProps = async () => {
  const res = await axios.get('http://localhost:3000/static/mocks/heroes.json');
  const heroes = await res.data;
  return { heroes };
};

export default connect((state) => state)(Dashboard);
