import { useDispatch } from "react-redux";

export function UsernameField({username}){
    const dispatch = useDispatch();
    function onChange(e){
        
        dispatch({ type: "usernameChange", payload: e.target.value})
    }
    return(
        <form>
            <label>Username </label>
            <input 
            type="text"
            value={username}
            placeholder="Username"
            onChange={onChange}
            />
        </form>
    );
}