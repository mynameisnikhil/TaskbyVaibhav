import React, {useState} from "react";
import { useNavigate } from "react-router-dom";




export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate()



    function handleSubmit() {
        const data = localStorage.getItem(email);
        console.log(data);
        if(data === password){
         localStorage.setItem("token", true)
        }
        navigate('/home')
        
    }

    return (
        <div>
            <div className="loginForm">
                <form onSubmit={handleSubmit} className="form">
                    <input type="email"
                        name="email"
                        placeholder="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="formItem"
                    />
                    <input type="password"
                        name="password"
                        placeholder="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="formItem"
                    />
                    <input type="submit"
                        value="LogIn"
                        className="formItem"
                    />
                </form>
            </div> 
        </div>
    )
}

