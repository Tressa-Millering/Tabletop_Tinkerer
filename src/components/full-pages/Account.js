import FormContainer from "../modular-components/FormContainer";
import FormFullName from "../modular-components/FormFullName";
import FormContactInfo from "../modular-components/FormContactInfo";
import FormHomeAddress from "../modular-components/FormHomeAddress";
import {useEffect, useState} from "react";

const Account = (props) => {

    const [userId] = useState(props.userId);
    const [data, setData] = useState({});

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() =>
    {
        const fetchAccountData = async () => {


            const userIdParam = new URLSearchParams({userId});
            const response = await fetch(`http://localhost:8080/account?${userIdParam}`);

            if (response.status === 200) {
                const json = await response.json();
                setData(json);
                return console.log(response.status, json)
            }else if (response.status === 204) {
                return console.log(response.status, "No data for this account!")
            }
            console.log("FETCH FAILED. STATUS: ", response.status);
        }

        fetchAccountData();
    }, [userId]);


    useEffect(() => {
        setfirstName(data['firstName']);
        setLastName(data['lastName']);
        setAddress1(data['address1']);
        setAddress2(data['address2']);
        setCity(data['city']);
        setState(data['state']);
        setZipCode(data['zipCode']);
        setPhoneNumber(data['phoneNumber']);
        setEmail(data['email']);

        //DEBUG
        //console.log("DATA CHANGED")
        //console.log(data);
    }, [data])


    return(
        <FormContainer large="true" setLoggedIn={props.setLoggedIn} setUserId={props.setUserId} userId={props.userId} APIPath="account">
            <FormFullName
                defFirstName={firstName} defLastName={lastName}
                setFirstName={setfirstName} setLastName={setLastName} />

            <FormHomeAddress
                defAddress1={address1} defAddress2={address2}
                defCity={city} defState={state} defZipCode={zipCode}

                setAddress1={setAddress1} setAddress2={setAddress2}
                setCity={setCity} setState={setState} setZipCode={setZipCode}/>

            <FormContactInfo
                defPhoneNumber={phoneNumber} defEmail={email}
                setPhoneNumber={setPhoneNumber} setEmail={setEmail}/>
        </FormContainer>
    )
}

export default Account;