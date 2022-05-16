import { configureStore } from '@reduxjs/toolkit'
import todoSlice from "../Store/Slice"
import tableSlice from "../Store/TableSlice"

export const store = configureStore({
  reducer: {
    UserState: todoSlice,
    TableState: tableSlice
  },
})