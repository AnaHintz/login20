import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native-paper";
import Feed from "./FeedScreen";
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={() => <Text>Article</Text>} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;