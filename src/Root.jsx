import React from 'react';
import PropTypes from 'prop-types';
import Routes from './Routes';

class Root extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Routes />
      </div>
    );
  }
}

export default Root;
