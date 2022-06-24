import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { colours } from "../../utils/colourPalette";

export const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <LinearGradient
        colors={[colours.blue, colours.base]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={styles.linearGradient}
      >
        <Text>Home Screen</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    paddingTop: 60,
  },
  background: { flex: 1, backgroundColor: colours.base, paddingTop: 10 },
});
