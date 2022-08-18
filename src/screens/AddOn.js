import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import bg from '../assests/media/bg.png'
import AIcon from 'react-native-vector-icons/AntDesign';
import coffeeSize from '../assests/media/coffee_size.png'


const AddOn = ({ coffee }) => {
    const [opened, setOpened] = useState([0]);

    const openAccordion = (val) => {
        if (opened.includes(val)) {
            let x = [...opened];
            x.splice(x.indexOf(val), 1);
            setOpened(x);
        }
        else setOpened(vals => [...vals, val]);
    }
    return (
        <>
            <SafeAreaView style={styles.topContainer}>
                <View style={styles.bgImg}>
                    <Image source={bg} style={styles.bg} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.backButton}>Back</Text>
                    <Text style={styles.heading}>Add On's</Text>
                    <ScrollView style={styles.addons}>
                        {
                            coffee === true &&
                            <>
                                <Text style={styles.sizeHeading}>Size</Text>
                                <View style={styles.addOn}>
                                    <View style={styles.coffeeSizes}>
                                        <Image source={coffeeSize} style={styles.xlCoffee} />
                                        <Image source={coffeeSize} style={styles.lCoffee} />
                                        <Image source={coffeeSize} style={styles.sCoffee} />
                                    </View>
                                </View>
                            </>
                        }
                        <View style={styles.addOn}>
                            <Pressable style={styles.addonheadingdiv} onPress={() => openAccordion(0)}>
                                <Text style={styles.addOnHeading}>Bread</Text>
                                {
                                    opened.includes(0) ? <AIcon name="up" size={25} color="#000" style={styles.dropButton} /> : <AIcon name="down" size={25} color="#000" style={styles.dropButton} />
                                }
                            </Pressable>
                            <View style={[styles.addonoptionsdiv, (opened.includes(0) === false) && styles.hidden]}>
                                <Text style={styles.option}>Option 1</Text>
                                <Text style={styles.option}>Option 2</Text>
                                <Text style={styles.option}>Option 3</Text>
                                <Text style={styles.option}>Option 4</Text>
                            </View>
                        </View>
                        <View style={styles.addOn}>
                            <Pressable style={styles.addonheadingdiv} onPress={() => openAccordion(1)}>
                                <Text style={styles.addOnHeading}>Milk</Text>
                                {
                                    opened.includes(1) ? <AIcon name="up" size={25} color="#000" style={styles.dropButton} /> : <AIcon name="down" size={25} color="#000" style={styles.dropButton} />
                                }
                            </Pressable>
                            <View style={[styles.addonoptionsdiv, (opened.includes(1) === false) && styles.hidden]}>
                                <Text style={styles.option}>Option 1</Text>
                                <Text style={styles.option}>Option 2</Text>
                                <Text style={styles.option}>Option 3</Text>
                                <Text style={styles.option}>Option 4</Text>
                            </View>
                        </View>
                        <View style={styles.addOn}>
                            <Pressable style={styles.addonheadingdiv} onPress={() => openAccordion(2)}>
                                <Text style={styles.addOnHeading}>Flavour</Text>
                                {
                                    opened.includes(2) ? <AIcon name="up" size={25} color="#000" style={styles.dropButton} /> : <AIcon name="down" size={25} color="#000" style={styles.dropButton} />
                                }
                            </Pressable>
                            <View style={[styles.addonoptionsdiv, (opened.includes(2) === false) && styles.hidden]}>
                                <Text style={styles.option}>Option 1</Text>
                                <Text style={styles.option}>Option 2</Text>
                                <Text style={styles.option}>Option 3</Text>
                                <Text style={styles.option}>Option 4</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity>
                        <Text style={styles.addToCartButton}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </>
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
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    backButton: {
        color: "white",
        fontSize: 20
    },
    heading: {
        color: "white",
        fontSize: 30,
        fontWeight: "600",
        fontFamily: "Abhaya Libre",
        marginTop: 20,
        marginBottom: 10
    },
    addons: {
        width: "100%",
        height: "100%",
        flexShrink: 1,
        paddingHorizontal: 10
    },
    addOn: {
        marginVertical: 15
    },
    addonheadingdiv: {
        position: "relative"
    },
    addOnHeading: {
        backgroundColor: "#D2AE6D",
        padding: 5,
        paddingHorizontal: 20,
        fontSize: 22,
        fontWeight: "800",
        color: "black",
        borderRadius: 10
    },
    dropButton: {
        position: "absolute",
        right: 20,
        top: 10
    },
    addonoptionsdiv: {
        marginVertical: 5
    },
    option: {
        width: "100%",
        color: "black",
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 20,
        fontSize: 20,
        borderRadius: 10,
        marginVertical: 2,
        fontWeight: "600"
    },
    hidden: {
        display: "none"
    },
    addToCartButton: {
        backgroundColor: "#D2AE6D",
        textAlign: "center",
        alignSelf: "center",
        paddingHorizontal: 30,
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: "700",
        marginVertical: 15
    },
    sizeHeading: {
        color: "white",
        fontSize: 25,
        marginTop: 20,
        marginLeft: 30
    },
    coffeeSizes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end"
    },
    xlCoffee: {
        width: 70,
        height: 110
    },
    lCoffee: {
        width: 60,
        height: 90
    },
    sCoffee: {
        width: 50,
        height: 70
    }
});

export default AddOn;
