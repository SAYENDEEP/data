import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {urls} from "../../../config.json";

export const autologin = createAsyncThunk(
  'user/autologin',
  async (args,thunkAPI) => {
    try {
      return (await axios.get(urls.autologin, { withCredentials: true})).data;
    } catch (e) {
      if (e.response)
        return thunkAPI.rejectWithValue(e.response.data);
      else
        return thunkAPI.rejectWithValue();
    }
  }
)

const reducer =  createSlice({
  name: 'user',
  initialState: {fetched: false},
  reducers: {
    setuser: (state, action) => ({ ...state, data: action.payload}),
    setprofile: (state, action) => {state.data.profile = action.payload},
    logout: (state) => ({ fetched: true }),
    just: () => ({ fetched: true })
  },
  extraReducers: {
    [autologin.fulfilled]: (state, action) =>  ({ fetched: true, data: action.payload.data }),
    [autologin.rejected]: (state, action) => {
      if(!action.payload && action.payload.status!==404) alert("Something went wrong!!");
      state.fetched = true;
    },
  }
})

export const { setuser, logout, setprofile} =  reducer.actions;
export default reducer.reducer;
