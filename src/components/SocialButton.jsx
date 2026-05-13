import { TouchableOpacity, Image } from "react-native";

export default function ({ img_link }) {
    return (
        <TouchableOpacity
            style={{
                width: 60,
                height: 60,
                borderWidth: 1,
                borderColor: "#ccc",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                backgroundColor: "white",
            }}
        >
            <Image
                source={{ uri: img_link }}
                style={{
                    height: 40,
                    width: 40,
                }}
            />
        </TouchableOpacity>
    );
}
