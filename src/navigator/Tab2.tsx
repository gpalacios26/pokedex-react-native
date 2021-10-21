import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
    SearchScreen: undefined,
    PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Stack2 = createStackNavigator<RootStackParams>();

export const Tab2 = () => {
    return (
        <Stack2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack2.Screen name="SearchScreen" component={SearchScreen} />
            <Stack2.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack2.Navigator>
    );
}
