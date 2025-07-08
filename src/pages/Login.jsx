import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

function Login(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if(!userName || !password){
            alert("Please fill the details.")
            return;
        }

        localStorage.setItem('token', 'mock-token');
        localStorage.setItem('user', userName);

        navigate('/dashboard');
    }

    return (

        <>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder="Username/Email-ID"
                    value = {userName}
                    onChange={(e)=> setUserName(e.target.value)} />
                
                <input 
                    type="password"
                    placeholder="Password"
                    value ={password}
                    onChange = {(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;