import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
// import PropTypes from 'prop-types';
import styles from '../Info/Info';


const Info = () => (
  <Container>
    <div className={styles.component}>
      <h2>{settings.info.title}</h2>
    </div>
    <div className={styles.image}>
      {settings.info.image}
    </div>
    <div>
      {settings.info.description}
    </div>
  </Container>
  
);

// Info.propTypes = {
//   titleText: PropTypes.node.isRequired,
//   image: PropTypes.string,
// };


export default Info;