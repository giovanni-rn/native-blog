import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AllScreen from './screens/AllScreen';
import SearchScreen from './screens/SearchScreen';
import PublishScreen from './screens/PublishScreen';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Voir tout') {
              iconName = 'list';
            } else if (route.name === 'Rechercher') {
              iconName = 'search';
            } else if (route.name === 'Publier') {
              iconName = 'plus-circle';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Voir tout" component={AllScreen} />
        <Tab.Screen name="Rechercher" component={SearchScreen} />
        <Tab.Screen name="Publier" component={PublishScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
