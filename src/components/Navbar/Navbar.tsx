import { Link } from "react-router-dom";

import './style.scss';

export function Navbar() {
    return (
        <div className="navbar-container">
            <Link to="/" className="navbar-container_link">Accueil</Link>
            <Link to="/about" className="navbar-container_link">À Propos</Link>
        </div>
    );
}