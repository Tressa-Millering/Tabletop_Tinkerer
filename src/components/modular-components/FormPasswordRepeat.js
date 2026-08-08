import FormPassword from "./FormPassword";

const FormPasswordRepeat = () => (
    <>
        <FormPassword/>
        <div className="form-group">
            <label htmlFor="password-repeat">Repeat Password</label>
            <input type="password"  id="password-repeat" name="password-repeat"/>
        </div>
    </>
)

export default FormPasswordRepeat;