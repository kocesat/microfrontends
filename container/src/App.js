import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

function App() {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName} >
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App