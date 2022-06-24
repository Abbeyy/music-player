import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TracksState } from "../../types/redux/state/tracks";
import { Track } from "../../types/tracks";

export const initialState: TracksState = {
  track: undefined,
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<Track>) => {
      state.track = action.payload;
    },
    clearTrack: (state) => {
      state.track = undefined;
    },
  },
});

export const { setTrack, clearTrack } = tracksSlice.actions;

export default tracksSlice.reducer;
