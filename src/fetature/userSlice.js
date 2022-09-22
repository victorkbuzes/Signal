import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : 'user',
    initialState: {
         email: '', 
         password: ''
        },
    reducers: {
        setUser:(state, action) => {
            console.log("action: ", action);
            state.user.email = action.payload
            state.user.password = action.payload
        }

     }
})

export const {  setUser } = userSlice.actions;
export const selectedUser = (state) => state?.user;

export default userSlice.reducer;