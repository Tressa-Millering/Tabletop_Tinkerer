import {Link, useNavigate} from "react-router-dom";

const Header = (props) => {
    const {loggedIn, setLoggedIn} = props;

    const navigate = useNavigate();
    const logout = () =>{
        setLoggedIn(false);
        navigate("/");
    }

    const dropdown = (loggedIn) => {
        if (loggedIn) {
            return (
                <div className="dropdown">
                    <Link to="/Account"><span><i className="bi bi-person-circle"></i> Account</span></Link>
                    <div className="dropdown-content">
                        <Link to="/" onClick={logout}><span>Logout <i
                            className="bi bi-arrow-return-left"></i></span></Link>
                    </div>
                </div>)
        } else {
            return (<div className="dropdown">
                <Link to="/Register"><span><i className="bi bi-person-circle"></i> Register</span></Link>
                <div className="dropdown-content">
                    <Link to="/Register"><span>Register</span></Link>
                    <Link to="/Login"><span>Login</span></Link>
                </div>
            </div>)
        }
    }

    const mobileLinks = (loggedIn) => {
        if (loggedIn) {return ( <>
            <li>
                <Link to="/Account"><span>Account</span></Link>
            </li>
            <li>
                <Link to="/" onClick={logout}><span>Logout <i className="bi bi-arrow-return-left"></i></span></Link>
            </li></>
        ) } else return (<>
        <li>
            <Link to="/Register"><span>Register</span></Link>
        </li>
        <li>
            <Link to="/Login"><span>Login</span></Link>
        </li></>
        )
    }

    return (
        <nav>
            <div id="top-nav" className="navigation-container">
                <ul className="navigation">
                    <li>
                        <Link to="/"><span><i className="bi bi-dice-3-fill"></i> Home</span></Link>
                    </li>
                    <li>
                        <Link to="/Calculator"><span>Calculator</span></Link>
                    </li>
                    <li>
                        <Link to="/About"><span>About</span></Link>
                    </li>
                    <li id="account-label">
                        {dropdown(loggedIn)}
                    </li>
                </ul>
            </div>

            <details className="dropdown-mobile">
                <summary><i className="bi bi-dice-3-fill"></i></summary>
                <div>
                    <ul>
                        <li>
                            <Link to="/"><span>Home</span></Link>
                        </li>
                        <li>
                            <Link to="/Calculator"><span>Calculator</span></Link>
                        </li>
                        <li>
                            <Link to="/About"><span>About</span></Link>
                        </li>
                        {mobileLinks(loggedIn)}
                    </ul>
                </div>
            </details>

        </nav>
    );
}

export default Header