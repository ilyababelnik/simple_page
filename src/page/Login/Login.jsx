import { useContext } from 'react';
import { LoginContext } from './../../context/index';

let Login = () => {

    let {isLogin, setIsLogin} = useContext(LoginContext);

    let login = (e) => {
        e.preventDefault();
        setIsLogin(true);
    }

    return (
        <form onSubmit={login}>
            <label>Name</label>
            <input type='text' placeholder="Write your name" />

            <label>Password</label>
            <input type='password' placeholder="Write your password" />
            <button>OK</button>
        </form>
    );
};

export default Login;