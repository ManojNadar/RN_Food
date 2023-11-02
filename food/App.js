import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import FoodContext from "./Context/FoodContext";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <FoodContext>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </FoodContext>
  );
}

const styles = StyleSheet.create({});
