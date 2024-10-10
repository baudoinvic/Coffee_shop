import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Beanscreen = () => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
     alignItems: "flex-start",
     backgroundColor: "black"
  },

    desc: {
        color: "gray",
        marginTop: 20
    },

  image: {
    width: 400, 
    height: 380, 
    borderRadius: 10, 
    marginTop: -286,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: "white", 
    
  },
});

export default Beanscreen;
