import React from 'react';
import styles from "./Column.scss";
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    };

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.cards}>
                    <span className={styles.icon}>
                        <Icon className={styles.columns}/>
                    </span>
                    {this.props.title}
                </h3>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={cards => this.addCard(cards)}/>
                 </div>
            </section>
        );
    }

    addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.columns[state.cards.length-1].key+1 : 0,
                title,
              }
            ]
          }
        ));
      }

}

export default Column;
