import { View, Image, Text } from "react-native";

export default function AuthHeader({ title, subtitle }) {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: 40,
      }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={{
          width: 70,
          height: 70,
          marginBottom: 24,
        }}
      />

      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          color: "#222",
          marginBottom: 10,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: "gray",
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}