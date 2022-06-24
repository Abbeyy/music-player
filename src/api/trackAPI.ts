import axios from "axios";
import { Track } from "../types/tracks";
import { BASE_URL } from "./baseUrl";

type SearchTrack = {
  token: string;
  searchText: string;
};

export const postTrackSearch = async ({ token, searchText }: SearchTrack) => {
  if (!token) {
    return null;
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = `${BASE_URL}/tracks/${searchText}`;

  const result = await axios.post<Response>(url, config);
  return result;
};
