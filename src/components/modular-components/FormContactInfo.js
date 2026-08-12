const FormContactInfo = ({defPhoneNumber, defEmail, setPhoneNumber, setEmail}) => (
    <div className="form-row form-group">
        <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input style={{width: "70%"}}
                   type="tel" id="phoneNumber" name="phoneNumber"
                   placeholder="1234567890" pattern="[\d]{10}"
                   value={defPhoneNumber ?? ''}
                   onChange={(e) => setPhoneNumber(e.target.value)} required/>
        </div>
        <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email"
                       placeholder="jonny@hotmail.com"
                       value={defEmail ?? ''}
                       onChange={(e) => setEmail(e.target.value)} required/>
        </div>
    </div>
)

export default FormContactInfo;