import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Playing around with react-hook-form</h1>
            <Link className="link" to="/signup">Signup page</Link>
            <Link className="link" to="/login">Login page</Link>
        </div>
    );
}