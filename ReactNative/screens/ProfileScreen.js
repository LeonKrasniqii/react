import React from "react";
import { View, StyleSheet } from "react-native";
import StudentInfo from "../components/StudentInfo";
import Project from "../components/Project";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StudentInfo
        fullname="Leon Krasniqi"
        position="UI/UX Designer"
        profileImage={require("../assets/image4.png")}
        description="Hello! Welcome back on your account"
      />

      <Project
        image1={require("../assets/image5.png")}
        image2={require("../assets/image5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default ProfileScreen;