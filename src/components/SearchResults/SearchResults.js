import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator';
// import {settings} from '../../data/dataStore';
// import Icon from '../Icon/Icon';
// import Card from '../Card/Card';
// import { settings } from '../../data/dataStore';
import Search from '../Search/Search';

class SearchResults extends React.Component {
 
    static propTypes = {
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      card: PropTypes.array.isRequired,
      column: PropTypes.array.isRequired,
      // cards: PropTypes.array.isRequired,
    };

    // static defaultProps = {
    //   icon: settings.defaultColumnIcon,
    // };

    render() {
      const { value, title, card, column } = this.props;

      return (
        <section className={styles.component}>
          <Search>
            {value}{title}{card}{column}
          </Search>
        </section>
      );
    }

}

export default SearchResults;
