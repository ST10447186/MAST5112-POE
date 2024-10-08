import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const HomeScreen = ({ navigation, menuItems }) => {
    return (
        <View>
            <Text>Total Items: {menuItems.length}</Text>
            <FlatList
                data={menuItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.dishName} - {item.course}</Text>
                        <Text>{item.description}</Text>
                        <Text>${item.price}</Text>
                    </View>
                )}
            />
            <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem')} />
        </View>
    );
};

export default HomeScreen;
