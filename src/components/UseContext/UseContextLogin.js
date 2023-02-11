import { useState, useContext } from "react";

import { AuthContext } from './Context';
import FormLogin from './FormLogin';    

const UseContextLogin = () => {
    const {auth, setAuth} = useContext(AuthContext);

    const [dataUser, setDataUser] = useState({userEmail: ' ', userPass: ' '});
    
    const loginAccount = (event) => {
        if(dataUser.userEmail === 'name@gmail.com' && dataUser.userPass === '123456'){
            setAuth(true);
        }else{
            alert('Wrong email or password');
        }

        event.preventDefault();
    }

 return(
    <div style={{background: '#aaa', maxHeight: '200px'}}>
        <h1>{auth ? 'Logged' : 'Not logged in'}</h1>
        <FormLogin loginAccount={loginAccount} setDataUser={setDataUser}/>
    </div>
 )
}

export default UseContextLogin;