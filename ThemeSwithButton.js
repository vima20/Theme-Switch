import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { ThemeContext } from '../Context/ThemeContext';

const ThemeSwitchButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Button
      mode="contained"
      onPress={toggleDarkMode}
      style={{ marginTop: 20 }}
    >
      {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </Button>
  );
};

export default ThemeSwitchButton;
