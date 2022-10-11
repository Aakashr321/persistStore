import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";





export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    createUser :(state,{payload})=>{
      state.users = payload
    }
  }
});

export default userSlice.reducer;
export const {createUser} = userSlice.actions
