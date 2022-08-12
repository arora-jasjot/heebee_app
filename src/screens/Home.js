import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Navbar from '../components/Navbar';
import PopularProduct from '../components/PopularProduct';
import bg from '../assests/media/bg.png'
import refer from '../assests/media/refer.png'
import offer from '../assests/media/offer.png'
// import Prbgoduct from '../components/Product';

const Home = () => {
    return (
        <SafeAreaView style={styles.topContainer}>
            <View style={styles.bgImg}>
                <Image source={bg} style={styles.bg} />
            </View>
            <View style={styles.container}>
                <ScrollView style={styles.home}>
                    <Text style={[styles.heading, styles.sectionHeading]}>Offers</Text>
                    <ScrollView horizontal={true}>
                        <Image source={offer} style={[styles.offerImage, styles.offerImageFirst]} />
                        <Image source={offer} style={styles.offerImage} />
                        <Image source={offer} style={styles.offerImage} />
                        <Image source={offer} style={styles.offerImage} />
                        <Image source={offer} style={[styles.offerImage, styles.offerImageLast]} />
                    </ScrollView>
                    <View style={styles.section}>
                        <Image source={refer} style={styles.referImage} />
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.heading}>Recent Ordered</Text>
                        <View style={styles.productList}>
                            <PopularProduct />
                            <PopularProduct />
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.heading}>Popular Items</Text>
                        <View style={styles.productList}>
                            <PopularProduct />
                            <PopularProduct />
                            <PopularProduct />
                            <PopularProduct />
                        </View>
                    </View>
                </ScrollView>
                <Navbar component={"home"} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        position: "relative"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        paddingBottom: 75,
        marginVertical: 15
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
    home: {
        marginVertical: 10,
        width: "100%",
        height: "100%",
        flexShrink: 1
    },
    referImage: {
        width: "100%",
        height: 80,
        borderRadius: 10
    },
    offerImage: {
        width: 150,
        height: 100,
        shadowColor: '#FFF',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    offerImageFirst: {
        marginLeft: 20
    },
    offerImageLast: {
        marginRight: 20
    },
    heading: {
        color: "white",
        fontSize: 30,
        fontWeight: "600",
        fontFamily: "Abhaya Libre"
    },
    sectionHeading: {
        marginLeft: 30
    },
    section: {
        paddingHorizontal: 30,
        marginVertical: 20
    },
    productList: {
        justifyContent: "space-evenly",
        flex: 1,
        flexWrap: "wrap"
    }
})

export default Home;