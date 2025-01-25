import {createSlice} from '@reduxjs/toolkit'
const initialState={
    eusers:[]
}
export const userSlice = createSlice({
    name:'mySlice',
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.eusers=[...state.eusers,action.payload]
        },
    }
})                              
export const {setUsers}=userSlice.actions
export default userSlice.reducer