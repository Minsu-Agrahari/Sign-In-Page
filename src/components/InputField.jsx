import { View, Text, TextInput } from "react-native";

export default function InputField({
    label,
    placeholder,
    secureTextEntry = false,
}) {
    return (
        <View>
            <Text
                style={{
                    fontSize: 10,
                    marginTop: 20,
                    paddingBottom: 5,
                }}
            >
                {label}
            </Text>

            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={{
                    padding: 12,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "#ccc",
                }}
            />
        </View>
    );
}
