import { configureStore } from "@reduxjs/toolkit";
 
import myReducer from '../slices/userSlice';  
import myFruitReducer from '../slices/fruitSlice';  
  
 const store =configureStore({
    reducer:{
        userInfo:myReducer,
        fruitsInfo:myFruitReducer
    }
 })
 export default store