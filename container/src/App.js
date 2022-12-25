import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

function App() {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName} >
          <Header />
          <MarketingApp />
        </StylesProvider>
      </BrowserRouter>
    </div>
  );

}

export default App