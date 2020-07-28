import React, { PureComponent } from 'react';
import SplashScreen from 'react-native-splash-screen';

import App from './App';

export default class AppComponent extends PureComponent {
    componentDidMount = () => {
        SplashScreen.hide();
    }
    render() {
        return (
            <App />
        );
    }
}