import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import bg from '../assests/media/bg.png'

const Email = () => {
    const [email, setEmail] = useState("");
    return (
        <SafeAreaView style={styles.topContainer} >
            <View style={styles.bgImg} >
                <Image source={bg} style={styles.bg} />
            </View>
            <View style={styles.container}>
                <Text style={styles.backButton}>Back</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Give us your email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        placeholderTextColor="#888"
                    />
                </View>
                <Pressable style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.continueText}>Continue</Text>
                </Pressable>
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
        width: "100%",
        color: "white",
        fontSize: 20,
        borderColor: "rgba(210, 174, 109, 1)",
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 7,
        fontSize: 20,
        fontWeight: "600"
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
    }
});
export default Email;
