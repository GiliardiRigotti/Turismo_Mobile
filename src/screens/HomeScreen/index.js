import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import { Card } from '../../components/Cards';
import api from '../../services/Api';
import { styles } from './styles';

export function HomeScreen({ navigation }) {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await api.get('Picarras');
            console.log(response.data);
            setData(response.data);
        }
        getData();
    }, [])
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Turismo</Text>
            </View>
            <View style={styles.container}>
                
            </View>
        </View>
        
    );
}