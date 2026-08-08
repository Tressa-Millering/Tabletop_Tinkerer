import {BrowserRouter, Route, Routes} from "react-router-dom";
import './components/tabletop-tinkerer.css';
import Layout from "./components/full-pages/Layout";
import Landing from "./components/full-pages/Landing";
import NoPage from "./components/full-pages/NoPage";
import Calculator from "./components/full-pages/Calculator";
import About from "./components/full-pages/About";
import Register from "./components/full-pages/Register";
import Account from "./components/full-pages/Account";
import Login from "./components/full-pages/Login";
import {useEffect, useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const[userId, setUserId] = useState("");

    useEffect(()=>{
        console.log(userId);
    }, [userId]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUserId={setUserId}/>}>
                    <Route index element={<Landing/>}/>
                    <Route path="/Tabletop_Tinkerer" element={<Landing/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Calculator" element={<Calculator/>}/>
                    <Route path="/Register" element={<Register setLoggedIn={setLoggedIn} setUserId={setUserId}/>}/>
                    <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} setUserId={setUserId}/>}/>
                    <Route path="/Account" element={<Account setLoggedIn={setLoggedIn}  userId={userId} setUserId={setUserId}/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
