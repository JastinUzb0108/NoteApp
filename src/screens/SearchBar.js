import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text>SearchBar</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101418'
  }
})