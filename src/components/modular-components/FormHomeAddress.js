const FormHomeAddress = ({defAddress1, defAddress2, defCity, defState, defZipCode,
                          setAddress1, setAddress2, setCity, setState, setZipCode}) => (
    <>
        <div className="form-group">
            <label htmlFor="address1">Address Line 1</label>
            <input type="text" id="address1" name="address1"
                   placeholder="123 Imperium Street"
                   value={defAddress1 ?? ''}
                   onChange={(e) => setAddress1(e.target.value)} required/>
        </div>

        <div className="form-group">
            <label htmlFor="address2">Address Line 2</label>
            <input type="text" id="address2" name="address2"
                   placeholder="777 Nurgle Lane"
                   value={defAddress2 ?? ''}
                   onChange={(e) => setAddress2(e.target.value)} required/>
        </div>
        <div className="form-group form-row">
            <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city"
                       placeholder="Holy Terra" pattern="[a-zA-Z ]+"
                       value={defCity ?? ''}
                       onChange={(e) => setCity(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="state">State</label>
                <br/>
                <select id="state" name="state"
                        onChange={(e) => setState(e.target.value)} required>
                    <option value={defState ?? ''}>{(defState) ? defState : '---'}</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
            </div>
            <div>
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" id="zipCode" name="zipCode"
                       placeholder="12345" pattern="\d{5}|\d{5}-\d{4}"
                       value={defZipCode ?? ''}
                       onChange={(e) => setZipCode(e.target.value)} required/>
            </div>
        </div>
    </>
)

export default FormHomeAddress;