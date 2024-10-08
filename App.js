import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuItemScreen from './screens/AddMenuItemScreen';

const Stack = createStackNavigator();

export default function App() {
    const [menuItems, setMenuItems] = useState([]);

    const addMenuItem = (item) => {
        setMenuItems([...menuItems, item]);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home">
                    {props => <HomeScreen {...props} menuItems={menuItems} />}
                </Stack.Screen>
                <Stack.Screen name="AddMenuItem">
                    {props => <AddMenuItemScreen {...props} addMenuItem={addMenuItem} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
