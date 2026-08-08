import FormContainer from "../modular-components/FormContainer";
import FormUserName from "../modular-components/FormUserName";
import FormPassword from "../modular-components/FormPassword";

const Login = (props) =>{
    return(
    <FormContainer setLoggedIn={props.setLoggedIn} setUserId={props.setUserId} APIPath="login">
        <FormUserName/>
        <FormPassword/>
    </FormContainer>
)}

export default Login;