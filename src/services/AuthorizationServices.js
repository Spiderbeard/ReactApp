import axios from 'axios';


    function Login(user){

       return axios.post('http://localhost:8080/login', user);
    }

    function Register(user){
        return axios.post('http://localhost:8080/register', user);
    }

    export default {Login,Register};