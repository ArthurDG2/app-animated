import { View, StyleSheet, Button } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from "react-native-reanimated";

export default function App() {
    const randomWidth = useSharedValue(10)
    const config = {
        duration: 3000,
        easing: Easing.bezier(0.5, 0.01, 0, 1)
    }
    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(randomWidth.value, config)
        }
    })

      return (
        <View style={styles.container}>
            <Animated.View style={[styles.caixa, style]} />
            <Button title="Trocar" onPress={() => {
                randomWidth.value = Math.random() * 350;
            }} />
        </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    margin: 30
  }
})