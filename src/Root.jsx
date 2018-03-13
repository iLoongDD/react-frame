import React from 'react';
import PropTypes from 'prop-types';

class Root extends React.Component {
  static propTypes = {
    routes: PropTypes.element.isRequired,
  };
  render() {
    const { routes } = this.props;
    return (
      <div style={{ height: '100%' }}>
        {routes}
      </div>
    );
  }
}

export default Root;
