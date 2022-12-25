import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "selva" },
  { id: 2, name: "ganesh" },
  { id: 3, name: "sekar" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getAllUsers = (state) => state.users;
export default userSlice.reducer;
