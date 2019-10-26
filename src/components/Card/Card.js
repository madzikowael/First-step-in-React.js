import React from 'react';
import styles from "./Card.scss";
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Card extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <section className={styles.component}>
                <div className={styles.creator} >
                    <Card text={settings.cardCreatorText} />
                </div>
            </section>
        );
    }
}

export default Card;
