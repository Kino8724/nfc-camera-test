import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function CameraTestScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Camera Test Screen</Text>
      <Button title="Click to test Camera" />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}
