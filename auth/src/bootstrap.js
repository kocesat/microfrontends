// Mount function to start up the app
import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// case 1: running in the container
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

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

// case 2: running standalone
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_auth-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };