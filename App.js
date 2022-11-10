import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Invest from './src/assets/btn_Play'; // import SVG

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_svg}>SVG in here</Text>
      <Invest width={200} height={200}>asda</Invest>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',

  },

  text_svg:{
    fontSize: 30,
  }
});

export default App;
