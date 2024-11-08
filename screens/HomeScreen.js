// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Neighbourhood</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon
                        name="person-circle-outline"
                        size={40}
                        color="black"
                        style={styles.profileIcon}
                    />
                </TouchableOpacity>
            </View>

            {/* Offer Service Button */}
            <TouchableOpacity
                style={styles.offerButton}
                onPress={() => navigation.navigate('OfferServiceScreen')}
            >
                <Text style={styles.offerButtonText}>Offer Service</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.offerButton}
                onPress={() => navigation.navigate('AskServiceScreen')}
            >
                <Text style={styles.offerButtonText}>Ask for a new service</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.offerButton}
                onPress={() => navigation.navigate('EventServiceScreen')}
            >
                <Text style={styles.offerButtonText}>Events</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#f0f4f7',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
    },
    profileIcon: {
        marginRight: 10,
    },
    offerButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 20,
    },
    offerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    offeringsContainer: {
        paddingHorizontal: 16,
    },
});

export default HomeScreen;
