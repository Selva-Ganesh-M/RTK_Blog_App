import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "selva" },
  { id: 2, name: "selva" },
  { id: 3, name: "selva" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getAllUsers = (state) => state.users;
export default userSlice.reducer;
