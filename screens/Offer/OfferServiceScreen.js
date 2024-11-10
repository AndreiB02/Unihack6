import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OfferingCardComponent from '../Components/OfferingCardComponent';

// Import the fetchService function
import { fetchService } from '../../services/offers';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect

const OfferServiceScreen = ({ navigation }) => {
    const [offers, setOffers] = useState([]);

    // Use useFocusEffect to fetch data when the screen is focused
    useFocusEffect(
        React.useCallback(() => {
            const fetchOffers = async () => {
                try {
                    const fetchedOffers = await fetchService();

                    // Filter to include only offers where is_offered is true
                    const filteredOffers = fetchedOffers
                        .filter(offer => offer.is_offered);  // Only include items with is_offered set to true

                    setOffers(filteredOffers); // Update state with the filtered data
                } catch (error) {
                    console.error("Error fetching offers:", error);
                }
            };

            fetchOffers();
        }, []) // Empty dependency array ensures this runs only when the screen is focused
    );

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.offersContainer}>
                {offers.map((offer, index) => (
                    <OfferingCardComponent
                        key={index}
                        title={offer.name}
                        description={offer.description}
                        phone={offer.phone}
                        author={offer.author}
                    />
                ))}
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
