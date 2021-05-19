import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

export function Card({ name, description, cost, address, categorie }) {
    console.log(name);
    console.log(categorie);
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/img/logo.png')}
            />
            <View>
                <Text style={{ fontSize: 18, marginTop: 10 }}>
                    {name}
                </Text>
                <Text style={{ fontSize: 10, marginTop: 1, flexDirection: 'column' }}>
                    {description}
                </Text>
            </View>

        </View>
    );
}