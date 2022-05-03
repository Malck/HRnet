import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "userslice",
    initialState: [],
       
    reducers:{
        
        addEmployee:(state,action) => {  //dans profile.jsx met a jour le prenom et nom 
            state.push(action.payload)     
        }
    }
})
export const { addEmployee } = userSlice.actions

export default userSlice.reducer
