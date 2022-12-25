import React from 'react'
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from '../components/Signin';
import SignUp from '../components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

function App({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin' component={Signin} />
            <Route path='/auth/signup' component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}

export default App;