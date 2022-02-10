import { useDispatch } from "react-redux";

export function PasswordField({password}){
    const dispatch = useDispatch();
    function onChange(e){
        
        dispatch({ type: "passwordChange", payload: e.target.value})
    }
    return(
        <form>
            <label>Password </label>
            <input 
            type="text"
            value={password}
            placeholder="Password"
            onChange={onChange}
            />
        </form>
    );
}