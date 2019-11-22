import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
// import PropTypes from 'prop-types';
import styles from '../Info/Info';


const Info = (props) => (
  <Container>
    <div className={styles.component}>
      <h2 className={styles.title}>{settings.info.title}</h2>
    </div>
    <img className={styles.image} src={settings.info.image}></img>
    <div>
      {settings.info.description}
    </div>
  </Container>
  
);

// Info.propTypes = {
//   imageUrl: PropTypes.string,
// };


export default Info;