import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import configStore from './configStore';


// eslint-disable-next-line no-undef
const rootEl = document.getElementById('app');
const store = configStore();
// noinspection Eslint
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    rootEl,
  );
};
/* if (module.hot) {
  module.hot.accept(['./Routes', './Root'], () => {
    render();
  });
} */
if (module.hot) {
  module.hot.accept();
}
render();
