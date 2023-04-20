import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView,TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react'


const Todo=()=> {


  const [inputValue, setInputValue] = useState('');
  const [liste, setListe] = useState([
    { todo: "Regarder les match" },
    { todo: "Faire les courses" },
    { todo: "Apprendre React" },
    { todo: "Aller en cours" },
  ]);

  const handleAddTodo = () => {
    if (inputValue) {
      setListe([...liste, { todo: inputValue }]);
      setInputValue('');
    }
  };
  const handleDelete = (index) => {
    const newListe = [...liste];
    newListe.splice(index, 1);
    setListe(newListe);
  }

  return (

    <View style={styles.container}>

      <View style={{  flex: 1, paddingTop: 50}}>
      <Text style={styles.titleText}>TO-DO LIST</Text>
        <Text style={styles.paragraphe}>Chose à faire :</Text>

        <SafeAreaView style={styles.viewStyle}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            placeholder="Entrez la to-do liste"
          />
          <View>
            <TouchableOpacity onPress={handleAddTodo}>
              <Text style={styles.click}>Ajouter</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </View>

      <View style={{ flex: 4}} >
        <Text style={styles.twoTitle}> Liste des choses à faire :</Text>

        <View style={styles.container2}>
          {liste.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.text}>{item.todo}</Text>
              <TouchableOpacity style={styles.ViewToDo} onPress={() => handleDelete(index)}>
                <Image
                        source={require("../image/delete.png")}
                        style={styles.imageDelete}
                    />
                
              </TouchableOpacity>
            </View>
          ))}
        </View>
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
  paragraphe: {
    // fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    textAlign: 'center'

  },
  twoTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    margin: 5,


  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewToDo: {
    flexDirection: 'row',
    alignItems: 'center',
    
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
  boxToBox: {
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
    color: '#fff',
    fontSize: 18,
    backgroundColor: "blue",
    height: 35,
    width:100,
    textAlign:"center",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  box: {
    fontSize: 20,
    color: 'white',
  },
  container2: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    height: 40,
    width: 230,
    margin: 12,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 14,
  },
  imageDelete: {
    resizeMode: 'contain',
    height: 10,
    width: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'center'    

}
});

export default Todo