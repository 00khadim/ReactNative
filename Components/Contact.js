import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'


const Contact = () => {


    const [mail, setMail] = useState('');
    

    const handleAddTodo = () => {
        if (mail) {
           
        }
    };

    return (

        <View style={styles.container}>

            <View style={{ flex: 1, paddingTop: 50 }}>
                <Text style={styles.titleText}>CONTACT</Text>
            
                    <SafeAreaView style={styles.viewStyle}>
                        <TextInput
                            style={styles.input}
                            value={mail}
                            onChangeText={text => setMail(text)}
                            placeholder="Entrez votre mail"
                        />
                        <View>
                            <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
                                <Text style={styles.click}>Ajouter</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22252C',
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleText: {
        // fontFamily: 'Inter',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      input: {
        color: 'white',
        backgroundColor: 'grey',
        height: 40,
        width: 230,
        margin: 12,
        padding: 10,
        textAlign: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginEnd: 20,
    
      },
      click: {
        fontWeight: 'bold',
        color: "#white",
        color: '#fff',
        fontSize: 18,
      },

});

export default Contact;