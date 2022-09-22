import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const globalScreenOPtions = {
    headerStyle: { backgroundColor: "#2C6BED"},
    headerTitleStyle: { color: "#FFFFFF" },
    headerTintColor: "#FFFFFF",
}

export function RoootNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {globalScreenOPtions}>
                <Stack.Screen name="login" component={LoginScreen}/>
                <Stack.Screen name="home" component={HomeScreen} />
               
             
            </Stack.Navigator>

          
        </NavigationContainer>
    )
}