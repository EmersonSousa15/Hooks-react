import AuthProvider from "./Context";
import UseContextLogin from "./UseContextLogin.js";

const UseContext = () => {
    return(
        <AuthProvider>
            <UseContextLogin/>
        </AuthProvider>
    )
}

export default UseContext;