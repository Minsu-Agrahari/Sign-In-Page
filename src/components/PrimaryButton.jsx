import { TouchableOpacity, Text } from "react-native";

export default function PrimaryButton({ title, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: "#95C334",
                paddingVertical: 14,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 25,
            }}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}
