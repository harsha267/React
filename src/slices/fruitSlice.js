import {createSlice} from '@reduxjs/toolkit'
const initialState={
    eusers:[],
     fruits: []


}
export const fruitSlice= createSlice({   
    name:'mySlice1', // unique name
    initialState,
    reducers:{
        setFruitInfo:(state,action)=>{ // it contains 2 argu , first one action 2nd payload
            state.fruits=[...state.fruits,action.payload]
        },
        deleteFruit:(state,action)=>{
            state.fruits=state.fruits.filter((fruit,index)=>index!==action.payload)
        }
    }
})
export const {setFruitInfo,deleteFruit}=fruitSlice.actions
export default fruitSlice.reducer