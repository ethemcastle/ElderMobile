import axios from 'axios';
import {useContext, useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../store/auth-context';
import { Searchbar } from 'react-native-paper';

function Filter() {
    const [searchValue, setSearchValue] = useState('');

    const authCtx = useContext(AuthContext);

    function onChangeSearch(value) {
        console.log(1111111)
        console.log(value)
        setSearchValue(value)
    }

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchValue}
        />
    );
}

export default Filter;

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
        marginBottom: 8
    }
});
