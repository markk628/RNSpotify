
import React, { Component } from 'react';
import {
	Alert,
	Linking,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	createSwitchNavigator,
	createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import InitialScreen from './InitialScreen.js';
import PlayerScreen from './PlayerScreen.js';
import { JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen } from "./screens";
import AddButton from "./components/AddButton";

const TabNavigator = createBottomTabNavigator(
    {
        Journal: {
            screen: PlayerScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
            }
        },
        Measures: {
            screen: MeasuresScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
            }
        },
        Add: {
            screen: () => null,
            navigationOptions: {
                tabBarIcon: <AddButton />
            }
        },
        Treatment: {
            screen: TreatmentScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="band-aid" size={24} color="#CDCCCE" />
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="user" size={24} color="#CDCCCE" />
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
);

const App = createSwitchNavigator({
	initial: { screen:InitialScreen },
    player: { screen: TabNavigator },
});

const AppContainer = createAppContainer(App);

export default AppContainer;
