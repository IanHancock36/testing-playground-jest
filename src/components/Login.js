import React,{useState} from 'react'

 const Login =()=>{
    const [error, setError] = useState(false)
    const [userName, setUserName] = useState("")
    const [password,setPassword] = useState("")
    return (
        <div>
            <form>
                <input type="text" placeholder="username" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                <input type ="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button disabled={true}>Login</button>
                <span data-testid="error" style={{visibility: error? "visible":"hidden"}}>Something went wrong </span>
            </form>
        </div>
    )

}

export default Login

