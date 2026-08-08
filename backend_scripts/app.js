import express from 'express';
import cors from 'cors';

import validateLoginCredentials from "./services/loginService.js";
import {createAccountDetails, getAccountDetails} from "./services/accountService.js";
import registerLoginCredentials from "./services/registerService.js";

//import validateLoginCredentials from "./copied-services/loginService.js"
//import registerLoginCredentials from "./copied-services/registerService.js"
//import {createAccountDetails, getAccountDetails} from "./copied-services/accountService.js"


const app = express();
const port = 8080;

app.use(
    (request, response, next) => {
        console.log("New request received at " + new Date(Date.now()));
        next();
    }
);

app.use(express.json());
app.use(cors());


app.post('/login', validateLoginCredentials);
app.post('/register', registerLoginCredentials);
app.post('/account', createAccountDetails);
app.get('/account', getAccountDetails);

app.listen(port, () => {
    console.log(`Tabletop Tinkerer Express API listening on port ${port}`);
});