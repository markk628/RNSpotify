/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react"
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Screen from "./screens/Screen";
import PlayerScreen from "./PlayerScreen.js";

export const JournalScreen = () => <PlayerScreen name="Journal" />;
export const MeasuresScreen = () => <Screen name="Measures" />;
export const TreatmentScreen = () => <Screen name="Treatment" />;
export const ProfileScreen = () => <Screen name="Profile" />;

AppRegistry.registerComponent(appName, () => App);
