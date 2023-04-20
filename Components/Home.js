import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'


const Home = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>HomePage</Text>
            <View style={styles.box}>
                <TouchableOpacity style={styles.elem} onPress={() => {
                    navigation.navigate("Todo");
                }}>

                    <Image
                        source={require("../image/validate.png")}
                        style={styles.image}
                    />
                    <Text style={styles.textToTheBox}>Todo List</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.box}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Contact");
                }}>
                    <View style={styles.elem}>
                        <Image
                            source={require("../image/mail.png")}
                            style={styles.image}
                        />
                        <Text style={styles.textToTheBox}>Contact</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22252C',
        alignItems: 'center',
        //   justifyContent: 'center',

    },
    box: {
        backgroundColor: 'grey',
        alignItems: 'center',
        width: 190,
        height: 165,
        justifyContent: 'center',
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,



    },
    elem: {
        justifyContent: 'center',
        alignItems: 'center',


    },
    titleText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 20,
    },
    textToTheBox: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 20,
    },
    image: {
        resizeMode: 'contain',
        height: 100,
        width: 200,
        padding: 10,

    }



});
export default Home;