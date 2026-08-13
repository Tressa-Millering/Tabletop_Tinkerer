# Tabletop Tinkerer
This is a full-stack demo app featuring user authentication, account management,
and a persistent database backend, all built as the foundation for a Warhammer 40k Calculator.

The backend is build with Node/Express to implement a full account system. 
User account information is stored persistently in a PostgreSQL database, which 
is fetched from to autofill information or to verify user credentials using 
JWT-based authorization (the passwords to which are fully hashed using bcrypt). 

The calculator logic is not built, primarily as this is a demo meant to focus on the account infrastructure that the real site would need. 

> Note: The version hosted here includes all backend source code, but the backend
> is not running as it is not yet deployed to a public server. All static aspects of the
> site are still fully functional. Functionality can be seen in the video [here](https://www.youtube.com/watch?v=-24YH-FiC6A). 
