import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// eslint-disable-next-line no-undef
const rootEl = document.getElementById('app');
// noinspection Eslint
const render = () => {
  ReactDOM.render(
    <Routes />,
    rootEl,
  );
};
render();
