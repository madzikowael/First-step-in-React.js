import React from 'react';

Icon.propTypes = {
  // eslint-disable-next-line no-undef
  name: PropTypes.node.isRequired,
};

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);



export default Icon;
