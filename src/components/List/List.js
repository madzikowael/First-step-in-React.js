import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from "../Column/Column";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageUrl={this.props.image}/>
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column title={'Column 1'}/>
          <Column title={'Column 2'}/>
          <Column title={'Column 3'}/>
        </div>
      </section>
    );
  }
}

export default List;