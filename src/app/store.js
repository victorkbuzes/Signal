import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../fetature/userSlice";



export const store = configureStore({
    reducer: {
        user: userSlice
    }
    
})