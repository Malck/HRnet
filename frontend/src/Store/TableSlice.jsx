import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "tableSlice",
  initialState: { length: 10, indexStart: 0, indexEnd: 10 ,currentPage: 1},

  reducers: {
    changeLength: (state, action) => {
        state.length = action.payload;
        state.indexEnd = action.payload;
        state.indexStart = 0; /*refresh l'index start pour eviter des bugs avec les prev et next button*/
        state.currentPage = 1; /*refresh le numero de la page comme on retourne a la premiere*/
    },
    next: (state) => {
        state.indexStart = state.indexStart + state.length;
        state.indexEnd = state.indexEnd + state.length;
        state.currentPage= state.currentPage + 1;
    },
    previous: (state) => {
        state.indexStart = state.indexStart - state.length;
        state.indexEnd = state.indexEnd - state.length;
        state.currentPage= state.currentPage - 1;
    },
      
  },
});
export const { changeLength,next,previous } = tableSlice.actions;

export default tableSlice.reducer;
