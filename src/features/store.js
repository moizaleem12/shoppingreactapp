import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./navi/homenav";
const store = configureStore({
  reducer: rootReducer,
});
export default store;
