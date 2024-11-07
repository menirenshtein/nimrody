import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StoriesState {
    floorAccess : boolean[];
}

const initialState: StoriesState = {
    floorAccess : [false,false,false,false,false],
    
}

export const  floorAccess = createSlice({
    initialState,
    name: 'floorReducer',
    reducers:{
        changeAccess: (state, action:PayloadAction<number>) =>{
            state.floorAccess[action.payload] = !state.floorAccess[action.payload]
        }
    }
})

export const {changeAccess} = floorAccess.actions;
export default floorAccess.reducer
