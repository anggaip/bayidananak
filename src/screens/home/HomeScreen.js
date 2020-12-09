import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import { Navigation } from 'react-native-navigation'

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
      <Button
        title='Push Weight Chart Screen'
        color='#710ce3'
        onPress={() => navigateToSetting(props)}
      />
    </View>
  )
}

const navigateToSetting = (props) => {
  Navigation.push(props.componentId, {
    component: {
      name: 'WeightChart',
      options: {
        topBar: {
          title: {
            text: 'Weight Chart'
          }
        }
      }
    }
  })
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
})
