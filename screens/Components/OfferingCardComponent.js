// OfferingCardComponent.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OfferingCardComponent = ({ name, profileImage, phone, description, title }) => {
    return (
        <View style={styles.cardContainer}>
            {/* Profile Header */}
            <View style={styles.header}>
                <Image source={{ uri: profileImage }} style={styles.profileImage} />
                <View style={styles.profileDetails}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardName}>{name}</Text>
                </View>
            </View>

            {/* Phone and Description */}
            <View style={styles.content}>
                <View style={styles.phoneSection}>
                    <Icon name="call" size={18} color="#4CAF50" />
                    <Text style={styles.phoneText}>{phone}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>
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
    content: {
        marginTop: 5,
    },
    phoneSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    phoneText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 5,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});

export default OfferingCardComponent;
