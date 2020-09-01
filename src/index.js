import React, { PureComponent } from 'react';
import SplashScreen from 'react-native-splash-screen';

import App from './App';
import { Provider } from 'react-redux';

export default class AppComponent extends PureComponent {
    componentDidMount = () => {
        SplashScreen.hide();
    }
    render() {
        return (
            <Provider store={reduxStore}>
                <App />
            </Provider>
        );
    }
}