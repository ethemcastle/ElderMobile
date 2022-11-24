import {Image, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../consts/styles";
import CountryFlag from "react-native-country-flag";
import CustomText from "../UI/Text";


function FreelancerPersonal({data}) {

    return (
        <View>
            <View>
                <Image
                    style={styles.fullImage}
                    source={require('../../assets/table.jpg')}
                />
            </View>
            <View style={styles.center}>
                <Image
                    style={styles.tinyImage}
                    source={require('../../assets/profile-picture-girl.png')}
                />
            </View>
            <View style={styles.center}>
                <CustomText style={styles.name}>{data.full_user_name}</CustomText>
                <CustomText style={styles.username}> {data.username}</CustomText>
            </View>
            <View style={styles.center}>
                <View style={styles.icon}>
                    <Ionicons name='star' size={15} color={Colors.primary300}/>
                </View>
                <CustomText>{data.rate}</CustomText>
            </View>
            <View style={styles.center}>
                <View style={styles.icon}>
                    <CountryFlag isoCode="al" size={17}/>
                </View>
                <CustomText>{data.country}</CustomText>
            </View>
            <View style={styles.center}>
                <CustomText style={styles.bold}>${data.payment} USD / hour</CustomText>
            </View>
        </View>
    )
}


export default FreelancerPersonal;


const styles = StyleSheet.create({
    tinyImage: {
        width: 200,
        height: 200,
        marginVertical: 15
    },
    fullImage: {
        width: '100%',
        height: 80,
    },
    center: {
        textAlign: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5
    },
    bold: {
        fontWeight: "bold"
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25
    },
    username: {
        fontSize: 25,
        color: "#a9a9a9"
    },
    icon: {
        marginRight: 7
    }
})
