import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import image from '../assests/media/coffee_cup.png'
import bean from '../assests/media/bean_white.png'


const MenuItem = ({ type }) => {
    return (
        <View style={styles.menuItem}>
            <View style={styles.content}>
                <Text style={[styles.white, styles.productName]}>Latte</Text>
                <View style={styles.priceBox}>
                    <Text style={[styles.white, styles.price]}>Rs. 250</Text>
                    <Text style={[styles.white, styles.discount]}>15% off</Text>
                </View>
                <View style={styles.beans}>
                    <Image source={bean} style={styles.bean} />
                    <Image source={bean} style={styles.bean} />
                    <Image source={bean} style={styles.bean} />
                </View>
                {type === 'menu' ?
                    <>
                        <View style={styles.flex}>
                            <Text style={styles.heading}>Order The Standard</Text>
                        </View>
                        <View style={styles.flex}>
                        </View>
                        <Text style={styles.heading}>Customize Your Order</Text>
                    </> :
                    <View style={styles.flex}>
                        <Text style={[styles.heading, { paddingHorizontal: 25 }]}>Details</Text>
                    </View>
                }
            </View>
            <View style={styles.image}>
                <Image source={image} style={styles.img} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menuItem: {
        width: "100%",
        padding: 20,
        borderRadius: 15,
        backgroundColor: "rgba(45, 45, 45, 1)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    white: {
        color: "white"
    },
    content: {
        width: "100%",
        flexShrink: 1
    },
    image: {
        width: 150,
        height: 150,
        padding: 10,
        borderRadius: 90,
        backgroundColor: "rgb(0, 5, 51)"
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 75
    },
    productName: {
        fontSize: 28,
        fontWeight: "600",
    },
    priceBox: {
        flexDirection: "row",
        marginVertical: 5,
        alignItems: "center"
    },
    price: {
        fontSize: 18,
        fontWeight: "600",
        marginRight: 10
    },
    discount: {
        fontSize: 16
    },
    beans: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
    bean: {
        height: 15,
        width: 12,
        marginHorizontal: 2
    },
    heading: {
        color: "black",
        backgroundColor: "rgba(210, 174, 109, 1)",
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontWeight: "600",
        marginVertical: 5
    },
    flex: {
        display: "flex",
        flexDirection: "row"
    }
})

export default MenuItem;
