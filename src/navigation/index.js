import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStacks from './navigator/TabStacks';

import { GlobalState } from '../../GlobalState';
import { Intro, Loading } from '../screens';

export default function AppNavigator() {
  const state = useContext(GlobalState)
  const [isUser] = state.isUser
  const [isLoading] = state.isLoading
  if(isLoading) {
    return <Loading />
  }

  if (isUser) return (
    <Intro />
  )

  return (
    <NavigationContainer>
      <TabStacks />
    </NavigationContainer>
  );
}
