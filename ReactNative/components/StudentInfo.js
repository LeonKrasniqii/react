import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const StudentInfo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBackground} />

      <View style={styles.profileImageContainer}>
        <Image
          source={props.profileImage}
          style={styles.profileImage}
        />
      </View>

      <TouchableOpacity style={styles.settingsIcon}>
        <Text style={styles.settingsText}>⚙️</Text>
      </TouchableOpacity>

      <View style={styles.cardContent}>
        <Text style={styles.fullname}>{props.fullname}</Text>

        <Text style={styles.position}>{props.position}</Text>

        <Text style={styles.description}>{props.description}</Text>

        <TouchableOpacity style={styles.hireButton}>
          <Text style={styles.hireButtonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },

  headerBackground: {
    width: "100%",
    height: 250,
    backgroundColor: "#5aa9c9",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  profileImageContainer: {
    position: "absolute",
    top: 80,
    alignSelf: "center",
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },

  settingsIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },

  settingsText: {
    fontSize: 22,
  },

  cardContent: {
    marginTop: 140,
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  fullname: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
    color: "#333",
  },

  position: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },

  description: {
    textAlign: "center",
    color: "#666",
    marginTop: 15,
    lineHeight: 20,
  },

  hireButton: {
    backgroundColor: "#FFD200",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },

  hireButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
});

export default StudentInfo;