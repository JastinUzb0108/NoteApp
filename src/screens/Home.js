import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import McVectorIcon from '../components/McVectorIcons'

const reverseData = data => {
  return data.sort((a, b) => {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if (aInt < bInt) return 1;
    if (aInt == bInt) return 0;
    if (aInt > bInt) return -1;
  });
};

const Note = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.textBox}>
      <Text style={styles.title}>
        {item.data.title}
      </Text>
      <Text style={{ color: '#fff' }} >{item.data.description}</Text>
    </TouchableOpacity>
  )
}

const Home = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [user] = state.user
  const [notes, setNotes] = state.notes

  const reverseNotes = reverseData(notes);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textStyle}> Hello {user.name}</Text>
      </View>
      <ScrollView>
        {
          reverseNotes?.map((item, index) => {
            return (
              <Note key={index} item={item} />
            )
          })
        }
      </ScrollView>

      <TouchableOpacity style={
        styles.createButton
      }>
        <McVectorIcon
          type='Ionicons'
          name='add-circle'
          size={65}
          color='#fff'
          onPress={() =>
            navigation.navigate('CreateTitle')
          }
        />
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101418',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  box: {
    marginBottom: 10
  },
  createButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  },
  textBox: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1C4364',
    marginBottom: 15
  }
})