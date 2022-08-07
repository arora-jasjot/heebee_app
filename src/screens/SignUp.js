import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import bgImg from '../assests/media/coffee-beans.png'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={bgImg} style={styles.bgImg} />
            </View>
            <View style={styles.SignUpContainer}>
                <Text style={[styles.whiteText, styles.hello]}>Hello,</Text>
                <Text style={[styles.whiteText, styles.welcome]}>We're glad, we were</Text>
                <Text style={[styles.whiteText, styles.welcome]}>waiting for you to join....</Text>
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={[styles.brownText, styles.label]}>Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder="Your Name"
                            placeholderTextColor="#888"
                            fontStyle={name.length === 0 ? 'italic' : 'normal'}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={[styles.brownText, styles.label]}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="E-mail"
                            placeholderTextColor="#888"
                            fontStyle={email.length === 0 ? 'italic' : 'normal'}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={[styles.brownText, styles.label]}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor="#888"
                            fontStyle={password.length === 0 ? 'italic' : 'normal'}
                        />
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.signUpButton}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={[styles.whiteText, styles.LogIn]}>Already have an account? Log In</Text>
            </View>
        </SafeAreaView>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    whiteText: {
        color: "white"
    },
    brownText: {
        color: "#C68859"
    },
    imgContainer: {
        width: "100%",
        height: "100%"
    },
    bgImg: {
        height: "100%",
        width: "auto",
        marginLeft: 200,
        marginTop: 50
    },
    SignUpContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: "center"
    },
    hello: {
        fontSize: 45,
        marginBottom: 15
    },
    welcome: {
        fontSize: 25
    },
    form: {
        marginVertical: 15
    },
    inputContainer: {
        marginVertical: 15
    },
    label: {
        fontSize: 20
    },
    input: {
        width: "100%",
        color: "white",
        fontSize: 20,
        borderBottomColor: "#C68859",
        borderBottomWidth: 2
    },
    signUpButton: {
        color: "white",
        textAlign: "center",
        backgroundColor: "#C68859",
        fontSize: 25,
        paddingHorizontal: 100,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontWeight: "600"
    },
    LogIn: {
        textAlign: "center",
        fontSize: 15
    }
})