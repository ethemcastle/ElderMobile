import {useState} from 'react';
import {Alert} from 'react-native';

import LoadingOverlay from '../../components/UI/LoadingOverlay';
import {forgetPassword} from '../../util/auth';
import ForgotPasswordContent from "../../components/Auth/ForgotPasswordContent";
import {useNavigation} from "@react-navigation/native";

function ForgetPasswordScreen() {
    const [isSending, setIsSending] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const navigation = useNavigation();

    async function forgotPasswordHandler({email, password}) {
        setIsSending(true);
        try {
            await forgetPassword(email);
            setSuccessful(true);
            setIsSending(false);

        } catch (error) {
            Alert.alert(
                'Email sent failed!',
                'There might be a server error!'
            );
            setIsSending(false);
        }
    }

    if (isSending) {
        return <LoadingOverlay message="Email is sending..."/>;
    }

    return <ForgotPasswordContent isLogin onAuthenticate={forgotPasswordHandler} successful={successful}/>;
}

export default ForgetPasswordScreen;
