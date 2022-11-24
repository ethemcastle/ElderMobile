import {StyleSheet, Text, View} from "react-native";
import CustomText from "../UI/Text";

function TopSkillsFreelancer({data}) {

    function skillList() {
        let result = [];

        for (let item of data.skills) {
            result.push(
                <CustomText style={styles.skill}>{item}</CustomText>
            )
        }

        return result
    }

    return (
        <View style={styles.container}>
            <CustomText style={styles.header}>Top Skills</CustomText>
            <View>
                {skillList()}
            </View>
        </View>
    )
}

export default TopSkillsFreelancer;


const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: '#d9d9d9',
        paddingBottom: 14,
        marginBottom: 14,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    container: {
        marginHorizontal: '5%'
    },
    skill: {
        fontSize: 16,
        lineHeight: 35
    }
})
