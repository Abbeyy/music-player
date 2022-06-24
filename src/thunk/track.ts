import { postTrackSearch } from "../api/trackAPI";
import { setTrack } from "../redux/reducers/tracksSlice";
import { AppThunk } from "../types/redux/store";

enum REQUEST_STATUS {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}

export const sendTrackSearch =
  (searchValue: string): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();

    const token = accessTokenSelector(state);

    if (!token) {
      console.warn("No token present.");
      return;
    }

    try {
      const result = await postTrackSearch({ token, searchValue });

      if (result) {
        const { status, statusText } = result;

        switch (status) {
          case REQUEST_STATUS.OK:
          case REQUEST_STATUS.CREATED:
            setTrack(result.data);
            break;

          default:
            console.warn(`Send Track Search Failed: ${status} - ${statusText}`);
            break;
        }
      } else {
        console.warn(`Send Track Search Failed: No Reply`);
      }
    } catch (err) {
      console.warn(`Send Track Search Failed: ${err}`);
    }
  };
