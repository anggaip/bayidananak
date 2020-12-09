import { Navigation } from 'react-native-navigation'
import App from './App'
import SettingScreen from 'bayidananak/src/screens/setting/SettingScreen'
import WeightChartScreen from 'bayidananak/src/screens/babyweight/WeightChartScreen'

Navigation.registerComponent('App', () => App)
Navigation.registerComponent('Settings', () => SettingScreen)
Navigation.registerComponent('WeightChart', () => WeightChartScreen)

App.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
}

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
})

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App'
            }
          }
        ]
      }
    }
  })
})
