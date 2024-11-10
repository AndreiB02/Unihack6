import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Modal, TextInput, Button, Image } from 'react-native';
import ProgressBar from '../MainPage/Components/ProgressBar';

const CoFundScreen = () => {
    const goalAmount = 1000;
    const [currentAmount, setCurrentAmount] = useState(350);

    const [itemsData, setItemsData] = useState([
        { id: '1', name: 'Lawnmower', price: 200, raised: 50, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: '2', name: 'Dining Table', price: 150, raised: 75, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: '3', name: 'Cordless Drill', price: 300, raised: 120, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: '4', name: 'Office Chair', price: 100, raised: 45, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { id: '5', name: 'Electric Heater', price: 250, raised: 55, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    const [donationAmount, setDonationAmount] = useState('');

    const calculateItemProgress = (item) => {
        return item.raised / item.price;
    };

    const calculateAverageProgress = () => {
        const totalProgress = itemsData.reduce((acc, item) => acc + item.raised / item.price, 0);
        return totalProgress / itemsData.length;
    };

    const handleDonateToItem = (itemId) => {
        const donation = parseFloat(donationAmount);
        if (isNaN(donation) || donation <= 0) {
            Alert.alert('Error', 'Please enter a valid donation amount.');
            return;
        }

        const updatedItems = itemsData.map(item => {
            if (item.id === itemId) {
                return { ...item, raised: item.raised + donation };
            }
            return item;
        });
        setItemsData(updatedItems);
        setDonationAmount('');
        Alert.alert('Donation', `You donated ${donation} units to ${itemsData.find(item => item.id === itemId).name}!`);
    };

    const handleAddItem = () => {
        if (newItemName.trim() === '' || isNaN(newItemPrice) || newItemPrice <= 0) {
            Alert.alert('Error', 'Please enter a valid name and price.');
            return;
        }
        const newItem = { id: (itemsData.length + 1).toString(), name: newItemName, price: parseFloat(newItemPrice), raised: 0, avatar: 'https://randomuser.me/api/portraits/men/6.jpg' };
        setItemsData([...itemsData, newItem]);
        setModalVisible(false);
        setNewItemName('');
        setNewItemPrice('');
        Alert.alert('Item Added', `You added ${newItem.name} with a price of ${newItem.price} units.`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CoFund Project</Text>

            <View style={styles.goalContainer}>
                <Text style={styles.goalText}>Goal: ${goalAmount}</Text>
                <Text style={styles.progressText}>Raised: ${currentAmount} of ${goalAmount}</Text>

                <ProgressBar
                    progress={calculateAverageProgress()}
                    color={calculateAverageProgress() === 1 ? "#00C853" : "#4CAF50"}
                    style={styles.progressBar}
                />
                {calculateAverageProgress() === 1 && (
                    <Text style={styles.goalAchievedText}>Goal Achieved! 🎉</Text>
                )}
            </View>

            <Text style={styles.itemsHeader}>Items for Fundraising</Text>
            <FlatList
                data={itemsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                    <View style={styles.itemHeader}>
                            <Image source={{ uri: item.avatar }} style={styles.itemAvatar} />
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                        <Text style={styles.itemPrice}>{item.raised}$ / {item.price}$</Text>

                        <ProgressBar
                            progress={calculateItemProgress(item)}
                            color={calculateItemProgress(item) === 1 ? "#00C853" : "#4CAF50"}
                            style={styles.progressBar}
                        />

                        <View style={styles.donateContainer}>
                            <TextInput
                                style={styles.donationInput}
                                placeholder="Enter amount"
                                value={donationAmount}
                                onChangeText={setDonationAmount}
                                keyboardType="numeric"
                            />
                            <TouchableOpacity
                                style={styles.donateButton}
                                onPress={() => handleDonateToItem(item.id)}
                            >
                                <Text style={styles.donateButtonText}>Donate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    )}
            />

            <TouchableOpacity style={styles.addItemButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addItemButtonText}>Add New Item</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalHeader}>Add New Item</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Enter Item Name"
                            value={newItemName}
                            onChangeText={setNewItemName}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Enter Item Price"
                            value={newItemPrice}
                            onChangeText={setNewItemPrice}
                            keyboardType="numeric"
                        />

                        <View style={styles.modalButtons}>
                            <Button title="Cancel" onPress={() => setModalVisible(false)} />
                            <Button title="Add Item" onPress={handleAddItem} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1.2,
    },
    goalContainer: {
        marginBottom: 30,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        paddingBottom: 20,
    },
    goalText: {
        fontSize: 20,
        color: '#333',
    },
    progressText: {
        fontSize: 18,
        color: '#4CAF50',
        marginTop: 10,
    },
    progressBar: {
        width: '100%',
        marginTop: 20,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
    },
    goalAchievedText: {
        fontSize: 18,
        color: '#00C853',
        marginTop: 10,
        fontWeight: 'bold',
    },
    donateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 15,
    },
    donationInput: {
        height: 40,
        width: 80,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
        marginRight: 10,
    },
    donateButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    donateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addItemButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 20,
    },
    addItemButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemsHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        position: 'relative',
    },
    itemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    itemPrice: {
        fontSize: 16,
        color: '#777',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        width: '80%',
        maxWidth: 400,
    },
    modalHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
        fontSize: 16,
    },
    modalButtons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default CoFundScreen;