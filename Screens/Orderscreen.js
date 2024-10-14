import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";


const Orderscreen = () => {
  return (
    <View style={styles.container}>
      <Text>Order History</Text>
      <View style={styles.order}>
        <View style={styles.left}>
          <Text>Order Date</Text>
          <Text>20th March 17:23</Text>
        </View>
        <View style={styles.right}>
          <Text>Total amount</Text>
          <Text>$74.40</Text>
        </View>
      </View>

      <View style={styles.cartItem}>
        <View style={styles.fix}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1484464555/photo/sip-savor-and-enjoy-a-perfectly-crafted-cappuccino-with-a-beautiful-twist.jpg?s=612x612&w=0&k=20&c=PwLcZk-OoqdlDMBCX74Eaehw_M0EmwUIELckrt9vEjQ=",
            }}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.textcart}>Cappuccino</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default Orderscreen
