import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './SearchResults.scss';

class SearchResults extends React.Component {

  render() {
    const {cards} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <div>
            {cards.map(cardData => {
              const column = this.props.columns.find(column =>column.id==cardData.columnId);
              const list = this.props.lists.find(list => list.id==column.listId );
              return <article  className={styles.cards} key={cardData.id}>title: {cardData.title} {<br />} column: {column.title} {<br />} article: {ReactHtmlParser(list.title)}</article>;
            })}
          </div>
        </section>
      </Container>
    );
  }
  static propTypes = {
    cards: PropTypes.array,
    columns: PropTypes.array,
    lists: PropTypes.array,
  };
}

export default SearchResults;