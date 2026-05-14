import { StatusBar, Text, TouchableOpacity, VirtualizedList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import Header from "../components/Header.jsx";
import InputField from "../components/InputField.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import SocialLinks from "../components/SocialLinks.jsx";

export default function HomeScreen() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                padding: 24,
                backgroundColor: "#f0eeee",
            }}
        >
            <StatusBar barStyle={"dark-content"}/>
            <Header />

            <InputField
                label="Email Address"
                placeholder="Enter your email..."
            />
            <InputField
                label="Password"
                placeholder="Enter your Password..."
                secureTextEntry={true}
            />

            <PrimaryButton title="Sign In" />

            <SocialLinks />

            <Text
                style={{
                    textAlign: "center",
                    marginTop: 40,
                }}
            >
                Don't have an account?
            </Text>

            <TouchableOpacity
                onPress={() => {
                    router.push("/signUp");
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 10,
                        color: "#95C334",
                    }}
                >
                    Sign Up
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
