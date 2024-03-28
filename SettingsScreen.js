import React from 'react';
import { View, Text } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <ThemeSwitchButton />
    </View>
  );
};

export default SettingsScreen;
