
// ProgressBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, color, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View
                style={[
                    styles.progress,
                    { width: `${progress * 100}%`, backgroundColor: color },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        borderRadius: 5,
    },
});

export default ProgressBar;
