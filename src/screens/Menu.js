import React from 'react';
import bg from '../assests/media/bg.png'
import { SafeAreaView, StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import MenuItem from '../components/MenuItem';

const Menu = () => {
    return (
        <SafeAreaView style={styles.topContainer} >
            <View style={styles.bgImg} >
                <Image source={bg} style={styles.bg} />
            </View>
            <View style={styles.container} >
                <Text style={styles.heading} > Recent Orders </Text>
                <View style={styles.categories} >
                    <Text style={[styles.heading, styles.category]} > Featured </Text>
                    <Text style={[styles.heading, styles.category]} > Coffee </Text>
                    <Text style={[styles.heading, styles.category]} > Main Course </Text>
                </View>
                <ScrollView style={styles.menuList} >
                    <MenuItem type="menu" />
                    <MenuItem type="menu" />
                    <MenuItem type="menu" />
                    <MenuItem type="menu" />
                    <MenuItem type="menu" />
                    <MenuItem type="menu" />
                </ScrollView>
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
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    heading: {
        color: "black",
        backgroundColor: "rgba(210, 174, 109, 1)",
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 5
    },
    categories: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    category: {
        paddingHorizontal: 15
    },
    menuList: {
        marginTop: 10,
        width: "100%"
    }
});

export default Menu;