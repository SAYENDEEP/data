import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import user from "./reducers/user";
import loading from "./reducers/loading";


export default configureStore({
  reducer: {
    user,loading
  },
  // middleware: [...getDefaultMiddleware(),thunk]
})