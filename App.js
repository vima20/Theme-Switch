import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const HomeScreen = () => (
    <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );

  const SettingsScreen = () => (
    <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <Text style={styles.text}>Settings Screen</Text>
      <Button
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        onPress={toggleDarkMode}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <HomeScreen />
      <SettingsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  darkModeContainer: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});

export default App;
