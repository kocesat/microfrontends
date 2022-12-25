// Mount function to start up the app
import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// case 1: running standalone
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  };

  ReactDOM.render(
    <App history={history} />,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = location.pathname;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    }
  }

}

// case 2: running in the container
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };