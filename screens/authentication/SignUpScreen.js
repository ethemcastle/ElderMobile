import {useContext, useState} from 'react';
import {Alert} from 'react-native';

import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import {AuthContext} from '../../store/auth-context';
import {createUser} from '../../util/auth';
import {useNavigation} from "@react-navigation/native";

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const navigation = useNavigation()

    async function signupHandler({email, firstName, lastName, gender, birthday, country, password, isFreelancer}) {
        setIsAuthenticating(true);
        try {
            await createUser(email, firstName, lastName, gender, birthday, country, password, isFreelancer);
            navigation.replace('EmailConfirm');
        } catch (error) {
            setIsAuthenticating(false);
            Alert.alert(
                'Authentication failed',
                'Could not create user, please check your input and try again later.'
            );
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creating user..."/>;
    }

    return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
