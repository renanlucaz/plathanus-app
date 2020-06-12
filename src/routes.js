import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PhoneNumber from './pages/PhoneNumber';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Pin c" component={PhoneNumber} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
