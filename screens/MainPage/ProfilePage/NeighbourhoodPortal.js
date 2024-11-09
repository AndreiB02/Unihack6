// Neighbourhood.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const NeighbourhoodPortal = () => {
    const navigation = useNavigation();

    const possessionsData = [
        { id: '1', name: 'Marie Curie', phone: '0249-437 030', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, item: 'Lawn Mower' },
        { id: '2', name: 'Charlie Puth', phone: '0722-457 706 ', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, item: 'Grill' },
        { id: '3', name: 'Bruno Mars', phone: '0723-605 613 ', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, item: 'Pressure washer' },
        { id: '4', name: 'Sam White', phone: '0744-872 202', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, item: 'Drill' },
    ];

    const SharedItemsList = () => (
        <FlatList
            data={possessionsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={item.profilePhoto} style={styles.profilePhoto} />
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{item.item}</Text>
                        <Text style={styles.item}>Currently at: {item.name}</Text>
                        <Text style={styles.phone}>{item.phone}</Text>
                    </View>
                </View>
            )}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.neighbourhoodName}>🏠GHIRODA</Text>

                <TouchableOpacity
                    style={styles.membersButton}
                    onPress={() => navigation.navigate('MembersList')}
                >
                    <Text style={styles.sectionTitle}>Members</Text>
                </TouchableOpacity>
                <Text style={styles.text}>100 people</Text>

                <Text style={styles.sectionTitle}>Helper of the Month</Text>
                <View style={styles.helperContainer}>
                    <Image source={require('../../../assets/profilePhoto.png')} style={styles.profilePhotoHelper} />
                    <View style={styles.helperTextContainer}>
                        <Text style={styles.textName}>Barbul Karina</Text>
                        <Text style={styles.points}>7000 points</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Neighbourhood Shared Items</Text>
                <SharedItemsList />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        padding: 20,
    },
    helperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    membersButton: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    helperTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    neighbourhoodName: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    profilePhotoHelper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 0,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textName: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    points: {
        fontSize: 18,
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        alignItems: 'center',
    },
    profilePhoto: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    phone: {
        fontSize: 15,
        color: '#555',
    },
    item: {
        fontSize: 14,
        color: '#555',
    },
});

export default NeighbourhoodPortal;