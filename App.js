import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Update the import path as necessary
import AddAccount from './screens/CreateAccount/AddAccount'; // Update the import path as necessary
import LoginPage from './screens/LoginPage/LoginPage';
import OfferServiceScreen from './screens/Offer/OfferServiceScreen';
import AddOfferScreen from './screens/Offer/AddOfferScreen';
import AddAskScreen from './screens/Ask/AddAskScreen';
import AskServiceScreen from './screens/Ask/AskServiceScreen';
import Profile from './screens/Profile';
import EventServiceScreen from './screens/Events/EventServiceScreen';
import AddEventScreen from './screens/Events/AddEventScreen';
import JoinEvent from './screens/Events/JoinEvent';
import AddCommunityServiceScreen from './screens/Comunty/AddCommunityServiceScreen';
import CommunityServiceScreen from './screens/Comunty/CommunityServiceScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddAccount" component={AddAccount} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="OfferServiceScreen" component={OfferServiceScreen} options={{ title: 'Offer Service' }} />
        <Stack.Screen name="AddOfferScreen" component={AddOfferScreen} options={{ title: 'Add New Offer' }} />
        <Stack.Screen name="AskServiceScreen" component={AskServiceScreen} options={{ title: 'Ask Service' }} />
        <Stack.Screen name="AddAskScreen" component={AddAskScreen} options={{ title: 'Add New Need' }} />
        <Stack.Screen name="EventServiceScreen" component={EventServiceScreen} options={{ title: 'Events' }} />
        <Stack.Screen name="AddEventScreen" component={AddEventScreen} options={{ title: 'Add New Event' } }/>
        <Stack.Screen name="JoinEvent" component={JoinEvent} options={{ title: 'Join A New Event' }} />
        <Stack.Screen name="AddComunityScreen" component={AddCommunityServiceScreen} options={{ title: 'Create A New Event' }} />
        <Stack.Screen name="ComunityServiceScreen" component={CommunityServiceScreen} options={{ title: 'Join A New Event' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
