import { useState } from "react"

export default function States(){
    
    // var [clr,setClr]= useState('blue')
    // var [name,setName]= useState('sai')
     var [data,setData]=useState(
        {
            clr:'pink',
            name:'sai'
        }
     )
     
    return(
        <>
        <h1> my name is {data.name}<br></br> i love {data.clr} color</h1>
        <button onClick={()=>{ setData(
            {
                
                    clr:'green',
                    name:'ram'
                 
            }
        )}
            }>click here!! </button>
        </>
    )
}