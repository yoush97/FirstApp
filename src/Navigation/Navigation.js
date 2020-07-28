import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../Screens/Login';
import UsersScreen from '../Screens/Users';
import UserDetails from '../Screens/UserDetails';

export default class App extends Component {
    render() {
        return <AppNavigation />;
    }
}

const RootStack = createStackNavigator(
    {
        Login: Login,
        Users: UsersScreen,
        Details: UserDetails,
    },
    {
        initialRouteName: 'Login',
    }
);

const AppNavigation = createAppContainer(RootStack);


