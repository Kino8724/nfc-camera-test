import { View, Text, Button } from "react-native";
import { navigation, useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Navigation Working</Text>
      <Button title="NFC Test Screen" onPress={() => navigation.navigate("NFC Test")} />
      <Button title="Camera Test Screen" onPress={() => navigation.navigate("Camera Test")} />
    </View>
  );
}
export default HomeScreen
