import React, { PureComponent } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

import AppNavigation from './Navigation/Navigation';

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1baaa5"
        />

        <AppNavigation />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});