import React from 'react'

import HomeScreen from 'bayidananak/src/screens/home/HomeScreen'

// eslint-disable-next-line no-undef
const App: () => React$Node = (props) => {
  // return <ReactNativeScreenDefault />
  return <HomeScreen {...props} />
}

export default App
