import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark');

  return (
    <ThemeContext.Provider value={[{ themeName }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
