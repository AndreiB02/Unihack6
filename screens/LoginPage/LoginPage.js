// LoginPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if ( username === ''   && password === ''  ) {
            navigation.navigate('Home');
        } else {
            Alert.alert('Invalid Credentials', 'Username or password is incorrect.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />

            {/* Add Account Button */}
            <TouchableOpacity onPress={() => navigation.navigate('AddAccount')} style={styles.addAccountButton}>
                <Text style={styles.addAccountText}>Add Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    addAccountButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    addAccountText: {
        color: 'blue',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default LoginPage;
