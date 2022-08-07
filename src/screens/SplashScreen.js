import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import logo from '../assests/media/logo.png'

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
            <TouchableOpacity>
                <Text style={styles.orderText}>Order Now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logoContainer: {
        height: "100%",
        flexShrink: 1,
        flex: 1,
        justifyContent: "center"
    },
    logo: {
        width: 200,
        height: 200
    },
    orderText: {
        color: "white",
        backgroundColor: "#C68859",
        fontSize: 25,
        paddingHorizontal: 100,
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 10,
        fontWeight: "600"
    }
})

export default SplashScreen;