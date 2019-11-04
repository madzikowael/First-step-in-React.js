import React from 'react';
import styles from './Button.scss';

Button.propTypes = {
  // eslint-disable-next-line no-undef
  variant: PropTypes.node.isRequired,
};

const Button = ({variant = '', ...otherProps}) => (
  <button 
    {...otherProps} 
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
  
);
// static propTypes = {
//   variant: PropTypes.string,
// }

export default Button;
