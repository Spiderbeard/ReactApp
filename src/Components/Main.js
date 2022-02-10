import React from "react";
import {Route, Routes,Navigate} from "react-router-dom";

import Login from "../Components/LoginComponent";
import Home from "../Components/HomeComponent";
import Register from "../Components/Register";
import { useSelector } from "react-redux";



export default function Main(){
    const loggedIn = useSelector((state) => state.isUserLoggedin);
   
    return(

       
        <Routes>
            <Route exact path='/login' element={<Login/>} />
            
            <Route exact path="/" element={
                    loggedIn ? 
                        <Home />
                 :  <Navigate to='/login'/> }/>
               
            <Route exact path='/register' element={<Register/> } />  
        </Routes>
    );

}