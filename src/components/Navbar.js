import React from 'react';
import { StyleSheet, View } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign';
import IoIcon from 'react-native-vector-icons/Ionicons';

const Navbar = ({ component }) => {
    return (
        <View style={styles.navbar}>
            <IoIcon name="md-wallet-sharp" size={40} color="rgba(210, 174, 109, 1)" />
            <IoIcon name="md-home" size={40} color="rgba(210, 174, 109, 1)" />
            <IoIcon name="md-list-sharp" size={50} color="rgba(210, 174, 109, 1)" />
        </View>
    );
}
const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        height: 90,
        position: "absolute",
        bottom: 0,
        left: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "rgba(59, 59, 59, 1)"
    }
})

export default Navbar;
