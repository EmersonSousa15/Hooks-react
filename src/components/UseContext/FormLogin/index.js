import { useContext } from "react";
import { AuthContext } from "../Context";

const FormLogin = ({loginAccount, setDataUser}) => {
    const {setAuth} = useContext(AuthContext);

    const handleEmail = (email) => {
        setDataUser((prev) => ({...prev, userEmail: email.target.value}));
    }

    const handlePass = (pass) => {
        setDataUser((prev) => ({...prev, userPass: pass.target.value}));
    }

    const signOut = () => {
        setAuth(false);
    }

    return(
        <>
            <form onSubmit={loginAccount} style={{display:'flex' ,flexDirection:'column'}}>
                <input type='email' onChange={(even) => handleEmail(even)} placeholder='Email(name@gmail.com)' required/>
                <input type='password' onChange={(even) => handlePass(even)} placeholder='Password(123456)' required/>
                <button type='submit'>Login</button>
            </form>
            <button onClick={signOut}>Sign out</button>
        </>
    )
}

export default FormLogin;