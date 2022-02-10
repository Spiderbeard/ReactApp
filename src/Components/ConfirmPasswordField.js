
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function ConfirmPasswordField({confirm}){
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    let passwordsDoNotMatch = false;
    
    
    function onBlur(e){
        
        if(user.password !== confirm)
        {
            passwordsDoNotMatch = true;
            //alert("Passwords Do Not Match");
        }
       
        
        
        
        
    }
    function onChange(e){
        console.log(e.target.value);
        console.log(user);
        dispatch({type:"confirmPassword", payload: e.target.value});
    }
    return(
        <form>
            
            <label>Confirm Password </label>
            <input 
            type="text"
            value={confirm}
            placeholder="Password"
            onChange={onChange}
           
            onBlur={onBlur}
            />
            
        </form>
    );
}