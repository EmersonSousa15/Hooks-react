import { useState } from "react";

const UseContext = () => {
    const [dataUser, setDataUser] = useState({userEmail: ' ', userPass: ' '});
    const [login, setLogin] = useState(false)

    const handleEmail = (email) => {
        setDataUser((prev) => ({...prev, userEmail: email.target.value}))
    }

    const handlePass = (pass) => {
        setDataUser((prev) => ({...prev, userPass: pass.target.value}))
    }
    
    console.log(dataUser);

 return(
    <div style={{background: '#aaa', maxHeight: '200px'}}>
        <h1>{login ? 'Logged' : 'Not logged in'}</h1>
        <input type='text' onChange={(even) => handleEmail(even)} required/>
        <input type='text' onChange={(even) => handlePass(even)} required/>
        <button>Login</button>
    </div>
 )
}

export default UseContext;