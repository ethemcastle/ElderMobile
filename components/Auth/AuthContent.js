import {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FlatButton from '../UI/FlatButton';
import AuthForm from './AuthForm';

function AuthContent({isLogin, onAuthenticate}) {
    const navigation = useNavigation();

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        firstName: false,
        lastName: false,
        gender: false,
        birthday: false,
        country: false,
        password: false,
        confirmPassword: false
    });

    function switchAuthModeHandler(state='') {
        console.log(state)
        if (state==='forgotPassword') {
            navigation.replace('ForgotPassword')
        } else if (isLogin) {
            navigation.replace('Signup');
        } else {
            navigation.replace('Login');
        }
    }

    function submitHandler(credentials) {
        let {email, firstName, lastName, gender, birthday, country, password, confirmPassword, isFreelancer} = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const passwordsAreEqual = password === confirmPassword;

        if (
            !emailIsValid ||
            // !firstNameIsValid ||
            // !lastNameIsValid ||
            // !genderIsValid ||
            // !birthdayIsValid ||
            // !countryIsValid ||
            !passwordIsValid ||
            (!isLogin && !passwordsAreEqual)
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                // firstName: !firstNameIsValid,
                // lastName: !lastNameIsValid,
                // gender: !genderIsValid,
                // birthday: !birthdayIsValid,
                // country: !countryIsValid,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            });
            return;
        }
        onAuthenticate({email, firstName, lastName, gender, birthday, country, password, isFreelancer});
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Image
                    style={[!isLogin ? styles.tinyLogo : styles]}
                    source={require('../../assets/techelder.png')}
                />
                {/*<Text style={styles.headerText}>Welcome</Text>*/}
                {/*<Text style={styles.description}>*/}
                {/*    Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                {/*    industry. Lorem Ipsum has been the industry's standard dummy text ever.*/}
                {/*</Text>*/}
            </View>
            <View style={styles.authContent}>
                <AuthForm
                    isLogin={isLogin}
                    onSubmit={submitHandler}
                    credentialsInvalid={credentialsInvalid}
                />
                <View style={styles.buttons}>
                    <FlatButton onPress={switchAuthModeHandler}>
                        {isLogin ? 'Create a new user' : 'Log in instead'}
                    </FlatButton>
                    <FlatButton>
                        |
                    </FlatButton>
                    <FlatButton onPress={switchAuthModeHandler.bind(this, 'forgotPassword')}>
                        Forgot password?
                    </FlatButton>
                </View>
            </View>
        </ScrollView>

    );
}

export default AuthContent;

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
        // backgroundColor: Colors.primary800,
        // elevation: 2,
        // shadowColor: 'black',
        // shadowOffset: {width: 1, height: 1},
        // shadowOpacity: 0.35,
        // shadowRadius: 4,
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
    }
});
