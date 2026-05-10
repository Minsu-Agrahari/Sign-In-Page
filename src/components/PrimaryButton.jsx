import { TouchableOpacity, Text } from "react-native";

export default function PrimaryButton({ title }) {
  return (
    <TouchableOpacity
      style={{
        height: 58,
        backgroundColor: "#8CD11F",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}