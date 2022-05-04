import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './sreens/HomeScreen'
import AppHeader from './components/AppHeader'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import SummaryScreen from './sreens/SummaryScreen'
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen : SummaryScreen
})

const AppContainer = createAppContainer(AppNavigator)
