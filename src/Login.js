import { useNavigate } from "react-router-dom"

export default function Login()
{
  const navigate=useNavigate()

  function gotoDashboard()
  {
    navigate('/dashboard')
  }
    return(
        <>
        <h1>LOGIN PAGE</h1>
        <button onClick={()=>navigate('/dashboard')}>go to dashboard</button>
        </>
    )
}