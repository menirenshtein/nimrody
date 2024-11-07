import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import allRolls from '../data/roles.json' 
interface RoleState {
    role: string
}

const initialState:RoleState = {
    role: 'Guest',
}

export const roleReducer = createSlice({
    initialState,
    name: 'roleReducer',
    reducers:{
        setRole: (state, action:PayloadAction<number>)=>{
            state.role = allRolls[action.payload]
        }
    }
})

export const {setRole} = roleReducer.actions;
export default roleReducer.reducer
