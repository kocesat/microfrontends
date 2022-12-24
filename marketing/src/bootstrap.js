// Mount function to start up the app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// case 1: running standalone
const mount = el => {
  ReactDOM.render(
    <App />,
    el
  );
}

// case 2: running in the container
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };