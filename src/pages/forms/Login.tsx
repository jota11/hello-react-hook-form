import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../assets/styles/Form.scss";

export default function Login() {
    const minPassLength = 8;
    const minUsernameLength = 3;
    const maxUsernameLength = 32;
    
    const msg_required = "*";

    interface IFormInputs {
        username: string;
        password: string;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = data => {
        console.group("Success! Form data: " + data);
    }
    const onError = (error) => {
        console.error("Error. Form errors: ", error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} id="form">
            <div className="form-field">
                <input type="text" id="username" placeholder="Username" maxLength={maxUsernameLength} aria-invalid={errors.username ? "true" : "false"} {...register("username", {
                    required: msg_required,
                    minLength: minUsernameLength,
                    maxLength: maxUsernameLength,
                    pattern: /^[A-Za-z0-9_]+$/i
                })}/>
                <label htmlFor="username">
                    Username
                    <span role="alert" className="required-message">{errors.username && errors.username.message}</span>
                </label>
            </div>
            <div className="form-field">
                <input type="password" id="password" placeholder="Password" aria-invalid={errors.password ? "true" : "false"} {...register("password", {
                    required: msg_required,
                    minLength: minPassLength
                })}/>
                <label htmlFor="password">
                    Password
                    <span role="alert" className="required-message">{errors.password && errors.password.message}</span>
                </label>
            </div>
            <input type="submit" value="Login"/>
            <Link to="/signup">Don't have an account? Sign up.</Link>
        </form>
    );
}