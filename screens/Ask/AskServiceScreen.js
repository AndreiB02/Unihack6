// AskServiceScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AskCardComponent from '../Components/AskCardComponent';

const AskServiceScreen = ({ navigation }) => {
    const asks = [
        {
            id: '1',
            title: 'Need a Plumber',
            name: 'John Doe',
            phone: '123-456-7890',
            description: 'Looking for a plumber to fix a leaking pipe.',
            profileImage: 'https://www.w3schools.com/w3images/avatar2.png', // Placeholder image
        },
        {
            id: '2',
            title: 'Carpenter Needed',
            name: 'Jane Smith',
            phone: '987-654-3210',
            description: 'I need help assembling some furniture.',
            profileImage: 'https://www.w3schools.com/w3images/avatar2.png', // Placeholder image
        },
        // Add more asks here
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {asks.map((ask) => (
                    <AskCardComponent
                        key={ask.id}
                        ask={ask}
                    />
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddAskScreen')}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    scrollViewContent: {
        paddingBottom: 80,  // Add extra space at the bottom to avoid overlap with the button
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#4CAF50',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5,
    },
    addButtonText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default AskServiceScreen;
