import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../assets/styles/Form.scss";

export default function Signup() {
    const minPassLength = 8;
    const minUsernameLength = 3;
    const maxUsernameLength = 32;

    const msg_required = "*";
    const msg_minUsernameLength = "- The minimum length for usernames is " + minUsernameLength.toString() + " characters.";
    const msg_maxUsernameLength = "- The maximum length for usernames is " + maxUsernameLength.toString() + " characters.";
    const msg_usernameCharacters = "- Usernames can only contain letters and numbers.";
    const msg_minPassLength = "- Password should have at least " + minPassLength.toString() + " characters.";

    const regex_Username = /^[A-Za-z0-9_]+$/i
    const regex_Pass = /^[A-Za-z0-9-_\-!@#$%&*]+$/i

    interface IFormInputs {
        username: string;
        email: string;
        password: string;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
    
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log("Success! Form data: ", data);
    }
    const onError = (error) => {
        console.error("Error. Form errors: ", error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} id="form">
            <div className="form-field">
                <input type="text" id="username" placeholder="Username" maxLength={maxUsernameLength} aria-invalid={errors.username ? "true" : "false"} {...register("username", {
                    required: msg_required,
                    minLength: {
                        message: msg_minUsernameLength,
                        value: minUsernameLength
                    },
                    maxLength: {
                        message: msg_maxUsernameLength,
                        value: maxUsernameLength
                    },
                    pattern: {
                        message: msg_usernameCharacters,
                        value: regex_Username
                    }
                })}/>
                <label htmlFor="username">
                    Username
                    <span role="alert" className="required-message">{errors.username && errors.username.message}</span>
                </label>
            </div>
            <div className="form-field">
                <input type="email" id="email" placeholder="Email" aria-invalid={errors.email ? "true" : "false"} {...register("email", {
                    required: msg_required,
                    // Handle your email validation on the backend.
                })}/>
                <label htmlFor="email">
                    Email
                    <span role="alert" className="required-message">{errors.email && errors.email.message}</span>
                </label>
            </div>
            <div className="form-field">
                <input type="password" id="password" placeholder="Password" aria-invalid={errors.password ? "true" : "false"} {...register("password", {
                    required: msg_required,
                    minLength: {
                        message: msg_minPassLength,
                        value: minPassLength
                    },
                    pattern: regex_Pass
                })}/>
                <label htmlFor="password">
                    Password
                    <span role="alert" className="required-message">{errors.password && errors.password.message}</span>
                </label>
            </div>
            <input type="submit" value="Sign up"/>
            <Link to="/login">Have an account? Login.</Link>
        </form>
    );
}