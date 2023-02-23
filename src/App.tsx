import React from 'react';
import { Main } from './App.styles';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/organisms/Header/Header';
import { useState } from 'react';
import { darkTheme, lightTheme } from 'lib/styles/theme';
import { GlobalStyle } from 'lib/styles/GlobalStyle';

const App = () => {
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
        <GlobalStyle />
        <Header handleToggleTheme={handleToggleTheme} />
        <Main>
          <Routes>
            <Route path='/'></Route>
            <Route path='country/:name'></Route>
          </Routes>
        </Main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
