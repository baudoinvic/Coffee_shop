import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SecondCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cartItem}>
        <View style={styles.fix}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1396456676/photo/coffee-grains-seamless-pattern.jpg?s=612x612&w=0&k=20&c=OGu1cKKaIN3GCS8ByR-QfaZ6kH3aoTjkRQn3fjXiQw0=",
            }}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.textcart}>Liberica Coffee Beans</Text>
            <Text style={styles.small}>With Steamed Milk</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Medium Roasted</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sizePriceQuantity}>
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

      <View style={styles.cartItem}>
        <View style={styles.fix}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1039706048/photo/coffee-beans.jpg?s=612x612&w=0&k=20&c=HAWwM-GrBV1vxBrxQmpT1WQrlTg9L5Yr9J4NyPSzWW0=",
            }}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.textcart}>Robusta Beans</Text>
            <Text style={styles.small}>from africa</Text>

            <View style={styles.display}>
              <TouchableOpacity style={styles.medium}>
                <Text style={styles.Mediumtext}>250gm</Text>
              </TouchableOpacity>
              <Text style={styles.simple}>$6.20</Text>
            </View>
          </View>
        </View>

        <View style={styles.sizePriceQuantity}>
          {["S", "M", "L"].map((size, index) => (
            <View key={index} style={styles.row}>
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
      <View style={styles.total}>
        <Text style={styles.totalText}>Total price $10.40</Text>
        <TouchableOpacity
          style={styles.cartbutton}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.carttext}>Pay Now</Text>
        </TouchableOpacity>
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
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  fix: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
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
  },
  button: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#141921",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  sizePriceQuantity: {
    marginTop: 15,
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
    backgroundColor: "#1F2429",
  },
  sizeM: {
    backgroundColor: "#1F2429",
  },
  sizeL: {
    backgroundColor: "#1F2429",
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
    backgroundColor: "#D17842",
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
    borderColor: "#D17842",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  medium: {
    backgroundColor: "#1F2429",
    padding: 15,
    width: 100,
    marginTop: 10,
    borderRadius: 20,
  },
  Mediumtext: {
    color: "white",
    textAlign: "center",
  },
  display: {
    flexDirection: "row",
    alignItems: "center",
  },
  simple: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
  },
  cartbutton: {
    backgroundColor: "#D17842",
    padding: 20,
    width: 220,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
  },

  carttext: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },

  totalText: {
    color: "white",
    fontSize: "15",
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SecondCart;
