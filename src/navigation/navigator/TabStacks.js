import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

import { Home, CreateTitle, SearchBar, Info } from '../../screens';
import { McText, McVectorIcon } from '../../components'

const Tab = createMaterialBottomTabNavigator();

const TabStacks = ({ params }) => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
     <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1C4364',
          tabBarIcon: ({ color }) => (
            <McVectorIcon type='Ionicons' name="ios-home" color={color} size={26} />
          ),
        }}
      />
    <Tab.Screen
      name="CreateTitle"
      component={CreateTitle}
      options={{
        tabBarLabel: 'Create',
        tabBarColor: '#1C4364',
        tabBarIcon: ({ color, size }) => (
          <McVectorIcon type='Ionicons' name='add-circle' size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="SearchBar"
      component={SearchBar}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#1C4364',
        tabBarIcon: ({ color, size }) => (
          <McVectorIcon type='Ionicons' name='search' size={size} color={color} />
        ),
      }}
    />
    
    <Tab.Screen
      name="Info"
      component={Info}
      options={{
        tabBarLabel: 'Info',
        tabBarColor: '#1C4364',
        tabBarIcon: ({ color, size }) => (
          <McVectorIcon type='Ionicons' name='information-circle' size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabStacks;
