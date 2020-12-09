import React from 'react'
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'
import {
  LineChart
} from 'react-native-chart-kit'

const WeightChartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text>Bezier Line Chart</Text>
        <RenderLineChart />
      </ScrollView>
    </SafeAreaView>
  )
}

const RenderLineChart = () => {
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ['Rainy Days']
  }

  const screenWidth = Dimensions.get('window').width - 20

  const chartConfiguration = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726'
    }
  }

  return (
    <LineChart
      data={lineChartData}
      width={screenWidth}
      height={220}
      // yAxisLabel='$'
      yAxisSuffix='Kg'
      yAxisInterval={1}
      chartConfig={chartConfiguration}
      bezier
      style={styles.lineChart}
    />
  )
}

export default WeightChartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  },
  lineChart: {
    marginVertical: 8,
    borderRadius: 16
  }
})
