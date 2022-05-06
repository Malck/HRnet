import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "userslice",
    initialState: [],
       
    reducers:{
        
        addEmployee:(state,action) => {  //Ajoute un profil d'employee dans le store 
            state.push(action.payload)     
        }
    }
})
export const { addEmployee } = userSlice.actions

export default userSlice.reducer
