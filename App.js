import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import FindMe from './screens/FindMe';
import Direction from './screens/Direction';
// import Activity from './screens/Activity';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FindMe /> */}
      {/* <Activity /> */}
      <Direction />
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
});
