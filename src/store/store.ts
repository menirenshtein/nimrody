import { configureStore } from "@reduxjs/toolkit";
import  floorAccess  from "./floorreducer";
import role  from "./rolereducer";

export const store = configureStore({
    reducer:{
        floorAccess,
        role,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch