import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';


// eslint-disable-next-line no-undef
const rootEl = document.getElementById('app');
// noinspection Eslint
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootEl,
  );
};
if (module.hot) {
  module.hot.accept(['./Routes', './Root'], () => {
    render();
  });
}
render();
