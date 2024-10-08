import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';

const AddMenuItemScreen = ({ navigation, addMenuItem }) => {
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');
    const [course, setCourse] = useState('Starters');
    const [price, setPrice] = useState('');

    const handleAddItem = () => {
        addMenuItem({ dishName, description, course, price });
        navigation.navigate('Home');
    };

    return (
        <View>
            <Text>Add New Menu Item</Text>
            <TextInput placeholder="Dish Name" value={dishName} onChangeText={setDishName} />
            <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
            <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)}>
                <Picker.Item label="Starters" value="Starters" />
                <Picker.Item label="Mains" value="Mains" />
                <Picker.Item label="Desserts" value="Desserts" />
            </Picker>
            <TextInput placeholder="Price" value={price} keyboardType="numeric" onChangeText={setPrice} />
            <Button title="Add" onPress={handleAddItem} />
        </View>
    );
};

export default AddMenuItemScreen;

