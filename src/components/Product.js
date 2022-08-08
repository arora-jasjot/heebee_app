import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import image from '../assests/media/cup.png'
import AIcon from 'react-native-vector-icons/AntDesign';

const Product = () => {
    return (
        <View style={styles.product}>
            <Image source={image} style={styles.image} />
            <Text style={[styles.whiteText, styles.heading]}>Cuppochiano</Text>
            <Text style={[styles.whiteText, styles.subHeading]}>with oat milk</Text>
            <Text style={[styles.whiteText, styles.price]}>₹ 200</Text>
            <View style={styles.addIcon}>
                <AIcon name="plus" size={30} color="#fff" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
        height: 250,
        width: 164,
        backgroundColor: "#424750",
        borderRadius: 27,
        marginVertical: 20,
        padding: 10,
        position: "relative"
    },
    image: {
        width: "100%",
        height: 134,
        borderRadius: 27
    },
    whiteText: {
        color: "white",
        marginVertical: 5
    },
    heading: {
        fontSize: 17
    },
    subHeading: {
        fontSize: 12
    },
    price: {
        fontSize: 17,
        fontWeight: "800"
    },
    addIcon: {
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "#C68859",
        borderRadius: 27,
        paddingHorizontal: 10
    }
})

export default Product;
