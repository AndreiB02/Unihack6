// EventCardComponent.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import the useNavigation hook
import ProgressBar from './ProgressBar';  // Assuming you have a ProgressBar component

const EventCardComponent = ({ event }) => {
    const navigation = useNavigation();  // Use the hook to get the navigation object

    return (
        <View style={styles.cardContainer}>
            {/* Profile Header */}
            <View style={styles.header}>
                <Image source={{ uri: event.profileImage }} style={styles.profileImage} />
                <View style={styles.profileDetails}>
                    <Text style={styles.cardTitle}>{event.title}</Text>
                    <Text style={styles.cardName}>Organized by: {event.organizer}</Text>
                </View>
            </View>

            {/* Description */}
            <Text style={styles.cardDescription}>{event.description}</Text>

            {/* Date and Location */}
            <View style={styles.dateLocationContainer}>
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.eventLocation}>{event.location}</Text>
            </View>

            {/* Needs Section */}
            <View style={styles.needsContainer}>
                <Text style={styles.needsTitle}>Event Needs:</Text>
                {event.needs.map((need, index) => {
                    const progress = need.total ? (need.fulfilled / need.total) : 0;
                    return (
                        <View key={index} style={styles.needItemContainer}>
                            <Text style={styles.needItem}>{need.fulfilled} / {need.total} {need.item}</Text>
                            <ProgressBar progress={progress} color="#4CAF50" style={styles.progressBar} />
                        </View>
                    );
                })}
            </View>

            {/* Join Button */}
            <TouchableOpacity
                style={styles.joinButton}
                onPress={() => navigation.navigate('JoinEvent', { event })}  // Use the navigation hook
            >
                <Text style={styles.joinButtonText}>Join Event</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileDetails: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardName: {
        fontSize: 16,
        color: '#666',
    },
    cardDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    dateLocationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    eventDate: {
        fontSize: 14,
        color: '#777',
    },
    eventLocation: {
        fontSize: 14,
        color: '#777',
    },
    needsContainer: {
        marginBottom: 10,
    },
    needsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    needItemContainer: {
        marginBottom: 5,
    },
    needItem: {
        fontSize: 14,
        color: '#555',
    },
    progressBar: {
        marginTop: 5,
        height: 10,
        borderRadius: 5,
    },
    joinButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    joinButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EventCardComponent;
