import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import bg from '../assests/media/bg.png'
import MenuItem from '../components/MenuItem';

const Checkout = () => {
    return (
        <SafeAreaView style={styles.topContainer} >
            <View style={styles.bgImg} >
                <Image source={bg} style={styles.bg} />
            </View>
            <View style={styles.container} >
                <View style={styles.top}>
                    <Text style={styles.backButton}>Back</Text>
                    <Text style={styles.orderHeading}>Your Order</Text>
                    <ScrollView style={styles.order}>
                        <MenuItem type="cart" />
                        <MenuItem type="cart" />
                        <MenuItem type="cart" />
                        <MenuItem type="cart" />
                        <MenuItem type="cart" />
                    </ScrollView>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.totalSection}>
                        <View style={styles.desc}>
                            <Text style={styles.descText}>Items Total</Text>
                            <Text style={styles.descText}>Rs. 240</Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.descText}>Taxes and Charges</Text>
                            <Text style={styles.descText}>Rs. 50</Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={[styles.descText, styles.bold]}>Grand Total</Text>
                            <Text style={[styles.descText, styles.bold]}>Rs. 290</Text>
                        </View>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.pickupButton}>Choose Pickup Option</Text>
                    </View>
                    <View style={styles.totalSection}>
                        <Text style={styles.cancelHeading}>Cancellation Policy</Text>
                        <Text>we need this permission to activate UPI and send credit card payment reminders to provide a seamless experience</Text>
                    </View>
                </View>
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
        flex: 1
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    backButton: {
        color: "white",
        fontSize: 18
    },
    top: {
        height: "100%",
        flexShrink: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    orderHeading: {
        color: "white",
        fontSize: 25,
        marginTop: 20,
        marginBottom: 10
    },
    totalSection: {
        backgroundColor: "rgba(210, 174, 109, 1)",
        paddingVertical: 7,
        paddingHorizontal: 25,
        borderRadius: 10
    },
    desc: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    descText: {
        fontSize: 16,
        color: "black"
    },
    bold: {
        fontWeight: "800"
    },
    pickupButton: {
        backgroundColor: "rgba(210, 174, 109, 1)",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        color: "black",
        marginVertical: 25,
        paddingHorizontal: 50,
        paddingVertical: 5,
        borderRadius: 10
    },
    cancelHeading: {
        fontSize: 18,
        color: "black",
        fontWeight: "600"
    }
});

export default Checkout;
