import axios from "axios";
import { Show } from "./models/Show";

export const BASE_URL = "https://api.tvmaze.com/";

export const searchShows = async (keyword: string) => {
  if (keyword == "") {
    const response = await axios.get<{ show: Show }[]>(
      "https://api.tvmaze.com/shows"
    );
    console.log(response);

    return response.data.map((item) => item);
  }
  const response = await axios.get<{ show: Show }[]>(
    BASE_URL + "search/shows?q=" + keyword
  );
  return response.data.map((item) => item.show);
};

export const loadShowDetail = async (showId: number) => {
  const show = await axios
    .get(BASE_URL + "shows/" + showId)
    .then((response) => response.data);
  const showCast = await axios
    .get(BASE_URL + "shows/" + showId + "/cast")
    .then((response) => response.data);

  show.casts = showCast;

  return show;
};
