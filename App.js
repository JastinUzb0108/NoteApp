import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from './src/navigation'
import { DataProvider } from './GlobalState'

export default function App() {
  return (
    <>
      <DataProvider>
        <AppNavigator />
      </DataProvider>
      <StatusBar backgroundColor='#101418' barStyle='light-content' />
    </>
  )
}