import SvgIcon from 'components/svgIcon/svgIcon';

/* Redux */
import { connect } from 'react-redux';
import { changeSearch } from 'store/actions/index';
import css from './searchBar.scss';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.updateStoreSearch = (value) => dispatch(changeSearch(value));
  }

  handleInputChange(event) {
    const inputValue = event.target.value;
    this.updateStoreSearch(inputValue);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div className={css.searchBar}>
        {/* Here there should be a search incon */}
        <div className={css.searchIcon}>
          <SvgIcon iconName="search" />
        </div>
        <input
          className={css.searchInput}
          placeholder={placeholder}
          onChange={(event) => this.handleInputChange(event)}
        />
      </div>
    );
  }
}

export default connect((state) => state)(SearchBar);
