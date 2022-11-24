import axios from 'axios';
import {useContext, useEffect, useState} from 'react';

import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import Filter from "../../components/Freelancer/Filter";
import FreelancerItem from "../../components/Freelancer/FreelancerItem";
import {getAllFreelancers} from "../../util/freelancer";

function AllFreelancer() {
    const [jobList, setJobList] = useState([]);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function allFreelancers() {
    //         let freelancers = getAllFreelancers();
    //         if (freelancers)
    //             setJobList(freelancers);
    //     }
    //
    //     allFreelancers();
    // }, [])

    const data = [{
        id: 1,
        full_user_name: 'Raul B.',
        username: '@raulbass',
        rate: 4.8,
        country: 'Albania',
        payment: '80$',
        title: 'Graphic Designer & Software Architect',
        description: 'Strong experience in software Architecture & Graphic Design. Working with Angular ' +
            '6 (backwards captile will work on 2, 4, 5) .NET core Web API is the main focus for back-end services',
        skills: ['Website Design', 'Graphic Design', 'Software Architecture']
    },
        {
            id: 2,
            full_user_name: 'Raul B.',
            username: '@raulbass',
            rate: 4.8,
            country: 'Albania',
            payment: '80$',
            title: 'Graphic Designer & Software Architect',
            description: 'Strong experience in software Architecture & Graphic Design. Working with Angular ' +
                '6 (backwards captile will work on 2, 4, 5) .NET core Web API is the main focus for back-end services',
            skills: ['Website Design', 'Graphic Design', 'Software Architecture']
        },
        {
            id: 3,
            full_user_name: 'Raul B.',
            username: '@raulbass',
            rate: 4.8,
            country: 'Albania',
            payment: '80$',
            title: 'Graphic Designer & Software Architect',
            description: 'Strong experience in software Architecture & Graphic Design. Working with Angular ' +
                '6 (backwards captile will work on 2, 4, 5) .NET core Web API is the main focus for back-end services',
            skills: ['Website Design', 'Graphic Design', 'Software Architecture']
        }]

    function renderFreelancerItems() {
        // let data = {
        //     full_user_name: ''
        // }
        // jobList.forEach((item, i) => {
        //     data = {
        //
        //     }
        //
        // })
        console.log(222222222)
        console.log(data)
        return (
            <View>
                <FreelancerItem data={data}/>
                <FreelancerItem data={data}/>
                <FreelancerItem data={data}/>
            </View>
        )
    }


    return (
        <View>
            <Filter/>

            <ScrollView>
                <FreelancerItem data={data}/>
                {/*<FreelancerItem data={data}/>*/}
                {/*<FreelancerItem data={data}/>*/}
            </ScrollView>
        </View>
    );
}

export default AllFreelancer;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
