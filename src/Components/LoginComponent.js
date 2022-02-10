import React from "react";
import  Button  from "react-bootstrap/Button";

import { useSelector } from "react-redux";
import {UsernameField} from "./UsernameField";
import { PasswordField } from "./PasswordField";
import AuthorizationServices from "../services/AuthorizationServices";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

export default function Login(){
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogin = () => {
       
        AuthorizationServices.Login(user).then(response => {
            if(response.status === 200)
            {
                console.log(response.data.token)
                dispatch({type: "jwtChange", payload: response.data.token})
                navigate("/");
                
            }
           

        });
       

    }

    const handleRegister = () =>{
        navigate("/register");
    }
   console.log(user);
    return(
        <div className="Login">
            <h1>Login</h1>
        
                <UsernameField username={user.username} />
                
                <PasswordField password={user.password}/>
                <Button block size="sm" onClick={handleLogin}>
                    Login
                </Button>
               <Button block size="sm" onClick={handleRegister}>
                    Register
                </Button>
                
            

        </div>
    );
}
    

   
