import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const [points, setPoints] = useState(150);
    const navigation = useNavigation();

    const possessionsData = [
        { id: '1', item: 'Screwdriver', quantity: 1 },
        { id: '2', item: 'Chairs', quantity: 5 },
        { id: '3', item: 'Table', quantity: 1 },
        { id: '4', item: 'Laptop', quantity: 1 },
        { id: '5', item: 'Books', quantity: 20 },
    ];

    const neighborhoodData = [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
        { id: '3', name: 'Charlie' },
        { id: '4', name: 'Diana' },
        { id: '5', name: 'Eve' },
        { id: '6', name: 'Frank' },
        { id: '7', name: 'Grace' },
        { id: '8', name: 'Hank' },
    ];

    const neighborhoodInfo = {
        name: 'Ghiroda',
        population: '10,000',
        area: '50 km²',
        established: '1850',
        nearbyLandmarks: 'Karina',
        averageIncome: '€30,000',
        mainAttractions: 'aaa',
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.gender}>Male</Text>
                </View>
                <View style={styles.pointsSection}>
                    <Icon name="star" size={30} color="#ffd700" style={styles.pointsIcon} />
                    <Text style={styles.pointsText}>{points} Points</Text>
                </View>
            </View>

            <View style={styles.mainContent}>
                <View style={styles.profileSection}>
                    <View style={styles.possessionsTitleContainer}>
                        <Text style={styles.possessionsTitle}>Possessions</Text>
                    </View>
                    <View style={styles.tableContainer}>
                        <FlatList
                            data={possessionsData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>{item.item}</Text>
                                    <Text style={styles.tableCell}>{item.quantity}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.seeMoreButtonContainer}>
                        <Button
                            title="See More"
                            onPress={() => navigation.navigate('PossessionsSeeMore')}
                            color="#808080"
                        />
                    </View>
                </View>

                <View style={styles.neighborhoodSection}>
                    <View style={styles.neighborhoodTitleContainer}>
                        <Text style={styles.possessionsTitle}>Neighborhood</Text>
                    </View>
                    <View style={styles.neighborhoodContainer}>
                        <FlatList
                            data={neighborhoodData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.neighborCard}>
                                    <Icon name="person-circle" size={40} color="#4CAF50" />
                                    <Text style={styles.neighborName}>{item.name}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.seeMoreButtonContainer}>
                        <Button
                            title="See More"
                            onPress={() => navigation.navigate('NeighborhoodSeeMore')}
                            color="#808080"
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.neighborhoodFrame} onPress={() => navigation.navigate('NeighbourhoodPortal')}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.neighborhoodImage}
                />
                <View style={styles.neighborhoodDetails}>
                    <Text style={styles.neighborhoodName}>{neighborhoodInfo.name}</Text>
                    <Text style={styles.neighborhoodDetailText}>Population: {neighborhoodInfo.population}</Text>
                    <Text style={styles.neighborhoodDetailText}>Area: {neighborhoodInfo.area}</Text>
                    <Text style={styles.neighborhoodDetailText}>Funds: {neighborhoodInfo.established}</Text>
                    <Text style={styles.neighborhoodDetailText}>MOM: {neighborhoodInfo.nearbyLandmarks}</Text>
                    <Text style={styles.neighborhoodDetailText}>Average Income: {neighborhoodInfo.averageIncome}</Text>
                    <Text style={styles.neighborhoodDetailText}>Idk10: {neighborhoodInfo.mainAttractions}</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    profileContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        marginRight: 10,
        height: 160,
        borderRadius: 15,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    gender: {
        fontSize: 14,
        color: '#666',
    },
    pointsSection: {
        flex: 1,
        backgroundColor: '#fff8dc',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        borderRadius: 15,
    },
    pointsText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    pointsIcon: {
        marginBottom: 10,
    },
    mainContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileSection: {
        flex: 1,
        marginRight: 10,
    },
    neighborhoodSection: {
        flex: 1,
    },
    possessionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    possessionsTitleContainer: {
        backgroundColor: '#808080',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    tableContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        height: 230,
        borderRadius: 0,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCell: {
        fontSize: 16,
        color: '#444',
    },
    neighborhoodContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        height: 230,
        borderRadius: 0,
    },
    neighborCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    neighborName: {
        fontSize: 16,
        color: '#444',
        marginLeft: 10,
    },
    seeMoreButtonContainer: {
        backgroundColor: '#808080',
        borderRadius: 5,
        marginTop: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    neighborhoodTitleContainer: {
        backgroundColor: '#808080',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    neighborhoodFrame: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
        height: 220,
    },
    neighborhoodImage: {
        width: 180,
        height: 180,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    neighborhoodDetails: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    neighborhoodName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    neighborhoodDetailText: {
        fontSize: 14,
        color: '#666',
    },
});

export default Profile;