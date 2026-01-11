import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [ageInput, setAgeInput] = useState("");
  const [minHR, setMinHR] = useState(0.0);
  const [maxHR, setMaxHR] = useState(0.0);

  function handleAgeChange(text) {
    setAgeInput(text);

    const age = Number(text);
    if (Number.isNaN(age) || age === 0) {
      setMinHR(0);
      setMaxHR(0);
      return;
    }

    const min = (220 - age) * 0.65;
    const max = (220 - age) * 0.85;

    setMinHR(min);
    setMaxHR(max);
  }

  return (
    <View>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text style={styles.subtitle}>Enter your age:</Text>

      <TextInput
        style={styles.input}
        onChangeText={handleAgeChange}
        value={ageInput}
        placeholder="Enter age"
        keyboardType="numeric"
      />

      <Text>Lower limit: {minHR} bpm</Text>
      <Text>Upper limit: {maxHR} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
  },
  input: {
    width: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginBottom: 8,
    fontSize: 16,
  },
});
