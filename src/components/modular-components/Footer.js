import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="navigation-container">
                <ul className="footer-nav">
                    <li>
                        <Link to="/"><span>Home</span></Link>
                    </li>
                    <li>
                        <Link to="/Calculator"><span>Calculator</span></Link>
                    </li>
                    <li>
                        <Link to="/About"><span>About</span></Link>
                    </li>
                </ul>
                <hr/>
                <p>
                    <br/>All models shown are painted by <a
                    href="https://www.instagram.com/wardenbrush?igsh=YjRwcmR0dmJ3MmR3&utm_source=qr">
                    Robby from @wardenbrush</a>
                    <br/>
                    <br/>Calculator Database Powered by <a href="https://wahapedia.ru/">Wahapedia.</a>
                    <br/>
                    <br/>© 2025 Tressa Millering, All Rights Reserved
                    <br/>
                    <br/>Warhammer 40,000 and all associated content are © Games Workshop Limited.
                    <br/>This site has zero affiliation, endorsement, or approval from Games Workshop.
                    <br/>The Official Warhammer website can be found <a
                    href="https://www.warhammer.com/en-US/home">here</a>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;