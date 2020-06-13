import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PhoneNumber from './pages/PhoneNumber';
import PinCode from './pages/PinCode';
import CompleteRegistration from './pages/CompleteRegistration';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Phone" component={PhoneNumber} />
                <Stack.Screen name="Pin" component={PinCode} />
                <Stack.Screen
                    name="Complete"
                    component={CompleteRegistration}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
