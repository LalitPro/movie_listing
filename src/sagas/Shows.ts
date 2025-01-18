import { call, put } from "redux-saga/effects";
import { loadShowDetail, searchShows } from "../api";
import { Action } from "../actions";
import { showDetailLoadedAction, showsLoadedAction } from "../actions/Shows";

export function* fetchShows(action: Action): Generator<any, any> {
  const shows = yield call(searchShows, action.payload);

  yield put(showsLoadedAction(shows));
}

export function* fetchShowDetail(action: Action): Generator<any, any> {
  const show = yield call(loadShowDetail, action.payload);

  yield put(showDetailLoadedAction(show));
}
