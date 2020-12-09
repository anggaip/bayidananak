import React, {
  useState
} from 'react'
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  LineChart
} from 'react-native-chart-kit'
import Svg, {
  Rect,
  Text as TextSvg
} from 'react-native-svg'

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

  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })

  return (
    <LineChart
      data={lineChartData}
      width={screenWidth}
      height={220}
      yAxisSuffix='Kg'
      yAxisInterval={1}
      chartConfig={chartConfiguration}
      bezier
      style={styles.lineChart}
      decorator={() => addingToolTipWhenClickPoint(tooltipPos)}
      onDataPointClick={(data) => clickingChartPoint(data, tooltipPos, setTooltipPos)}
    />
  )
}

const clickingChartPoint = (data, tooltipPos, setTooltipPos) => {
  if (isClickSamePoint(data, tooltipPos)) {
    return hideTooltip(data, setTooltipPos)
  }

  return showTolltip(data, setTooltipPos)
}

const isClickSamePoint = (data, tooltipPos) => {
  return data.x === tooltipPos.x &&
    data.y === tooltipPos.y
}

const hideTooltip = (data, setTooltipPos) => {
  setTooltipPos((prevState) => {
    return {
      ...prevState,
      value: data.value,
      visible: !prevState.visible
    }
  })
}

const showTolltip = (data, setTooltipPos) => {
  setTooltipPos({
    x: data.x,
    y: data.y,
    value: data.value,
    visible: true
  })
}

const addingToolTipWhenClickPoint = (tooltipPos) => {
  if (!tooltipPos.visible) {
    return null
  }

  return buildTooltip(tooltipPos)
}

const buildTooltip = (tooltipPos) => {
  return (
    <View>
      <Svg>
        <Rect
          x={tooltipPos.x - 15}
          y={tooltipPos.y + 10}
          width='40'
          height='30'
          fill='black'
        />
        <TextSvg
          x={tooltipPos.x + 5}
          y={tooltipPos.y + 30}
          fill='white'
          fontSize='16'
          fontWeight='bold'
          textAnchor='middle'
        >
          {Math.round(tooltipPos.value * 100 + Number.EPSILON) / 100}
        </TextSvg>
      </Svg>
    </View>
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
