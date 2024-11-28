import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Espressoscreen = () => {
 const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1484464555/photo/sip-savor-and-enjoy-a-perfectly-crafted-cappuccino-with-a-beautiful-twist.jpg?s=612x612&w=0&k=20&c=PwLcZk-OoqdlDMBCX74Eaehw_M0EmwUIELckrt9vEjQ=",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Description</Text>
      <Text style={styles.desc}>
        Cappuccino is a latte made with more foam than steamed milk, often with
        a sprinkle of cocoa powder or cinnamon on top.
      </Text>

      <Text style={styles.size}>Size</Text>
      <View style={styles.medium}>
        <View style={styles.firstmedium}>
          <TouchableOpacity style={styles.big}>
            <Text style={styles.free}>S</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondmedium}>
          <TouchableOpacity style={styles.big}>
            <Text style={styles.third}>M</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thirdmedium}>
          <TouchableOpacity style={styles.big}>
            <Text style={styles.third}>L</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cart}>
        <Text style={styles.cartprice}>$4.50</Text>
       
        <TouchableOpacity
          style={styles.cartbutton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.carttext}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-start",
    backgroundColor: "black",
  },

  desc: {
    color: "gray",
    marginTop: 20,
  },

  size: {
    marginTop: 10,
    color: "white",
  },

  big: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#D17842",
    padding: 15,
    marginTop: 10,
    backgroundColor: "#141921",
  },

  medium: {
    display: "flex",
    flexDirection: "row",
  },

  thirdmedium: {
    marginLeft: 30,
    width: 100,
  },

  free: {
    color: "white",
    textAlign: "center",
  },

  third: {
    textAlign: "center",
    color: "white",
  },

  firstmedium: {
    width: 100,
  },

  secondmedium: {
    marginLeft: 30,
    width: 100,
  },

  image: {
    width: 400,
    height: 500,
    borderRadius: 10,
    marginTop: -180,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: "white",
  },

  cartbutton: {
    backgroundColor: "#D17842",
    padding: 20,
    width: 220,
    borderRadius: 10,
    marginLeft: 80,
    marginTop: -10,
  },

  carttext: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  cart: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
  },

  cartprice: {
    color: "white",
    marginTop: 10,
    fontSize: 20,
    marginLeft: 5,
  },
});

export default Espressoscreen;
