import FormSubmitButtons from "./FormSubmitButtons";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const FormContainer = ({setLoggedIn, APIPath, large, setUserId, userId, children}) => {
    const DEMO_SITE = false;

    const navigate = useNavigate();

    const[errorMsg, setErrorMsg] = useState(null);

    const displayError = () => {
        if (errorMsg) {
            if (DEMO_SITE) {
                return (<h4 style={{textAlign: "center", color: "Red", marginTop: "5%"}}>{errorMsg}</h4>)
            }
            return (<div style={{margin: "5% 5% 10% 5%"}}>
                        <h1 style={{textAlign: "center", color: "Red"}}>REQUEST FAILED: </h1>
                        <h2 style={{textAlign: "center", color: "lightgray"}}>{errorMsg}</h2>
                    </div>)
        }
        return(<></>)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (DEMO_SITE) {
            setErrorMsg(<>This site is a demo; account functionality does not exist.
                Please view <a href={"https://github.com/Tressa-Millering/"}>README.md</a> in
                the Github repository for more info.</>);
            return;
        }


        const formData = new FormData(event.target);
        const converted = Object.fromEntries(formData.entries());

        if (APIPath === "register" && converted.password !== converted.passwordRepeat) {
            setErrorMsg("Passwords must match.");
            return;
        }
        converted.userId = userId;
        //console..og(converted);

        const response = await fetch(`http://localhost:8080/` + APIPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(converted)
        });
        const data = await response.json();
        if (response.ok) {
            //console..og(response.status, data);
            setLoggedIn(true);
            if (APIPath === "account"){
                setUserId(data.userId);
            } else {
                setUserId(data.id);
            }
            return navigate("/");
        } else if (response.status === 400) {
            //console..og(response.status, data, "Account does not exist!");
            setErrorMsg("Account does not exist. Please register first. ");
        } else if (response.status === 401) {
            //console..og(response.status, data, "Credentials are incorrect!");
            setErrorMsg("Credentials are incorrect.")
        } else if (response.status === 409) {
            //console..og(response.status, data, "Account already exists!")
            setErrorMsg("Account already exists.");
        }

        //console..og("REQUEST FAILED. STATUS: ", response.status);

    }

    return(
        <div className={`input-form col-lg-${large ? "6" : "3"} col-md-5 col-sm-6 col-8 mx-auto`}>

            <form className="form-text" onSubmit={handleSubmit}>
                {children}
                <FormSubmitButtons/>
            </form>
            {displayError()}
        </div>)
}

export default FormContainer;



