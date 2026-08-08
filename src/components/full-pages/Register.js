import FormContainer from "../modular-components/FormContainer";
import FormUserName from "../modular-components/FormUserName";
import FormPasswordRepeat from "../modular-components/FormPasswordRepeat";


const Register = (props) => (
    <FormContainer setLoggedIn={props.setLoggedIn} setUserId={props.setUserId} APIPath="register">
        <FormUserName/>
        <FormPasswordRepeat/>
    </FormContainer>
)

export default Register;