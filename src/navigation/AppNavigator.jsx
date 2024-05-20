import DrawerScreen from "../screens/DrawerScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen component={LoginScreen} name="LoginScreen" />
<Stack.Screen component={RegisterScreen} name="RegisterScreen"/>
<Stack.Screen component={DrawerScreen} name="DrawerScreen" />

</Stack.Navigator>

</NavigationContainer>

    );


}
