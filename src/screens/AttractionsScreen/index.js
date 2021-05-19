import React, { useEffect, useState } from 'react';
import { Button, FlatList, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import { Card } from '../../components/Cards';
import api from '../../services/Api';
import { styles } from './styles';

export function AttractionsScreen({ navigation }) {
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
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('View', { name: item.Name, description: item.Description, cost: item.Price, address: item.Address, categorie: item.Categorie});
                    }}>
                        <Card name={item.Name} />
                    </TouchableOpacity>

                )}
            />
        </View>
    );
}