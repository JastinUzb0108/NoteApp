import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useContext } from 'react'
import { GlobalState } from '../../GlobalState'

const CreateTitle = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [notes, setNotes] = state.notes
  const [data, setData] = useState({
    title: '',
    description: ''
  })

  const onSubmit = async () => {
    try {
      const note = { id: Date.now(), data, time: Date.now() };
      const updatedNotes = [...notes, note];
      setNotes(updatedNotes)

      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      navigation.navigate('Home')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setData({ ...data, title: text })
        }}
        placeholder='Title'
        placeholderTextColor='white'
      />

      <TextInput
        style={[{
          paddingBottom: 50
        }, styles.textInput]}
        onChangeText={(text) => {
          setData({ ...data, description: text })
        }}
        multiline
        placeholder='Description'
        placeholderTextColor='white'
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.text}>
          Create Note
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateTitle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101418',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 20
  },
  textInput: {
    width: '100%',
    padding: 15,
    color: '#fff',
    borderRadius: 10,
    borderColor: '#1C4364',
    borderWidth: 2,
    marginVertical: 10
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C4364',
    borderRadius: 10,
    marginTop: 10
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})