import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is setting page</Text>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
})
