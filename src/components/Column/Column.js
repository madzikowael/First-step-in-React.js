import React from 'react';
import styles from "./Column.scss";
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Card from "../Card/Card";

class Column extends React.Component {
    state = {
      cards: this.props.cards || [],
      title: this.props.title || []
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.array.isRequired,
        icon: PropTypes.string.isRequired,
    };

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}
                    <span className={styles.icon}>
                      <Icon name={this.props.icon}/>
                    </span>
                </h3>
                <div className={styles.cards}>
                  {this.state.cards.map(card => (
                    <Card key={card.key} title={card.title}/>
                  ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={cards => this.addCard(cards)}/>
                 </div>
            </section>
        );
    }

    addCard(title){
      console.log(this.state.cards);
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key + 1 : 0,
                title,
              }
            ]
          }
        ));
      }

}

export default Column;
