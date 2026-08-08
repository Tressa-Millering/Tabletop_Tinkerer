
import {Outlet} from "react-router-dom";
import Header from "../modular-components/Header";
import Footer from "../modular-components/Footer";

const Layout = (props) => {

    const {loggedIn, setLoggedIn} = props;


    return(
        <>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUserId={props.setUserId}/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;