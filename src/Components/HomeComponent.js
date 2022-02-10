import React from "react";
import { useDispatch } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
export default function HomeComponet(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function handleLogout(){
        dispatch({type:"logout"});
        navigate("/login");

    }

    return(
        <div>
             <button>Home</button>
             <button onClick={handleLogout}>Logout</button>

            <h1>You must be autheticated to see this.</h1>

        </div>
       
    )
}