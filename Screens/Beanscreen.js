import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Beanscreen = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1396456676/photo/coffee-grains-seamless-pattern.jpg?s=612x612&w=0&k=20&c=OGu1cKKaIN3GCS8ByR-QfaZ6kH3aoTjkRQn3fjXiQw0=",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Description</Text>
      <Text style={styles.desc}>
        Arabica beans are by far the most popular type of coffee beans, making
        up about 60% of the world’s coffee. These tasty beans originated many
        centuries ago in the highlands of Ethiopia, and may even be the first
        coffee beans ever consumed!{" "}
      </Text>

      <Text style={styles.size}>Size</Text>
      <View style={styles.medium}>
        <View style={styles.firstmedium}>
          <TouchableOpacity style={styles.big}>
            <Text style={styles.free}>250gm</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondmedium}>
          <TouchableOpacity style={styles.big}>
            <Text style={styles.third}>500gm</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thirdmedium}>
          <TouchableOpacity style={styles.big}>
            <Text style={styles.third}>1000gm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cart}>
        <Text style={styles.cartprice}>$10.50</Text>
        <TouchableOpacity
          style={styles.cartbutton}
          onPress={() => navigation.navigate("Second")}
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
    marginTop: -210,
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
    marginTop: -10
  },

  carttext: {
    color: "white",
    textAlign: "center",
    fontSize: 18
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

export default Beanscreen;
