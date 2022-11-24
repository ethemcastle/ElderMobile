import {Image, View, StyleSheet, Pressable} from "react-native";
import Button from "../UI/Button";
import {useNavigation} from "@react-navigation/native";
import CustomText from "../UI/Text";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../consts/styles";
import CountryFlag from "react-native-country-flag";
import {useEffect, useRef, useState} from "react";
import {getAllFreelancers} from "../../util/freelancer";

function FreelancerItem({data}) {
    const navigation = useNavigation();
    const [jobList, setJobList] = useState([])

    function clickHandler() {
        navigation.navigate('FreelancerDetails', {id: '1'});
    }

    async function allJobs() {
        setJobList(await getAllFreelancers());
        console.log(jobList.data);
    }

    // useEffect(async () => {
    //     allJobs();
    //     data = {
    //         full_user_name: 'Raul B.',
    //         username: '@raulbass',
    //         rate: 4.8,
    //         country: 'Albania',
    //         payment: '80$',
    //         title: 'Graphic Designer & Software Architect',
    //         description: 'Strong experience in software Architecture & Graphic Design. Working with Angular ' +
    //             '6 (backwards captile will work on 2, 4, 5) .NET core Web API is the main focus for back-end services',
    //         skills: ['Website Design', 'Graphic Design', 'Software Architecture']
    //     }
    // }, [])

    const data2 = {
        full_user_name: 'Raul B.',
        username: '@raulbass',
        rate: 4.8,
        country: 'Albania',
        payment: '80$',
        title: 'Graphic Designer & Software Architect',
        description: 'Strong experience in software Architecture & Graphic Design. Working with Angular ' +
            '6 (backwards captile will work on 2, 4, 5) .NET core Web API is the main focus for back-end services',
        skills: ['Website Design', 'Graphic Design', 'Software Architecture']
    }

    function skillList() {
        // let skills = [];
        // if (data2.skills) {
        //     data2.skills.forEach((item, i) => {
        //         if (i !== data2.skills.length - 1)
        //             item += ' . '
        //         skills.push(<CustomText>{item}</CustomText>)
        //
        //     })
        // }

        return <CustomText>hhh</CustomText>
    }

    return (
        <Pressable onPress={clickHandler} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.row}>
                    {/*<Image*/}
                    {/*    style={styles.tinyLogo}*/}
                    {/*    source={require('../../assets/techelder.png')}*/}
                    {/*/>*/}
                    <View>
                        <View style={styles.row}>
                            {/*<CustomText style={styles.text}>{data2.full_user_name} </CustomText>*/}
                            {/*<CustomText style={styles.text}> @{data2.username}</CustomText>*/}
                        </View>
                        {/*<Icon></Icon>*/}
                        <View style={styles.row}>
                            {/*<View style={styles.starIcon}>*/}
                            {/*    <Ionicons name='star' size={15} color={Colors.primary300}/>*/}
                            {/*</View>*/}
                            {/*<CustomText>{data2.rate}</CustomText>*/}
                        </View>
                        <View style={styles.row}>
                            {/*<View style={styles.starIcon}>*/}
                            {/*    <CountryFlag isoCode="al" size={17}/>*/}
                            {/*</View>*/}
                            {/*<CustomText style={styles.text}>{data2.country}</CustomText>*/}
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    {/*<CustomText style={styles.price}>${data2.payment} USD</CustomText>*/}
                    <CustomText style={styles.hour}> per hour</CustomText>
                </View>
                <View>
                    <CustomText style={styles.title}>
                        {/*{data2.title}*/}
                    </CustomText>
                </View>
                <View>
                    <CustomText style={styles.text} seeMore={true} numberOfLines={2}>
                        {data2.description}
                    </CustomText>
                </View>
                {/*<View style={styles.category}>*/}
                    {/*<CustomText style={styles.text}>{skillList()}</CustomText>*/}
                {/*</View>*/}
            </View>
            {/*<Button style={styles.button}>Hire</Button>*/}
        </Pressable>
    )
}

export default FreelancerItem;


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 16,
    },
    content: {
        paddingHorizontal: 10,
        paddingBottom: 30
    },
    tinyLogo: {
        height: 70,
        width: 100,
        marginRight: 20
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 2
    },
    price: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 3
    },
    hour: {
        paddingTop: 7,
        paddingLeft: 10,
        color: '#333333'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 3
    },
    text: {
        color: '#333333',
        lineHeight: 20
    },
    category: {
        marginTop: 10
    },
    button: {
        paddingTop: 10,
        paddingBottom: 0,
        height: 40,
    },
    starIcon: {
        marginRight: 5
    }
})
