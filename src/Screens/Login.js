import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux';
// import { login } from '../redux/actions';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            emailError: '',
            errorMssg: '',
            errorMssg_2: '',
            passError: '',
        }
    }

    checkLogin() {
        const { email, password } = this.state
        if (email == '' && password == '') {
            this.setState({ emailError: "Email field cannot be empty" })
            this.setState({ errorMssg_2: "Password field cannot be empty" })
        }
        else if (email == 'admin@admin.com' && password == '123123') {
            //   console.warn('IN')
            this.props.navigation.navigate('Users')

        }
        else {
            // console.warn('OUT')
            this.setState({ errorMssg: "Email or Password do not match!" })
        }
    }

    checkEmail() {
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/
        let isValid = regex.test(this.state.email)

        if (!isValid) {
            this.setState({ emailError: "Invalid Email" })
            if (this.state.email == "")
                this.setState({ emailError: "Email field cannot be empty" })
        }
        else {
            this.setState({ emailError: "" })
        }
    }

    // checkPassword(){
    //   let regex = /[0-9a-zA-Z]{3,}/
    //   let isValid = regex.test(this.state.password)

    //   if(!isValid){
    //     this.setState({passError: "Password must have atleast 3 characters"})
    //     if(this.state.email == "")
    //       this.setState({passError: "Password field cannot be empty"})
    //   }
    //   else{
    //     this.setState({emailError: ""})
    //   }
    // }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={{fontSize:30}}>First App</Text> */}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onBlur={() => this.checkEmail()}
                    onChangeText={text => this.setState({ email: text })}
                    keyboardType={'email-address'}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.password.focus(); }}
                    blurOnSubmit={false}
                />
                <Text style={{ color: 'red' }}>
                    {this.state.emailError}
                </Text>
                <Text style={{ color: 'red' }}>
                    {this.state.errorMssg}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onFocus={() => this.setState({ passError: "Password must have atleast 3 characters" })}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry={true}
                    ref={(input) => { this.password = input; }}
                />
                <Text style={{ color: 'red' }}>
                    {this.state.errorMssg_2}
                </Text>
                <Text style={{ color: 'red' }}>
                    {this.state.errorMssg}
                </Text>
                <Text style={{ color: 'red' }}>
                    {this.state.passError}
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={_ => this.checkLogin()}>
                    <Text>Login</Text>
                </TouchableOpacity>
                {/* <Text style={{color:'red'}}>
             {this.state.errorMssg}
            </Text> */}
            </View>
        )
    }
}

export default connect()(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    input: {
        width: 200,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginTop: 10,
    },
    button: {
        width: "35%",
        backgroundColor: "#eb9e34",
        borderRadius: 25,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }
});