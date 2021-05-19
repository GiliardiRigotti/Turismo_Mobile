import React from 'react'
import { Text, View } from 'react-native'
import { Cost } from '../../components/Cost';

export function ViewScreen({route, navigation}){
    const {name, description, categorie} = route.params;
    console.log(name);
    return(
        <View>
            <Text>{name}</Text>
            <Text>{categorie}</Text>
            <Text>{description}</Text>
            <Cost cost={1}/>
        </View>
    );
}