import { configureStore } from '@reduxjs/toolkit'
import todoSlice from "../Store/Slice"

export const store = configureStore({
  reducer: {
    UserState: todoSlice
  },
})