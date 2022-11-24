import {ScrollView, View, StyleSheet, Text} from "react-native";
import {Colors} from "../../consts/styles";
import FreelancerPersonal from "./FreelancerPersonal";
import FreelancerAchievements from "./FreelancerAchievements";
import CustomText from "../UI/Text";
import FreelancerReview from "./FreelancerReview";
import TopSkillsFreelancer from "./TopSkillsFreelancer";


function FreelancerDetails(props) {
    const {data} = props.route.params
    return (
        <ScrollView>
            <FreelancerPersonal/>
            <FreelancerAchievements/>
            <View style={styles.detailContainer}>
                <CustomText style={styles.detailsHeader}>Graphic Designer & Software Architect</CustomText>
                <CustomText style={styles.details}>
                    Strong experience in Software Architecture & Graphic design.
                    Working with Angular 6 (backwards compatible as well, will work on 2, 4, 5) .NET
                    core Web API is the main focus for back-end services
                </CustomText>
            </View>

            <View style={styles.spacer}></View>

            <FreelancerReview/>

            <View style={styles.spacer}></View>

            <TopSkillsFreelancer/>
        </ScrollView>
    )
}


export default FreelancerDetails;


const styles = StyleSheet.create({
    detailsHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: '5%',
        marginVertical: 10
    },
    details: {
        marginHorizontal: '5%'
    },
    spacer: {
        height: 30,
        backgroundColor: '#f5f5f6',
        marginVertical: 30
    },
    detailContainer: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.35,
        shadowRadius: 4
    }
})
