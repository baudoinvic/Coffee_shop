import React from 'react'

import { View, Text, StyleSheet } from "react-native";
const Cofescreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      {/* You can add more UI elements here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cofescreen
