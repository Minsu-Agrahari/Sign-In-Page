import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import Header from "../components/Header.jsx";
import InputField from "../components/InputField.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";

export default function SignUp() {
    return (
        <View
            style={{
                flex: 1,
                padding: 24,
                backgroundColor: "#f0eeee",
            }}
        >
            <Header />

            <InputField label="Email Address" placeholder="Enter your email" />
            <InputField
                label="Password"
                placeholder="Enter your Password"
                secureTextEntry={true}
            />
            <InputField
                label="Password Confirmation"
                placeholder="Confirm Password"
                secureTextEntry={true}
            />

            <PrimaryButton title="Sign Up" />

            <Text
                style={{
                    textAlign: "center",
                    marginTop: 40,
                }}
            >
                Already have an account?
            </Text>

            <TouchableOpacity
                onPress={() => {
                    router.push("/");
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        color: "#95C334",
                        marginTop: 10,
                    }}
                >
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>
    );
}
