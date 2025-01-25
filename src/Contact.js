import { useSelector } from "react-redux"

export default function Contact()
{
const allFruits= useSelector((state)=> state.fruitsInfo.fruits)

 console.log("the fruits",allFruits)


    return(
        <>
        <h1>Contact Fruit PAGE</h1>
        </>
    )
}