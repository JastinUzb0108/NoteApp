import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CreateTitle, SearchBar, Info, NoteDetail } from '../../screens';
import TabStacks from './TabStacks';

const Stack = createStackNavigator()

export default function Stacks() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={TabStacks}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="CreateTitle"
                component={CreateTitle}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="SearchBar"
                component={SearchBar}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Info"
                component={Info}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="NoteDetail"
                component={NoteDetail}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
}