import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";

const Store = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
      }}
    >
      <Icon name="home" size={30} color="#fff" />
      <Icon name="shopping-cart" size={30} color="#fff" />
      <Icon name="heart" size={30} color="#fff" />
      <Icon name="bell" size={30} color="#fff" />
    </View>
  );
}

export default Store
