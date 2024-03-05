import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
};

export const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupUser:(state,action)=>{
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {loginUser, logoutUser, signupUser,setLoading} = AuthSlice.actions;
 export default AuthSlice.reducer;