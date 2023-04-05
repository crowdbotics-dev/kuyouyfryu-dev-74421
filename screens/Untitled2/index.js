import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {}}><View style={styles.mtEoDeuT}></View></Pressable><Text style={styles.DTRlhdkb}>kjhiugkjgugjyguykhjgouykhj</Text><ImageBackground style={styles.wYbZkYhN} source={require("./qrcode_jsonpathfinder.com.png")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  mtEoDeuT: {
    height: 0,
    width: 360,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  DTRlhdkb: {
    width: 100,
    height: 50,
    lineHeight: 27,
    fontSize: 25,
    borderRadius: 0,
    fontFamily: "Nunito",
    fontWeight: "700",
    textAlign: "right"
  },
  wYbZkYhN: {
    width: 107,
    height: 62
  }
});
export default Untitled2;