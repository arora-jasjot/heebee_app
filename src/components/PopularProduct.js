import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import image from '../assests/media/coffee_cup.png'
import bean from '../assests/media/bean.png'
import AIcon from 'react-native-vector-icons/AntDesign';


const PopularProduct = () => {
    return (
        <View style={styles.product}>
            <View style={styles.image}>
                <Image source={image} style={styles.img} />
            </View>
            <View style={styles.desc}>
                <Text style={styles.name}>Draught Beer Coffee</Text>
                <View style={styles.priceBox}>
                    <Text style={styles.price}>Rs. 200</Text>
                    <Text style={styles.discount}>15% off</Text>
                </View>
                <Text style={styles.description}>A strong on the rocks coffee made with ice, milk,espresso or cold brew and flavour of your choice</Text>
            </View>
            <View style={styles.addButton}>
                <AIcon name="plus" size={25} color="#000" />
            </View>
            <View style={styles.beans}>
                <Image source={bean} style={styles.bean} />
                <Image source={bean} style={styles.bean} />
                <Image source={bean} style={styles.bean} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    product: {
        width: "100%",
        height: 110,
        backgroundColor: "#D2AE6D",
        marginVertical: 10,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative"
    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 10,
        overflow: "hidden"
    },
    img: {
        width: "100%",
        height: "100%"
    },
    desc: {
        width: "100%",
        flexShrink: 1,
        flex: 1,
        marginLeft: 11,
        paddingVertical: 5
    },
    name: {
        marginRight: 50,
        color: "white",
        fontSize: 24,
        fontWeight: "800",
        fontFamily: "Abhaya Libre"
    },
    priceBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    price: {
        fontSize: 16,
        fontWeight: "700",
        marginRight: 5
    },
    discount: {
        fontSize: 14
    },
    description: {
        marginRight: 40,
        color: "white",
        fontSize: 8
    },
    addButton: {
        width: 40,
        height: 40,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    beans: {
        position: "absolute",
        top: 10,
        right: 10,
        flex: 1,
        flexDirection: "row"
    },
    bean: {
        height: 15,
        width: 12,
        marginHorizontal: 2
    }
});
export default PopularProduct;
