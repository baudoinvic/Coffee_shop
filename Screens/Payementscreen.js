
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const Payementscreen = () => {

  const navigation = useNavigation();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (field, value) => {
    setCardDetails({ ...cardDetails, [field]: value });
  };

  const handlePayNow = () => {
    if (selectedPaymentMethod === "Credit Card") {
    
      if (cardDetails.cardNumber && cardDetails.expiryDate && cardDetails.cvv) {
        Alert.alert(
          "Payment Successful",
          "Your payment with Credit Card was successful!"
        );
      } else {
        Alert.alert(
          "Incomplete Information",
          "Please fill in all the credit card details."
        );
      }
    } else if (selectedPaymentMethod === "PayPal") {
     
      Alert.alert(
        "Redirecting to PayPal",
        "You are being redirected to PayPal to complete the payment."
      );
     
    } else {
      Alert.alert("No Payment Method", "Please select a payment method.");
    }
  };

  return (
    <View style={styles.container}>
   
      <View style={styles.orderSummary}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.itemRow}>
          <Text>Coffee Item</Text>
          <Text>$5.00</Text>
        </View>
        <View style={styles.itemRow}>
          <Text>Total:</Text>
          <Text>$5.00</Text>
        </View>
      </View>

      <View style={styles.paymentMethods}>
        <Text style={styles.sectionTitle}>Select Payment Method</Text>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === "Credit Card" && styles.selectedOption,
          ]}
          onPress={() => setSelectedPaymentMethod("Credit Card")}
        >
          <Text>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === "PayPal" && styles.selectedOption,
          ]}
          onPress={() => setSelectedPaymentMethod("PayPal")}
        >
          <Text>PayPal</Text>
        </TouchableOpacity>
      </View>

      {/* Show Credit Card Input Fields if Credit Card is Selected */}
      {selectedPaymentMethod === "Credit Card" && (
        <View style={styles.creditCardForm}>
          <Text style={styles.sectionTitle}>Enter Card Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            keyboardType="numeric"
            value={cardDetails.cardNumber}
            onChangeText={(text) => handleInputChange("cardNumber", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date (MM/YY)"
            keyboardType="numeric"
            value={cardDetails.expiryDate}
            onChangeText={(text) => handleInputChange("expiryDate", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            keyboardType="numeric"
            value={cardDetails.cvv}
            onChangeText={(text) => handleInputChange("cvv", text)}
          />
        </View>
      )}

     
      <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
        <Text style={styles.payButtonText}>Pay from Credit Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  orderSummary: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  paymentMethods: {
    marginBottom: 20,
  },
  paymentOption: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedOption: {
    borderColor: "#4CAF50",
    borderWidth: 2,
  },
  creditCardForm: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  payButton: {
    backgroundColor: "#D17842",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Payementscreen;
