import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import bgImg from '../assests/media/splash.png'
import Icon from 'react-native-vector-icons/AntDesign';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backButton}>
                <Icon name="arrowleft" size={30} color="#fff" />
            </View>
            <View style={styles.imgContainer}>
                <Image source={bgImg} style={styles.bgImg} />
            </View>
            <View style={styles.logInContainer}>
                <Text style={[styles.whiteText, styles.welcome]}>WELCOME</Text>
                <Text style={[styles.whiteText, styles.welcome]}>BACK.....</Text>
                <View style={styles.msgContainer}>
                    <Text style={[styles.whiteText, styles.msg]}>Coffee has been waiting</Text>
                    <Text style={[styles.whiteText, styles.msg]}>for you !!</Text>
                </View>
                <View style={styles.form}>
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
                    <Text style={styles.logInButton}>Login</Text>
                </TouchableOpacity>
                <Text style={[styles.whiteText, styles.LogIn]}>Don't have an account? SignUp</Text>
            </View>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    backButton: {
        backgroundColor: "#C68859",
        paddingHorizontal: 5,
        position: "absolute",
        top: 30,
        left: 30,
        borderRadius: 5,
        zIndex: 50
    },
    whiteText: {
        color: "white"
    },
    brownText: {
        color: "#C68859"
    },
    imgContainer: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: 20
    },
    bgImg: {
        height: "50%",
        width: "100%"
    },
    logInContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: "flex-end"
    },
    welcome: {
        fontSize: 45,
        fontWeight: "700"
    },
    msgContainer: {
        marginTop: 15
    },
    msg: {
        fontSize: 25,
        fontWeight: "600",
    },
    form: {
        marginVertical: 5
    },
    inputContainer: {
        marginVertical: 15
    },
    label: {
        fontSize: 20,
        fontWeight: "600"
    },
    input: {
        width: "100%",
        color: "white",
        fontSize: 20,
        borderBottomColor: "#C68859",
        borderBottomWidth: 2,
        paddingVertical: 5
    },
    logInButton: {
        color: "white",
        textAlign: "center",
        backgroundColor: "#C68859",
        fontSize: 25,
        paddingHorizontal: 100,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontWeight: "600",
        marginTop: 30
    },
    LogIn: {
        textAlign: "center",
        fontSize: 15,
        marginBottom: 10
    }
})