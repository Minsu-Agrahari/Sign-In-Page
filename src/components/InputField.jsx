import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InputField({
    label,
    placeholder,
    secureTextEntry = false,
}) {
    return (
        <SafeAreaView>
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
        </SafeAreaView>
    );
}
