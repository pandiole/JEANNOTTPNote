import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Search from '../components/Search';
import Movie from '../components/Movie';
import FavMovies from '../components/FavMovies';

import Assets from '../definitions/Assets';

const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

function searchStackScreens() {
  return (
    <SearchNavigation.Navigator
      initialRouteName="ViewSearch"
    >
      <SearchNavigation.Screen
        name="ViewSearch"
        component={Search}
        options={{ title: 'Recherche' }}
      />
      <SearchNavigation.Screen
        name="ViewMovie"
        component={Movie}
        options={{ title: 'Movie' }}
      />
    </SearchNavigation.Navigator>
  )
};

function favStackScreens() {
    return (
      <FavNavigation.Navigator
        initialRouteName="ViewFav"
      >
        <FavNavigation.Screen
          name="ViewFav"
          component={FavMovies}
          options={{ title: 'Favoris' }}
        />
        <FavNavigation.Screen
          name="ViewMovie"
          component={Movie}
          options={{ title: 'Movie' }}
        />
      </FavNavigation.Navigator>
    )
  };

  function RootStack() {
    return (
      <TabNavigation.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          headerShown: false
        }}>
        <TabNavigation.Screen
          name="Recherche"
          component={searchStackScreens}
          options={() => ({
            tabBarIcon: ({ color }) => {
              return <Image source={Assets.icons.search} style={{ tintColor: color }} />;
            }
          })}
        />
        <TabNavigation.Screen
          name="Favoris"
          component={favStackScreens}
          options={() => ({
            tabBarIcon: ({ color }) => {
              return <Image source={Assets.icons.favFull} style={{ tintColor: color }} />;
            }
          })}
        />
      </TabNavigation.Navigator>
    );
  }

export default RootStack;