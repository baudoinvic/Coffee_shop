
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Store = () => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="home" size={30} color="#D17842" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
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
