import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {

  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={styles.container}>
      <Animated.View
      style={[styles.containerAnimado, {opacity: fadeAnim}]}
      >
        <Text style={styles.textoAnimado}>Caixa com animação</Text>
      </Animated.View>

      <Button title='Fade In' onPress={fadeIn} />
      <Button title='Fade Out' onPress={fadeOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAnimado: {
    padding: 20,
    backgroundColor: 'powderblue'
  },
  textoAnimado: {
    fontSize: 28
  }
});