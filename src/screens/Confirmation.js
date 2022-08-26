import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import bg from '../assests/media/bg.png'

const Confirmation = () => {
    const [otp, setOTP] = useState("");
    return (
        <SafeAreaView style={styles.topContainer} >
            <View style={styles.bgImg} >
                <Image source={bg} style={styles.bg} />
            </View>
            <View style={styles.container}>
                <Text style={styles.backButton}>Back</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Enter Confirmation Number</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setOTP}
                        value={otp}
                        placeholder="OTP"
                        placeholderTextColor="#888"
                    />
                </View>
                <Pressable style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.continueText}>Continue</Text>
                </Pressable>
                <View style={{ flexDirection: "row", marginTop: 7 }}>
                    <Text style={styles.msg}>Did not receive OTP?</Text>
                    <Pressable>
                        <Text style={styles.resend}>Resend OTP</Text>
                    </Pressable>
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
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    backButton: {
        color: "white",
        fontSize: 18,
        marginBottom: 50
    },
    label: {
        color: "white",
        fontSize: 18,
        fontWeight: "600"
    },
    details: {
        marginBottom: 40
    },
    field: {
        marginVertical: 7
    },
    label: {
        color: "white",
        fontSize: 20,
        fontWeight: "600"
    },
    input: {
        width: "20%",
        color: "white",
        fontSize: 20,
        borderColor: "rgba(210, 174, 109, 1)",
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 7,
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    },
    continueText: {
        fontSize: 24,
        fontWeight: "800",
        backgroundColor: "rgba(210, 174, 109, 1)",
        color: "black",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20
    },
    msg: {
        color: "rgba(136, 136, 136, 1)",
        fontSize: 16,
        marginRight: 10
    },
    resend: {
        color: "white",
        fontSize: 16
    }
});
export default Confirmation;
