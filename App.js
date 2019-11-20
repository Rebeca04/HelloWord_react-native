import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
});

const App = createAppContainer(MainNavigator);

export default App;

// export default function App() {
//   return (
//     <Home />
//     // <View style={styles.container}>
//     //   <Text style={styles.textContainer}>Open up App.js to start working on your app!</Text>
//     // </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,255,0,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    color: 'darkgreen',
    fontWeight: 'bold',
  }
});
