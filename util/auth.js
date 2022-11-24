import axios from 'axios';
import {Alert} from "react-native";

const API_ROUTE = 'http://10.0.2.2:8000/'

async function signUpService(mode, email, firstName, lastName, gender, birthday, country, password) {
    const url = `${API_ROUTE}employer/sign-up/`
    const response = await axios.post(url, {
        user: {
            email: email,
            first_name: firstName,
            last_name: lastName,
            gender: 'm',
            birthday: '2000-04-01',
            country: 1,
            password: password
        },
        registration_date: '2000-01-01',
        location: 's'
    }).catch((e) => {
        console.log(e)
    });
    return response.data.token;
}

async function loginService(email, password) {
    const url = `${API_ROUTE}auth/knock-knock/`
    const response = await axios.post(url, {
        email: email,
        password: password
    }).catch((e) => {
        console.log(e)
    });

    return {token: response.data.access, UserFullName: response.data.user_full_name, isFreelacer: true};
}


export async function forgetPassword(email) {
    const url = `${API_ROUTE}reset-password-api/`
    const response = await axios.post(url, {
        email: email
    }).catch((e) => {
        Alert.alert(
            'Email sent failed!',
            e.error
        );
    })
}


export function createUser(email, firstName, lastName, gender, birthday, country, password) {
    return signUpService(email, firstName, lastName, gender, birthday, country, password);
}

export function login(email, password) {
    return loginService(email, password);
}
