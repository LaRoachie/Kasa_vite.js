import { Link } from "react-router-dom";
import './style.scss';

export function Navbar() {
    return (
        <div className="navbar_links">
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/about" className="navbar-link">À Propos</Link>
        </div>
    );
}