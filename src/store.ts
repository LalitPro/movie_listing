import { applyMiddleware, combineReducers, createStore } from "redux";
import ShowReducer from "./reducers/Show";
import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery } from "redux-saga/effects";
import { LOAD_SHOW_ACTION, SHOWS_QUERY_CHANGE } from "./actions/Shows";
import { fetchShowDetail, fetchShows } from "./sagas/Shows";
import { composeWithDevTools } from "@redux-devtools/extension";

const reducer = combineReducers({ shows: ShowReducer });

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield;
  debounce(100, SHOWS_QUERY_CHANGE, fetchShows);
  yield takeEvery(LOAD_SHOW_ACTION, fetchShowDetail);
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type State = ReturnType<typeof reducer>;

export default store;

// Steps to add an Feature

// 1. Make space in State for new Data                                   ✔✔✔
//   a) add new Reducer                                                  ✔✔✔
//   b) Or add keys to existing state in a reducer()                     ✔✔✔

// 2. Define action(s)                                                   ✔✔✔

// 3. create mapDispatchToProps and accordingly add props to components  ✔✔✔

// 4. Dispatch action(s)                                                 ✔✔✔

//   -------> Testting step 1                                             ✔✔✔

// 5. Add switch case to reducer                                          ✔✔✔

//   -------> Testting step 2                                             ✔✔✔

// 6. Add Selectors                                                       ✔✔✔

// 7. mapStateToProps                                                     ✔✔✔

//   -------> Testting step 2                                             ✔✔✔
