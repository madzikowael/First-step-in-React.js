import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import styles from '../FAQ/FAQ';

const FAQ = () => (
  <Container>
    <div className={styles.component}>
      <h2 className={styles.title}>{settings.faq.title}</h2>
    </div>
    <img className={styles.image} src={settings.faq.image}></img>
    <div>
      {settings.faq.description}
    </div>
  </Container>
    
);
  
export default FAQ;