// OfferServiceScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OfferingCardComponent from '../Components/OfferingCardComponent';

const OfferServiceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.offersContainer}>
                {/* Existing Offer Card as an example */}
                <OfferingCardComponent
                    name="Alice Johnson"
                    profileImage="https://www.w3schools.com/w3images/avatar6.png"
                    phone="555-123-4567"
                    title="Gardening Service"
                    description="Offering professional gardening services to help keep your plants healthy and beautiful."
                />
                <OfferingCardComponent
                    name="John Doe"
                    profileImage="https://www.w3schools.com/w3images/avatar2.png"
                    phone="123-456-7890"
                    title="Laptop for Sale"
                    description="Selling a gently used laptop in excellent condition. Perfect for students or professionals."
                />
                <OfferingCardComponent
                    name="Jane Smith"
                    profileImage="https://www.w3schools.com/w3images/avatar5.png"
                    phone="987-654-3210"
                    title="Chairs Available"
                    description="Set of 4 wooden chairs. Great for dining room or study."
                />
            </ScrollView>

            {/* Add Button */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddOfferScreen')}
            >
                <Icon name="add-circle" size={80} color="#4CAF50" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    offersContainer: {
        padding: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

export default OfferServiceScreen;
