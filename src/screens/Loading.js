import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size='large' color="#1C4364" />
      <Text style={styles.text}>
        Loading....
      </Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#101418'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  }
})