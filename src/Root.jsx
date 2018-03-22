import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Routes from './Routes';

class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default Root;
