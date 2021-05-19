import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Cost({ cost }) {
    if (cost == 1) {
        return (<Icon name='cash' color='green' size={60} />);
    } else {
        return (<Icon name='cash' color='green' size={60} />);
    }
}