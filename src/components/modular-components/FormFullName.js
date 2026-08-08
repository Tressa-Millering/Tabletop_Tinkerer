
const FormFullName = ({defFirstName, defLastName, setFirstName, setLastName}) => (
    <div className="form-group form-row">
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName"
                   placeholder="Jonny" pattern="[a-zA-Z ]+"
                   value={defFirstName ?? ''}
                   onChange={(e) => setFirstName(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName"
                   placeholder="Astartes" pattern="[a-zA-Z ]+"
                   value={defLastName ?? ''}
                   onChange={(e) => setLastName(e.target.value)} required/>

        </div>
    </div>
)
export default FormFullName;