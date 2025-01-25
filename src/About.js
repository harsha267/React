import { useState } from "react"
import  {useDispatch}  from  "react-redux";
 
import {setFruitInfo }from './slices/fruitSlice';
export default function About()
{
    const fruitDispatch= useDispatch()  

const [fruitName,setFruit]=useState("");
console.log('the fruit name b4 is',fruitName)
    function updateFruit(e)
    {
         
        var val=e.target.value
        setFruit( val)
      
        console.log('the fruit name is',fruitName)
    }

    function addFruit(a)
    {
        a.preventDefault()
        fruitDispatch(setFruitInfo(fruitName))
    }
    return(
        <>
        <h1>About PAGE</h1>
        <input type="text" onChange={updateFruit}></input>
        <button onClick={addFruit}>add fruit</button>
        </>
    )
}