


import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Store = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="home" size={30} color="#D17842" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="shopping-cart"
          size={30}
          color="#4E5053"
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" size={30} color="#4E5053" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bell" size={30} color="#4E5053" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: -30,
  },
});

export default Store;
