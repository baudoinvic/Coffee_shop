import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const Beanscreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the beans screen page</Text>
      
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

export default Beanscreen
