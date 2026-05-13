import { View, Image, Text } from "react-native";

export default function Header() {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 60,
            }}
        >
            <Image
                source={require("../../assets/logo.png")}
                style={{
                    height: 170,
                    width: 170,
                }}
            />

            <Text
                style={{
                    fontSize: 32,
                    fontWeight: "bold",
                }}
            >
                Sign In
            </Text>

            <Text
                style={{
                    fontSize: 10,
                }}
            >
                Let's experience the joy of telecare AI.
            </Text>
        </View>
    );
}
