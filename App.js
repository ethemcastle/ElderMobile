import {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

import LoginScreen from "./screens/authentication/LoginScreen";
import SignupScreen from "./screens/authentication/SignUpScreen";
import AuthContextProvider, {AuthContext} from './store/auth-context';
import IconButton from "./components/UI/IconButton";
import ForgotPasswordScreen from "./screens/authentication/ForgotPasswordScreen";
import EmailConfirmScreen from "./screens/authentication/EmailConfirmScreen";
import AllFreelancer from "./screens/freelancer/AllFrelancer";
import FreelancerDetails from "./screens/freelancer/FreelancerDetails";
import {Text} from "react-native";

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                // headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: 'white',
                headerShown: false,
                contentStyle: {backgroundColor: 'white'},
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="EmailConfirm" component={EmailConfirmScreen}/>
        </Stack.Navigator>
    );
}

function AuthenticatedStack() {
    const authCtx = useContext(AuthContext);
    return (
        <Stack.Navigator
            screenOptions={{
                // headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: 'black',
                contentStyle: {backgroundColor: 'white'},
            }}
        >
            <Stack.Screen
                name="AllFreelancer"
                component={AllFreelancer}
                options={{
                    headerRight: ({tintColor}) => (
                        <IconButton
                            icon="exit"
                            color={tintColor}
                            size={24}
                            onPress={authCtx.logout}
                        />
                    ),
                }}
            />

            <Stack.Screen name="FreelancerDetails" component={FreelancerDetails}/>
        </Stack.Navigator>
    );
}

function Navigation() {
    const authCtx = useContext(AuthContext);

    return (
        <NavigationContainer>
            {!authCtx.isAuthenticated && <AuthStack/>}
            {authCtx.isAuthenticated && <AuthenticatedStack/>}
        </NavigationContainer>
    );
}

function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem('token');

            if (storedToken) {
                authCtx.authenticate(storedToken);
            }

            setIsTryingLogin(false);
        }

        fetchToken();
    }, []);

    if (isTryingLogin) {
        return <AppLoading/>;
    }

    return <Navigation/>;
}

export default function App() {
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.style = {color: '#d9d9d9'}
    // View.defaultProps.style =  { fontSize: 100 }

    return (
        <>
            <StatusBar style="light"/>
            <AuthContextProvider>
                <Root/>
            </AuthContextProvider>
        </>
    );
}
