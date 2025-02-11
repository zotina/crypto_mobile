// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Login from './app/screen/Login';
// import Dashboard from './app/screen/Dashboard';

// type RootStackParamList = {
//   Login: undefined;
//   Dashboard: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Dashboard" component={Dashboard} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigator from './components/DrawerNavigator';
// import Login from './app/screen/Login';
// import Dashboard from './app/screen/Dashboard';

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <DrawerNavigator />  */}
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screen/Login';
import DrawerNavigator from './components/DrawerNavigator';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={DrawerNavigator} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
