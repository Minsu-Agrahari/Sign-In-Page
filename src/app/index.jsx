import { SafeAreaView, View, ScrollView } from "react-native";

import AuthHeader from "../components/AuthHeader";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import SocialButtons from "../components/SocialButtons";
import FooterLinks from "../components/FooterLinks";

export default function HomeScreen() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#F7F7F7",
            }}
        >
            <ScrollView
                style={{
                    flex: 1,
                    paddingHorizontal: 24,
                    paddingTop: 70,
                }}
            >
                <AuthHeader
                    title="Sign In"
                    subtitle="Let's experience the joy of telecare AI."
                />

                <InputField
                    label="Email Address"
                    placeholder="Enter your email..."
                />

                <InputField
                    label="Password"
                    placeholder="Enter your password..."
                    secureTextEntry={true}
                />

                <PrimaryButton title="Sign In" />

                <SocialButtons />

                <FooterLinks
                    text="Don't have an account?"
                    actionText="Sign Up"
                    route="/signup"
                />
            </ScrollView>
        </SafeAreaView>
    );
}
