import { View, Text, TextInput } from "react-native";

export default function InputField({
  label,
  placeholder,
  secureTextEntry,
}) {
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          marginBottom: 8,
          color: "#222",
        }}
      >
        {label}
      </Text>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={secureTextEntry}
        style={{
          height: 58,
          backgroundColor: "white",
          borderRadius: 18,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: "#DCDCDC",
        }}
      />
    </View>
  );
}