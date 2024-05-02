import { View, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NfcTestScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NFC Test Screen</Text>
      <Button title="Click to test NFC" />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}
