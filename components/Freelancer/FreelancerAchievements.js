import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../consts/styles";
import CustomText from "../UI/Text";

function FreelancerAchievements({data}) {


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <CustomText style={styles.achievement}><CustomText style={styles.percentage}>{data.jobs_completed}% </CustomText> Jobs
                    Completed</CustomText>
                <CustomText style={styles.achievement}><CustomText style={styles.percentage}>{data.on_time}% </CustomText> On
                    Budget</CustomText>
            </View>
            <View style={styles.row}>
                <CustomText style={styles.achievement}><CustomText style={styles.percentage}>{data.on_budget}% </CustomText> On Time</CustomText>
                <CustomText style={styles.achievement}><CustomText style={styles.percentage}>{data.on_repeat_hire_rate}%
                </CustomText>  Repeat Hire Rate</CustomText>
            </View>
        </View>
    )
}

export default FreelancerAchievements;


const styles = StyleSheet.create({
    center: {
        textAlign: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5
    },
    bold: {
        fontWeight: "bold"
    },
    row: {
        textAlign: "center",
        flexDirection: 'row'
    },
    achievement: {
        width: '40%',
        marginHorizontal: '5%'
    },
    container: {
        marginVertical: 20
    },
    percentage: {
        color: Colors.primary300,
        fontWeight: 'bold'
    }
})
