import { createSlice } from "@reduxjs/toolkit";
import { TracksState } from "../../types/redux/state/tracks";

export const initialState: TracksState = {
  tracks: [],
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    // TO DO
  },
});

export const {} = tracksSlice.actions;

export default tracksSlice.reducer;
