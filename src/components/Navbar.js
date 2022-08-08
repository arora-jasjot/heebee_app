import React from 'react';
import { StyleSheet, View } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';

const Navbar = ({ component }) => {
    return (
        <View style={styles.navbar}>
            <AIcon name="home" size={40} color={`${component === "home" ? "#C68859" : "#fff"}`} />
            <FIcon name="shopping-bag" size={40} color={`${component === "cart" ? "#C68859" : "#fff"}`} />
            <AIcon name="hearto" size={40} color={`${component === "favourites" ? "#C68859" : "#fff"}`} />
            <FIcon name="bell" size={40} color={`${component === "notifications" ? "#C68859" : "#fff"}`} />
        </View>
    );
}
const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        height: 75,
        backgroundColor: "#2D2D2D",
        position: "absolute",
        bottom: 0,
        left: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})

export default Navbar;
