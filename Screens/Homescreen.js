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
   
      <Text style={styles.title}>Find the best{"\n"}coffee for you.</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search for coffee..."
        placeholderTextColor="#888"
      />

    
      <View style={styles.coffeeItem}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1484464555/photo/sip-savor-and-enjoy-a-perfectly-crafted-cappuccino-with-a-beautiful-twist.jpg?s=612x612&w=0&k=20&c=PwLcZk-OoqdlDMBCX74Eaehw_M0EmwUIELckrt9vEjQ=",
          }} 
          style={styles.coffeeImage}
        />
       
        <View style={styles.coffeeDetails}>
          <Text style={styles.coffeeDescription}>Espresso</Text>
          <Text style={styles.desc}>With Steamed Milk</Text>
          <Text style={styles.coffeePrice}>$5.00</Text>
        </View>
      
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.coffeeItem}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1496859162/photo/coffee-cup-latte-art-on-wooden-table-cafe-menu.jpg?s=612x612&w=0&k=20&c=bDz1TO4e0NfMOgUYpAAWWDzba3msUg2cSLSzXV6iZVk=",
          }} 
          style={styles.coffeeImage}
        />
       
        <View style={styles.coffeeDetails}>
          <Text style={styles.coffeeDescription}>Espresso</Text>
          <Text style={styles.desc}>With Steamed Milk</Text>
          <Text style={styles.coffeePrice}>$5.00</Text>
        </View>
      
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.coffeeItem}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1396456676/photo/coffee-grains-seamless-pattern.jpg?s=612x612&w=0&k=20&c=OGu1cKKaIN3GCS8ByR-QfaZ6kH3aoTjkRQn3fjXiQw0=",
          }} 
          style={styles.coffeeImage}
        />
      
        <View style={styles.coffeeDetails}>
          <Text style={styles.coffeeDescription}>Espresso</Text>
          <Text style={styles.desc}>With Steamed Milk</Text>
          <Text style={styles.coffeePrice}>$5.00</Text>
        </View>
       
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.coffeeItem}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1039706048/photo/coffee-beans.jpg?s=612x612&w=0&k=20&c=HAWwM-GrBV1vxBrxQmpT1WQrlTg9L5Yr9J4NyPSzWW0=",
          }} 
          style={styles.coffeeImage}
        />
    
        <View style={styles.coffeeDetails}>
          <Text style={styles.coffeeDescription}>Espresso</Text>
          <Text style={styles.desc}>With Steamed Milk</Text>
          <Text style={styles.coffeePrice}>$5.00</Text>
        </View>
      
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
