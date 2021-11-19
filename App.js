import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [getName, setName] = useState([
    {name: "Raj", id: 1},
    {name: "Kumar", id: 2},
    {name: "Rajkumar", id: 3},
    {name: "Vicky", id: 4},
    {name: "Sakthi", id: 5},
    {name: "Sakthivel", id: 6},
    {name: "Mano", id: 7},
    {name: "Siva", id: 8},
  ])

  const touchHandler = (id) => {
    console.log(id)
    setName((oldName) => {
      return oldName.filter(nameToFilter => nameToFilter.id != id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList style={styles.scrollStyle}
        key = {"#"}
        numColumns = {2}
        keyExtractor = {(item) => "#" + item.id} 
        data = {getName}
        renderItem = {({item}) => (
          <TouchableOpacity onPress={() => touchHandler(item.id)}>
            <Text style ={styles.listStyle}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView style={styles.scrollStyle}>
        { getName.map(item => 
            <View  key= {item.key}>
              <Text style ={styles.listStyle}>{item.name}</Text>
            </View>
        )}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal:20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  scrollStyle : {
    marginBottom: 20,
    paddingBottom: 20
  },
  listStyle: {
    backgroundColor: "pink",
    fontSize: 24,
    marginTop: 20,
    padding: 30,
    marginHorizontal: 20
  }
});
