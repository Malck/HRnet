import { createSlice } from "@reduxjs/toolkit";
const isMock = true;
const dataMock = [
  {
    firstName: "Joe",
    lastName: "Loko",
    birthDay: "1996-05-06",
    startDate: "2004-12-25",
    street: "mokez",
    city: "fedfell",
    zip: "23",
    state: "FL",
    department: "Legal",
    id: "11154156",
  },
  {
    firstName: "Adil",
    lastName: "Bou",
    birthDay: "1992-05-06",
    startDate: "2004-08-10",
    street: "zadar",
    city: "oprie",
    zip: "12",
    state: "AS",
    department: "Sales",
    id: "11154256",
  },
];

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
