import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../styling/login.css"

export default function Login(){
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const validateLogin = async () => {
        try {
            var response = await axios.post("/adminLogin", {
                username: user,
                password: pass
            })
            if(response.data.valid)
                navigate("/console")
            else
                alert("Incorrect Credentials")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="login-box">
            <input type="text" placeholder="Username" onChange={
                (e) => {setUser(e.target.value)}
            } /><br /><br />
            <input type="text" placeholder="Password" onChange={
                (e) => {setPass(e.target.value)}
            } /><br /><br />
            <input type="button" value="Login" onClick={() =>  {validateLogin()}} />
        </div>
    )
}