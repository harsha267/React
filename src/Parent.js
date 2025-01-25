import { createContext, useContext, useState } from "react"

const userContext=createContext()
export default function Parent2(){
      const[user]=useState('sai')
return(
    <>
    <userContext.Provider value={user}>
    <h1>welcome useContext Hook</h1>
    <C1/>
    </userContext.Provider>
    </>
)}
function C1( ){
     return(
         <>
         <h1>C1</h1>
         <C2  />
         </>
    )}
function C2( ){
    return(
         <>
         <h1>C2</h1>
         <C3 />
         </>
    )
}
 function C3( ){
    return(
         <>
         <h1>C3</h1>
         <C4 />
         </>
    )

}function C4( ){
    return(
         <>
         <h1>C4</h1>
         <C5  />
         </>
    )

}
function C5( ){
    const user=useContext(userContext)
    return(
         <>
         <h1>C5 the data is {user}</h1>
          
         </>
    )

}