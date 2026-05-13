import { View  } from "react-native";
import SocialButton from "./SocialButton";

export default function SocialLinks() {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 12,
                marginTop: 40,
            }}
        >
            <SocialButton img_link="https://cdn-icons-png.flaticon.com/128/2175/2175193.png"/>
            <SocialButton img_link="https://cdn-icons-png.flaticon.com/128/10110/10110386.png"/>
            <SocialButton img_link="https://cdn-icons-png.flaticon.com/128/3670/3670274.png"/>
        </View>
    );
}
