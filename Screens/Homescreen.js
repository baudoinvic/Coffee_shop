

import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Store from "../Store/Store";

const HomeScreen = () => {
  const navigation = useNavigation();

  const coffeeItems = [
    {
      id: 1,
      name: "Espresso",
      description: "With Steamed Milk",
      price: "$5.00",
      image:
        "https://media.istockphoto.com/id/1484464555/photo/sip-savor-and-enjoy-a-perfectly-crafted-cappuccino-with-a-beautiful-twist.jpg?s=612x612&w=0&k=20&c=PwLcZk-OoqdlDMBCX74Eaehw_M0EmwUIELckrt9vEjQ=",
    },
    {
      id: 2,
      name: "Espresso",
      description: "With Steamed Milk",
      price: "$5.00",
      image:
        "https://media.istockphoto.com/id/1496859162/photo/coffee-cup-latte-art-on-wooden-table-cafe-menu.jpg?s=612x612&w=0&k=20&c=bDz1TO4e0NfMOgUYpAAWWDzba3msUg2cSLSzXV6iZVk=",
    },
    {
      id: 3,
      name: "Coffee",
      description: "Coffee beans",
      price: "$4.00",
      image:
        "https://media.istockphoto.com/id/1396456676/photo/coffee-grains-seamless-pattern.jpg?s=612x612&w=0&k=20&c=OGu1cKKaIN3GCS8ByR-QfaZ6kH3aoTjkRQn3fjXiQw0=",
    },
    {
      id: 4,
      name: "Coffee",
      description: "Coffee beans",
      price: "$4.00",
      image:
        "https://media.istockphoto.com/id/1039706048/photo/coffee-beans.jpg?s=612x612&w=0&k=20&c=HAWwM-GrBV1vxBrxQmpT1WQrlTg9L5Yr9J4NyPSzWW0=",
    },
  ];

  const handleAddButtonPress = (item) => {
    // Navigate based on item name
    if (item.name === "Espresso") {
      navigation.navigate("Cappuccino"); 
    } else if (item.name === "Coffee") {
      navigation.navigate("Robusta Beans"); 
    }
  };

  const renderCoffeeItem = (item) => (
    <View key={item.id} style={styles.coffeeItemContainer}>
      <Image source={{ uri: item.image }} style={styles.coffeeImage} />
      <View style={styles.coffeeDetails}>
        <Text style={styles.coffeeDescription}>{item.name}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <View style={styles.priceAndAddContainer}>
          <Text style={styles.coffeePrice}>{item.price}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddButtonPress(item)} 
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Find the best{"\n"}coffee for you.</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search for coffee..."
        placeholderTextColor="#888"
      />

      <View style={styles.coffeeGrid}>
        <View style={styles.coffeeRow}>
          {renderCoffeeItem(coffeeItems[0])}
          {renderCoffeeItem(coffeeItems[1])}
        </View>
        <View style={styles.coffeeRow}>
          {renderCoffeeItem(coffeeItems[2])}
          {renderCoffeeItem(coffeeItems[3])}
        </View>
      </View>
      <Store />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#fff",
    marginBottom: 30,
  },
  coffeeGrid: {
    flexDirection: "column",
  },
  coffeeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  coffeeItemContainer: {
    width: "48%",
  },
  coffeeImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  coffeeDetails: {
    marginBottom: 10,
  },
  coffeeDescription: {
    fontSize: 18,
    color: "#fff",
  },
  desc: {
    color: "white",
    fontSize: 12,
    marginBottom: 5,
  },
  priceAndAddContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coffeePrice: {
    fontSize: 16,
    color: "#D17842",
  },
  addButton: {
    backgroundColor: "#D17842",
    padding: 8,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default HomeScreen;
