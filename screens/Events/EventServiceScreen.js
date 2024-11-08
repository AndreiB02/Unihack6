// EventServiceScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EventCardComponent from '../Components/EventCardComponent'; // Adjust the path if needed

const EventServiceScreen = ({ navigation }) => {
    const events = [
        {
            id: '1',
            title: 'Community Clean-up',
            organizer: 'John Doe',
            phone: '123-456-7890',
            description: 'Join us for a community clean-up event.',
            date: '2024-11-20',
            location: 'Park Avenue, NY',
            profileImage: 'https://www.w3schools.com/w3images/avatar2.png',
            needs: [
                { item: 'Chairs', fulfilled: 1, total: 5 },
                { item: 'Tables', fulfilled: 3, total: 4 },
            ],
        },
        {
            id: '2',
            title: 'Yoga Session',
            organizer: 'Jane Smith',
            phone: '987-654-3210',
            description: 'Outdoor yoga for beginners. All levels welcome!',
            date: '2024-11-22',
            location: 'Sunset Park, NY',
            profileImage: 'https://www.w3schools.com/w3images/avatar2.png',
            needs: [
                { item: 'Yoga mats', fulfilled: 3, total: 5 },
                { item: 'Water bottles', fulfilled: 2, total: 5 },
            ],
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {events.map((event) => (
                    <EventCardComponent key={event.id} event={event} />
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddEventScreen')}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
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

export default EventServiceScreen;
