import {View, StyleSheet, Image} from "react-native";
import CustomText from "../UI/Text";
import CountryFlag from "react-native-country-flag";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../consts/styles";

function FreelancerReview({data}) {

    return (
        <View style={styles.container}>
            <View>
                <CustomText style={styles.header}>Reviews</CustomText>
            </View>
            <View>
                <CustomText style={styles.resultNumber}>Showing 1 - 1 out of 1 reviews</CustomText>
            </View>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Ionicons name='star' size={15} color={Colors.primary300}/>
                    <Ionicons name='star' size={15} color={Colors.primary300}/>
                    <Ionicons name='star' size={15} color={Colors.primary300}/>
                    <Ionicons name='star' size={15} color={Colors.primary300}/>
                </View>

                <View>
                    <CustomText style={styles.reviewHeader}>
                        {data.review_title}
                    </CustomText>
                    <CustomText style={styles.reviewText}>
                        {data.review_description} ... more
                    </CustomText>
                </View>
                <View style={styles.row}>
                    <Image
                        style={styles.profileImage}
                        source={require('../../assets/table.jpg')}
                    />
                    <View>
                        <View style={styles.row}>
                            <CountryFlag isoCode="al" size={17} style={styles.flag}/>
                            <CustomText>{data.review_user}</CustomText>
                            <CustomText style={styles.username}> {data.review_username}</CustomText>
                        </View>
                        {/*<StarRating*/}
                        {/*    rating={2}*/}
                        {/*/>*/}
                        <CustomText style={styles.time}> {data.review_date_created}</CustomText>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FreelancerReview;

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: '#d9d9d9',
        paddingBottom: 14,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    container: {
        marginHorizontal: '5%',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.35,
        shadowRadius: 4
    },
    content: {
        marginVertical: 15,
        borderColor: '#d9d9d9',
        paddingBottom: 14,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    resultNumber: {
        fontSize: 15,
        marginVertical: 15
    },
    reviewHeader: {
        fontWeight: 'bold',
        fontSize: 17,
        paddingVertical: 15
    },
    reviewText: {
        paddingBottom: 10
    },
    row: {
        flexDirection: 'row',
        marginVertical: 5
    },
    profileImage: {
        width: 40,
        height: 40,
        marginRight: 15
    },
    flag: {
        marginRight: 10
    },
    greyFont: {
        color: "#a9a9a9"
    },
    time: {
        color: "#a9a9a9"
    },
    username: {
        color: "#a9a9a9"
    }
})
