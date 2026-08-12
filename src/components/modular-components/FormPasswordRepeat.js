

const FormPasswordRepeat = () => (

    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required/>

        <label htmlFor="passwordRepeat">Repeat Password</label>
        <input type="password"  id="passwordRepeat" name="passwordRepeat" required/>
    </div>

)

export default FormPasswordRepeat;