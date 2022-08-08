import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Navbar from '../components/Navbar';
import Product from '../components/Product';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.productList}>
                <View style={styles.productFlex}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </View>
            </ScrollView>
            <Navbar component={"home"} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative"
    },
    productList: {
        marginTop: 15,
        width: "100%",
        height: "100%",
        flexShrink: 1,
        marginBottom: 75
    },
    productFlex: {
        justifyContent: "space-evenly",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    }
})

export default Home;