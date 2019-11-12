import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
// import { listData } from '../../data/dataStore';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node.isRequired,
    lists: PropTypes.array.isRequired,
  };
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {Search}
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        
      </main>
    );
  }
  

}

export default App;