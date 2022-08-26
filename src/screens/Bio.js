import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import bg from '../assests/media/bg.png'
import FIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import FTIcon from 'react-native-vector-icons/Fontisto';

const Bio = () => {
    const [name, setName] = useState("Aman Verma");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    return (
        <SafeAreaView style={styles.topContainer}>
            <View style={styles.bgImg}>
                <Image source={bg} style={styles.bg} />
            </View>
            <View style={styles.container}>
                <View style={styles.profilePictureSection}>
                    <View style={styles.profiePicture}>
                        <FIcon name="image" size={40} color="#444" style={{ marginBottom: 20, marginRight: 30 }} />
                    </View>
                    <View style={styles.changeButtons}>
                        <View style={styles.icon}>
                            <EIcon name="camera" size={25} color="#222" />
                        </View>
                        <View style={styles.icon}>
                            <IIcon name="images" size={25} color="#222" />
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.detailSection}>
                    <View style={styles.details}>
                        <View style={styles.field}>
                            <Text style={styles.label}>Your Name</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setName}
                                value={name}
                                placeholder="Name"
                                placeholderTextColor="#888"
                                fontStyle={name.length === 0 ? 'italic' : 'normal'}
                            />
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Your Birthdate</Text>
                            <View style={styles.dateField}>
                                <TextInput
                                    style={styles.dateinput}
                                    onChangeText={setDate}
                                    value={date}
                                    placeholder="DD"
                                    placeholderTextColor="#888"
                                />
                                <TextInput
                                    style={styles.dateinput}
                                    onChangeText={setMonth}
                                    value={month}
                                    placeholder="MM"
                                    placeholderTextColor="#888"
                                />
                                <TextInput
                                    style={styles.dateinput}
                                    onChangeText={setYear}
                                    value={year}
                                    placeholder="YYYY"
                                    placeholderTextColor="#888"
                                />
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Gender</Text>
                            <View style={styles.genderOptions}>
                                <Pressable onPress={() => setGender("male")}>
                                    <View style={[styles.gender, gender === "male" && styles.selectedGender]}>
                                        <FTIcon name='male' size={25} color={`${gender === "male" ? "black" : "white"}`} />
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => setGender("female")}>
                                    <View style={[styles.gender, gender === "female" && styles.selectedGender]}>
                                        <FTIcon name='female' size={25} color={`${gender === "female" ? "black" : "white"}`} />
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.continueText}>to continue,</Text>
                    <Text style={styles.continueText}>click on submit to get on next step.</Text>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={styles.button}>Submit</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
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
    profilePictureSection: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    profiePicture: {
        width: "40%",
        aspectRatio: 1,
        borderBottomRightRadius: 100,
        backgroundColor: "rgba(217, 217, 217, 1)",
        justifyContent: "center",
        alignItems: "center"
    },
    changeButtons: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        padding: 7,
        borderRadius: 100,
        backgroundColor: "rgba(217, 217, 217, 1)",
        marginVertical: 20
    },
    detailSection: {
        paddingHorizontal: 20,
        paddingVertical: 20,
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
    dateField: {
        flexDirection: "row"
    },
    input: {
        width: "60%",
        color: "white",
        fontSize: 20,
        borderColor: "rgba(210, 174, 109, 1)",
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 7,
        fontWeight: "800",
        fontSize: 22
    },
    dateinput: {
        color: "white",
        fontSize: 20,
        borderColor: "rgba(210, 174, 109, 1)",
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 7,
        fontWeight: "800",
        fontSize: 22,
        marginRight: 10
    },
    genderOptions: {
        flexDirection: "row"
    },
    gender: {
        padding: 10,
        borderColor: "rgba(210, 174, 109, 1)",
        borderWidth: 2,
        marginRight: 10,
        marginTop: 7,
        borderRadius: 10
    },
    selectedGender: {
        backgroundColor: "rgba(210, 174, 109, 1)"
    },
    continueText: {
        color: "rgba(136, 136, 136, 1)",
        fontSize: 16
    },
    button: {
        backgroundColor: "rgba(210, 174, 109, 1)",
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        width: "90%",
        fontSize: 22,
        fontWeight: "700",
        color: "black",
        marginVertical: 15
    }
});

export default Bio;