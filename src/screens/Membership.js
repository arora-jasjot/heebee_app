import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import bg from '../assests/media/bg.png'

const Membership = () => {
    return (
        <SafeAreaView style={styles.topContainer} >
            <View style={styles.bgImg} >
                <Image source={bg} style={styles.bg} />
            </View>
            <View style={styles.container}>
                <Text style={styles.backButton}>Back</Text>
                <View style={styles.memberships}>
                    <Text style={styles.head}>Membership Description</Text>
                    <View style={styles.card}>
                        <View style={styles.image}></View>
                        <View style={{ marginHorizontal: 10, width: "60%" }}>
                            <Text style={styles.heading}>Silver</Text>
                            <Text style={styles.description}>we need this permissiion to ensure SIM card in your phone and your phone number match</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.image}></View>
                        <View style={{ marginHorizontal: 10, width: "60%" }}>
                            <Text style={styles.heading}>Gold</Text>
                            <Text style={styles.description}>we need this permissiion to ensure SIM card in your phone and your phone number match</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.image}></View>
                        <View style={{ marginHorizontal: 10, width: "60%" }}>
                            <Text style={styles.heading}>Platinum</Text>
                            <Text style={styles.description}>we need this permissiion to ensure SIM card in your phone and your phone number match</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.continueButton}>Continue</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        position: "relative"
    },
    bgImg: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)"
    },
    bg: {
        width: "100%",
        height: "100%"
    },
    container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    backButton: {
        color: "white",
        fontSize: 18,
        marginBottom: 30
    },
    memberships: {
        height: "100%",
        flexShrink: 1
    },
    continueButton: {
        fontSize: 24,
        fontWeight: "800",
        backgroundColor: "rgba(210, 174, 109, 1)",
        color: "black",
        padding: 10,
        borderRadius: 10,
        marginVertical: 30,
        textAlign: "center"
    },
    head: {
        fontSize: 24,
        fontWeight: "800",
        color: "white",
        marginBottom: 20
    },
    card: {
        flexDirection: "row",
        marginVertical: 15
    },
    image: {
        width: "40%",
        height: 80,
        backgroundColor: "rgba(104, 104, 104, 1)",
        borderRadius: 15
    },
    heading: {
        fontSize: 16,
        fontWeight: "700",
        color: "white"
    },
    description: {
        color: "rgba(255, 255, 255, 0.9)"
    }
});

export default Membership;