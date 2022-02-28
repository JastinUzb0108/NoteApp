import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
  {
    name: `*\t \t Salimov Mirzohid Muxammadjon o'g'li`
  },
  {
    name: `*\t \t Nurbek Nuraliyev Rustamjon o'g'li`
  },
  {
    name: `*\t \t Hasanov Jasur Ulug'bek o'g'li`
  },
  {
    name: '*\t \t Saida Beknazarova Safibullayevna'
  }
]
const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to our mobile app
      </Text>

      <View style={{
        width: '100%'
      }}>
        <Text style={styles.author}>
          The authors of this program
        </Text>
        {
          data?.map((item, index) => {
            return (
              <Text key={index} style={styles.name}>
                { item.name}
              </Text>
            )
          })
        }
      </View>



    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101418',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  },
  title: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  }
})