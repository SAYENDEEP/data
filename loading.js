import { createSlice } from "@reduxjs/toolkit";


const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    loading: () => true,
    notloading: ()=> false,
  }
})

export const { loading, notloading } = loadingSlice.actions;
export default loadingSlice.reducer;