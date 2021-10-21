import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255, 0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 80 : 60
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Tab1}
                options={{
                    tabBarLabel: "Listado",
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name="list-outline"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Tab2}
                options={{
                    tabBarLabel: "Búsqueda",
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name="search-outline"
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}