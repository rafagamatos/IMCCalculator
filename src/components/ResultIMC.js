import { Text, View, StyleSheet } from "react-native";

export default function ResultIMC({ ResultIMC, messageResultIMC }) {
  return (
    <View>
      <Text>{messageResultIMC}</Text>
      <Text>{ResultIMC}</Text>
    </View>
  );
}
