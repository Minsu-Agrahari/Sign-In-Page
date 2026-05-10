import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function FooterLinks({
  text,
  actionText,
  route,
}) {
  const router = useRouter();

  return (
    <View
      style={{
        marginTop: 35,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#444",
          marginBottom: 14,
        }}
      >
        {text}{" "}
      </Text>

      <TouchableOpacity onPress={() => router.push(route)}>
        <Text
          style={{
            color: "#8CD11F",
            fontWeight: "bold",
          }}
        >
          {actionText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}