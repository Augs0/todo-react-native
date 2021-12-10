import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function about() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.about}>
        This app was built with React Native and Expo using the React Native and
        React Navigation docs, as well as a great YouTube tutorial from Made
        With Matt.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
