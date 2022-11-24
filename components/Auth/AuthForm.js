import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../UI/Button';
import Input from './Input';
import {Dropdown} from "react-native-element-dropdown";

function AuthForm({isLogin, onSubmit, credentialsInvalid}) {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredGender, setEnteredGender] = useState('');
    const [enteredBirthday, setEnteredBirthday] = useState('');
    const [enteredCountry, setEnteredCountry] = useState('');
    const [enteredIsFreelancer, setEnteredIsFreelancer] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

    const {
        email: emailIsInvalid,
        firstName: firstNameIsInvalid,
        lastName: lastNameIsInvalid,
        gender: genderIsInvalid,
        birthday: birthdayIsInvalid,
        country: countryIsInvalid,
        password: passwordIsInvalid,
        confirmPassword: passwordsDontMatch,
        isFreelancer: isFreelancerIsValid
    } = credentialsInvalid;

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'firstName':
                setEnteredFirstName(enteredValue);
                break;
            case 'lastName':
                setEnteredLastName(enteredValue);
                break;
            case 'gender':
                setEnteredGender(enteredValue);
                break;
            case 'birthday':
                setEnteredBirthday(enteredValue);
                break;
            case 'country':
                setEnteredCountry(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue);
                break;
            case 'isFreelancer':
                setEnteredIsFreelancer(enteredIsFreelancer);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            gender: enteredGender,
            birthday: enteredBirthday,
            country: enteredCountry,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            isFreelancer: enteredIsFreelancer
        });
    }

    const isFreelancer = [
        {label: 'Freelancer', value: true},
        {label: 'Employer', value: false},
    ];

    const countries = [
        {label: 'Albania', value: 1},
        {label: 'English', value: 2},
    ];


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
                {!isLogin && (
                    <>
                        <View style={styles.row}>
                            <Input
                                onUpdateValue={updateInputValueHandler.bind(this, 'firstName')}
                                value={enteredFirstName}
                                isInvalid={firstNameIsInvalid}
                                placeholder="First Name"
                            />
                            <Input
                                onUpdateValue={updateInputValueHandler.bind(this, 'lastName')}
                                value={lastNameIsInvalid}
                                placeholder="Last Name"
                            />
                        </View>
                        <View style={styles.row}>
                            <Dropdown
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={isFreelancer}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder='Select'
                                searchPlaceholder="Search..."
                                value={enteredIsFreelancer}
                                // onFocus={() => setIsFocus(true)}
                                // onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setEnteredIsFreelancer(item.value)
                                    // setValue(item.value);
                                    // setIsFocus(false);
                                }}
                            />
                            <Input
                                onUpdateValue={updateInputValueHandler.bind(this, 'birthday')}
                                value={enteredBirthday}
                                isInvalid={birthdayIsInvalid}
                                placeholder="Birthday"
                            />
                        </View>


                        <View style={styles.row}>
                            <Input
                                onUpdateValue={updateInputValueHandler.bind(this, 'gender')}
                                value={enteredGender}
                                isInvalid={genderIsInvalid}
                                placeholder="Gender"
                            />

                            {/*<Input*/}
                            {/*    onUpdateValue={updateInputValueHandler.bind(this, 'country')}*/}
                            {/*    value={enteredCountry}*/}
                            {/*    isInvalid={countryIsInvalid}*/}
                            {/*    placeholder="Country"*/}
                            {/*/>*/}
                            <Dropdown
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={countries}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder='Country'
                                searchPlaceholder="Search..."
                                value={enteredCountry}
                                // onFocus={() => setIsFocus(true)}
                                // onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setEnteredCountry(item.value)
                                }}
                            />
                        </View>

                    </>
                )}
                {isLogin && (
                    <Input
                        // label="Password"
                        onUpdateValue={updateInputValueHandler.bind(this, 'password')}
                        secure
                        value={enteredPassword}
                        isInvalid={passwordIsInvalid}
                        placeholder="Password"
                    />
                )}
                <View style={styles.row}>
                    {!isLogin && (
                        <>
                            <Input
                                // label="Password"
                                onUpdateValue={updateInputValueHandler.bind(this, 'password')}
                                secure
                                value={enteredPassword}
                                isInvalid={passwordIsInvalid}
                                placeholder="Password"
                            />
                            <Input
                                // label="Confirm Password"
                                onUpdateValue={updateInputValueHandler.bind(
                                    this,
                                    'confirmPassword'
                                )}
                                secure
                                value={enteredConfirmPassword}
                                isInvalid={passwordsDontMatch}
                                placeholder="Confirm Password"
                            />
                        </>
                    )}
                </View>
                <View style={styles.buttons}>
                    <Button onPress={submitHandler}>
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default AuthForm;

const styles = StyleSheet.create({
    buttons: {
        marginTop: 22
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropdownContainer: {
        // marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 16,
        // backgroundColor: '#f5f5f5',
        borderRadius: 12,
        fontSize: 16,
        height: 55,
        minWidth: '48.5%',
        width: '20%',
        borderColor: 'white'
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 55,
        width: '49%',
        borderColor: 'white',
        backgroundColor: '#f5f5f5',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 10
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
