import { Link } from "react-router-dom";
import NavBar from './navbar.jsx';
import warning from './assets/warning.svg';

const ErrorPage = () => {
    return (
        <>
        <NavBar />
        <div className="main-container">
        <img src={warning} alt="" />
        <h1>ERROR 404</h1>
        <p>The page you tried to reach was not found.</p>
        <Link to='/'>Take me back to homepage</Link>
        </div>
        </>
    )
}

export default ErrorPage;