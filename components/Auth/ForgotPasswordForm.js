import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../UI/Button';
import Input from './Input';

function ForgotPasswordForm({onSubmit, credentialsInvalid}) {
    const [enteredEmail, setEnteredEmail] = useState('');

    const {
        email: emailIsInvalid,
    } = credentialsInvalid;

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
        });
    }

    return (
        <View style={styles.form}>
            <View>
                <Input
                    onUpdateValue={updateInputValueHandler.bind(this, 'email')}
                    value={enteredEmail}
                    keyboardType="email-address"
                    isInvalid={emailIsInvalid}
                    placeholder='Email Address'
                />

                <View style={styles.buttons}>
                    <Button onPress={submitHandler}>
                        Change password
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default ForgotPasswordForm;

const styles = StyleSheet.create({
    buttons: {
        marginTop: 22
    }
});
