import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import styles from '../FAQ/FAQ';

const FAQ = (props) => (
  <Container>
    <div className={styles.component}>
      <h2>{settings.faq.title}</h2>
    </div>
    <div className={styles.image}>
      {settings.faq.image}
    </div>
    <div>
      {settings.faq.description}
    </div>
  </Container>
    
);
  
export default FAQ;