import { produce } from "immer";
import { AnyAction } from "redux";
import {} from "../actions";
import { Show } from "../models/Show";
import {
  SHOW_DETAIL_LOADED,
  SHOWS_LOADED,
  SHOWS_QUERY_CHANGE,
} from "../actions/Shows";
import { normalize, schema } from "normalizr";

type State = {
  shows: { [showId: number]: Show };
  query_shows: { [query: string]: number[] };
  query: string;
  loading: boolean;
  show_loading: { [showId: number]: boolean };
};

const initialState: State = {
  shows: {},
  query_shows: {},
  query: "",
  show_loading: {},
  loading: false,
};

const ShowReducer = (currentState = initialState, action: AnyAction): State => {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(currentState, (draft) => {
        const shows = action.payload as Show[];

        if (!shows || shows.length === 0) {
          return;
        }

        const showSchema = new schema.Entity("shows");

        const normalizedData = normalize(shows, [showSchema]);

        draft.loading = false;

        draft.query_shows[draft.query] = normalizedData.result;

        //  nahin karna hai
        draft.shows = { ...draft.shows, ...normalizedData.entities.shows };
      });
    case SHOWS_QUERY_CHANGE:
      return produce(currentState, (draft) => {
        draft.query = action.payload;
        draft.loading = true;
      });
    case SHOW_DETAIL_LOADED:
      return produce(currentState, (draft) => {
        const show = action.payload as Show;
        draft.shows[show.id] = show;
        draft.loading = false;
      });
    default:
      return currentState;
  }
};

export default ShowReducer;
