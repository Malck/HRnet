import { createSlice } from "@reduxjs/toolkit";
import dataMock from "./datamock.json"
const isMock = true;

const userSlice = createSlice({
  name: "userslice",
  initialState: isMock ? dataMock : [],

  reducers: {
    addEmployee: (state, action) => {
      //Ajoute un profil d'employee dans le store
      state.push(action.payload);
    },
  },
});
export const { addEmployee } = userSlice.actions;

export default userSlice.reducer;
