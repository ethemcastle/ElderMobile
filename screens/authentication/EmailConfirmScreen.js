import {Image, StyleSheet, Text, View} from "react-native";
import Button from "../../components/UI/Button";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../consts/styles";

function ConfirmEmailScreen() {
    const navigation = useNavigation();

    function submitHandler() {
        navigation.replace('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/techelder.png')}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Ionicons style={styles.icon} name='infocirlceo' color={Colors.primary300} size={32}/>
                    <Text>
                        Please check your email and click the
                        confirmation link in order to activate the account!
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <Button onPress={submitHandler}>
                        Go to login
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
    },
    content: {
        marginTop: 70
    },
    header: {
        marginTop: 128,
        marginHorizontal: 32,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttons: {
        marginTop: 32
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,

    },
    icon: {
        paddingRight: 30
    },
    message: {

    }
});
