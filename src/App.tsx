import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light'
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState'

import GlobalStyle from './styles/global';
import Header from './components/Header';


const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () =>{ 
    setTheme(theme.title === 'light' ? dark : light )
  }

  return (
    <ThemeProvider theme = {theme}>
    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme= {toggleTheme} />
      <div className= "input">
      <input
        type="input" 
        placeholder="Name" 
        name="name" 
        id='name' 
        required
      />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
