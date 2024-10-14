import React from 'react'
import { View, Text, StyleSheet } from "react-native";


const Orderscreen = () => {
  return (
    <View style={styles.container}>
      <Text>Order History</Text>
      <View style={styles.order}>
        <View style={styles.left}>
          <Text>Order Date</Text>
          <Text>20th March 17:23</Text>
        </View>
        <View style={styles.right}>
          <Text>Total amount</Text>
          <Text>$74.40</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default Orderscreen
