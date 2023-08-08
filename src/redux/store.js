// 모든 state 상태값을 저장하는 저장소
import { configureStore } from "@reduxjs/toolkit";
import exerciseSlice from "./exerciseSlice";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import routineSlice from "./routineSlice";
import modalSlice from "./modalSlice";

const reducers = combineReducers({
  exercise: exerciseSlice.reducer,
  routine: routineSlice.reducer,
  modal: modalSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["exercise", "routine"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
