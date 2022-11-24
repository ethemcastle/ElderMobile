import {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FlatButton from '../UI/FlatButton';
import ForgotPasswordForm from "./ForgotPasswordForm";
import {Colors} from "../../consts/styles";

function ForgotPasswordContent({onAuthenticate, successful}) {

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
    });

    function switchAuthModeHandler(state = '', val = '') {
        if (state === 'login') {
            navigation.replace('Login')
        } else {
            navigation.replace('Signup')
        }
    }

    function submitHandler(credentials) {
        let {
            email,
        } = credentials;

        email = email.trim();

        const emailIsValid = email.includes('@');

        if (
            !emailIsValid
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
            });
            return;
        }
        onAuthenticate({email});
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/techelder.png')}
                />
            </View>
            <View style={styles.authContent}>
                <Text style={successful ? styles.message : ''}>{successful ? 'Check your email and try to login!': ''}</Text>
                <ForgotPasswordForm
                    onSubmit={submitHandler}
                    credentialsInvalid={credentialsInvalid}
                />
                <View style={styles.buttons}>
                    <FlatButton onPress={switchAuthModeHandler.bind(this, 'login')}>
                        Log in
                    </FlatButton>
                    <FlatButton>
                        |
                    </FlatButton>
                    <FlatButton onPress={switchAuthModeHandler}>
                        Create a new user
                    </FlatButton>
                </View>
            </View>
        </ScrollView>

    );
}

export default ForgotPasswordContent;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 12,
        textAlign: "center",
        color: '#575757',
        marginTop: 10,
        paddingHorizontal: 20
    },
    header: {
        marginTop: 128,
        marginHorizontal: 32,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    authContent: {
        marginTop: 24,
        marginHorizontal: 8,
        padding: 16,
        borderRadius: 8,
    },
    buttons: {
        marginTop: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tinyLogo: {
        height: 150,
        width: 200
    },
    message: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: Colors.green200,
        color: '#005bb4',
        height: 40,
        paddingVertical: 10,
        fontWeight: "bold"
    }
});
