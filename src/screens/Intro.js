import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState';

const Intro = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [isUser, setIsUser] = state.isUser
  const [user, setUser] = state.user
  const [name, setName] = useState('');
  const handleOnChangeText = text => setName(text);


  const getData = async () => {
    try {
      const result = await AsyncStorage.getItem('user');

      if (result === null) return setIsUser(true);

      setUser(JSON.parse(result));
      setIsUser(false);
    } catch (e) {
      console.log(e);
    }
  }

  const onSubmit = async () => {
    try {
      const jsonValue = { name: name };
      await AsyncStorage.setItem('user', JSON.stringify(jsonValue))

      getData()
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
      }}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={
            require('../assets/images/check.png')
          } />
        <Text style={{
          fontSize: 22,
          color: '#fff',
          fontWeight: 'bold',
          marginTop: 15
        }}>
          Welcome to our note app
        </Text>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={handleOnChangeText}
        placeholder='Name'
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

export default Intro

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