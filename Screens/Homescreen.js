import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Title Text */}
      <Text style={styles.title}>Find the best{"\n"}coffee for you.</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for coffee..."
        placeholderTextColor="#888"
      />

      {/* Coffee Items */}
      <View style={styles.coffeeItem}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1484464555/photo/sip-savor-and-enjoy-a-perfectly-crafted-cappuccino-with-a-beautiful-twist.jpg?s=612x612&w=0&k=20&c=PwLcZk-OoqdlDMBCX74Eaehw_M0EmwUIELckrt9vEjQ=",
          }} // Replace with actual image URL or local image
          style={styles.coffeeImage}
        />
        {/* Description and Price */}
        <View style={styles.coffeeDetails}>
          <Text style={styles.coffeeDescription}>Espresso</Text>
          <Text style={styles.desc}>With Steamed Milk</Text>
          <Text style={styles.coffeePrice}>$5.00</Text>
        </View>
        {/* Add Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff", // White text
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#fff", // Text color
    marginBottom: 30,
  },

  desc: {
    color: "white",
    fontSize: 12,
  },

  coffeeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  coffeeImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },

  coffeeDetails: {
    flex: 1,
    marginLeft: 20,
  },
  coffeeDescription: {
    fontSize: 18,
    color: "#fff",
  },
  coffeePrice: {
    fontSize: 16,
    color: "#D17842",
  },
  addButton: {
    backgroundColor: "#D17842",
    padding: 10,
    borderRadius: 50,
  },
  addButtonText: {
    fontSize: 18,
    color: "#FFF",
  },
});

export default HomeScreen;
