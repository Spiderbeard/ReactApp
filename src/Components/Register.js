import { useSelector } from "react-redux";
import {UsernameField} from "./UsernameField";
import { PasswordField } from "./PasswordField";
import AuthorizationServices from "../services/AuthorizationServices";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";



import { ConfirmPasswordField } from "./ConfirmPasswordField";
import  Button  from "react-bootstrap/Button";

export default function Register(){
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = () =>{
        console.log(user);
        AuthorizationServices.Register(user).then(response =>{
            if(response.status === 201)
            {
                dispatch({type:"logout"});
                navigate("/login");
            }
        })
    }


    return(
        <div>
            <h1>Register</h1>
            <UsernameField username={user.username}/>
            <PasswordField password={user.password} />
            <ConfirmPasswordField confirm={user.confirmPassword}/>
            <Button onClick={handleRegister}>
                Register
            </Button>
        </div>
    )
}