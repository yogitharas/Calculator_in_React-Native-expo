import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView} from 'react-native';
import File1 from './File1.js'
import CalculatorScreen from './screens/CalculatorScreen.js'

export default class App extends React.Component {
  render() {
    return(
      <CalculatorScreen />
    )
  }
}

