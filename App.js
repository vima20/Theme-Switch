// App.js
import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const ThemeContext = createContext();

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
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
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
