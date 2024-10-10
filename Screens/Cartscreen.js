
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Cartscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cartItem}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1396456676/photo/coffee-grains-seamless-pattern.jpg?s=612x612&w=0&k=20&c=OGu1cKKaIN3GCS8ByR-QfaZ6kH3aoTjkRQn3fjXiQw0=",
          }}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.textcart}>Cappuccino</Text>
          <Text style={styles.small}>With Steamed Milk</Text>

          {/* Example for 3 sizes S, M, L */}
          {["S", "M", "L"].map((size, index) => (
            <View key={index} style={styles.row}>
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  size === "S"
                    ? styles.sizeS
                    : size === "M"
                    ? styles.sizeM
                    : styles.sizeL,
                ]}
              >
                <Text style={styles.sizeText}>{size}</Text>
              </TouchableOpacity>
              <Text style={styles.price}>$4.20</Text>
              <TouchableOpacity style={styles.adjustButton}>
                <Text style={styles.adjustButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>1</Text>
              <TouchableOpacity style={styles.adjustButton}>
                <Text style={styles.adjustButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  cartItem: {
    backgroundColor: "#262B33",
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  textcart: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  small: {
    color: "#B0B0B0",
    fontSize: 14,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sizeButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeS: {
    backgroundColor: "#4C4F56",
  },
  sizeM: {
    backgroundColor: "#3E444A",
  },
  sizeL: {
    backgroundColor: "#2F353A",
  },
  sizeText: {
    color: "white",
    fontWeight: "bold",
  },
  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  adjustButton: {
    backgroundColor: "#1F2429",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  adjustButtonText: {
    color: "white",
    fontSize: 18,
  },
  quantity: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
});

export default Cartscreen;
