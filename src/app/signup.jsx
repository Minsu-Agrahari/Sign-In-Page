import { SafeAreaView, View, ScrollView } from "react-native";

import AuthHeader from "../components/AuthHeader.jsx";
import InputField from "../components/InputField.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import FooterLinks from "../components/FooterLinks.jsx";

export default function SignupScreen() {
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
          title="Sign Up For Free"
          subtitle="Sign up in 1 minute for free!"
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

        <InputField
          label="Password Confirmation"
          placeholder="Confirm password..."
          secureTextEntry={true}
        />

        <PrimaryButton title="Sign Up" />

        <FooterLinks
          text="Already have an account?"
          actionText="Sign In"
          route="/"
        />
      </ScrollView>
    </SafeAreaView>
  );
}