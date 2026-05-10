import { View, TouchableOpacity, Text } from "react-native";

export default function SocialButtons() {
  const socials = ["f", "G", "◎"];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 14,
        marginTop: 40,
      }}
    >
      {socials.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: "#DCDCDC",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#222",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}