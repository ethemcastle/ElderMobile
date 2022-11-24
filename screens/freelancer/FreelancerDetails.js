import {ScrollView, View, StyleSheet, Text} from "react-native";
import {Colors} from "../../consts/styles";
import FreelancerPersonal from "../../components/Freelancer/FreelancerPersonal";
import FreelancerAchievements from "../../components/Freelancer/FreelancerAchievements";
import CustomText from "../../components/UI/Text";
import FreelancerReview from "../../components/Freelancer/FreelancerReview";
import TopSkillsFreelancer from "../../components/Freelancer/TopSkillsFreelancer";
import SeeMore from "react-native-see-more-inline";


function FreelancerDetails(props) {
    const {id} = props.route.params

    const data = {
        full_user_name: 'Raul B.',
        username: '@nrlglobalservic6',
        rate: '4.8',
        country: 'Albania',
        payment: '80',
        jobs_completed: '100',
        on_time: '100',
        on_budget: '100',
        on_repeat_hire_rate: '100',
        title: 'Graphic Designer & Software Architect',
        description: 'Strong experience in Software Architecture & Graphic ' +
            'design. Working with Angular 6 (backwards compatible as well, ' +
            'will work on 2, 4, 5) .NET core Web API is the main focus for back-end services',
        review_title: 'GI Software Developement - Back end system ongoing work',
        review_description: ' Raul was excellent to work with. He is very attentive\n' +
            'to details and his expertise was above and beyon.',
        review_user: 'Robert G.',
        review_username: '@regifford12',
        review_date_created: '7 month ago',
        skills: [
            'Website Design',
            'Graphic Design',
            'Software Architecture',
            'Software Development'
        ]
    }
    return (
        <ScrollView>
            <FreelancerPersonal data={data}/>
            <FreelancerAchievements data={data}/>
            <View style={styles.detailContainer}>
                <CustomText style={styles.detailsHeader}>{data.title}</CustomText>

                <CustomText seeMore={true} style={styles.details} numberOfLines={1}>{data.description}</CustomText>

            </View>

            <View style={styles.spacer}></View>

            <FreelancerReview data={data}/>

            <View style={styles.spacer}></View>

            <TopSkillsFreelancer data={data}/>

            <View style={styles.spacer}></View>

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
