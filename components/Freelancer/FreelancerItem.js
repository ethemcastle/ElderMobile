import {Image, Text, View, StyleSheet} from "react-native";
import {Colors} from "../../consts/styles";
import Button from "../UI/Button";

function JobItem() {


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/techelder.png')}
                    />
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Raul B. </Text>
                            <Text style={styles.text}> @raulbass</Text>
                        </View>
                        <View>
                            {/*<Icon></Icon>*/}
                            <Text style={styles.text}>rate 5.0</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>State, City</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.price}>$80 USD</Text>
                    <Text style={styles.hour}> per hour</Text>
                </View>
                <View>
                    <Text style={styles.title}>
                        Graphic Designer & Software Architect
                    </Text>
                </View>
                <View>
                    <Text style={styles.text}>
                        Strong experience in software Architecture & Graphic Design. Working with Angular 6
                        (backwards... <Text style={styles.text}>more</Text>
                    </Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.text}>Website Design . Graphic Design . Software Architecture</Text>
                </View>
            </View>
            <Button styles={styles.button}>Hire</Button>
        </View>
    )
}

export default JobItem;


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
    },
    price: {
        fontWeight: 'bold',
        fontSize: 24
    },
    hour: {
        paddingTop: 7,
        paddingLeft: 10,
        color: '#333333'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    text: {
        color: '#333333',
        lineHeight: 20
    },
    category: {
      marginTop: 10
    },
    button: {
        marginTop: 530,
        backgroundColor: 'red',
        color: 'red'
    }
})
