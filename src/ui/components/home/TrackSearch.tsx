import { useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
} from "react-native";

export const TrackSearch = () => {
  const [searchName, setSearchName] = useState("");

  const onKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (e.nativeEvent.key === "Enter") {
      //call thunk
    }
  };

  return (
    <TextInput
      style={styles.inputContainer}
      placeholder="Search for a track..."
      value={searchName}
      onChangeText={(text) => setSearchName(text)}
      onKeyPress={onKeyPress}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    background: "white",
    borderRadius: 60,
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
});
