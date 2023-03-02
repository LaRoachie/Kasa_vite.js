import { Link } from "react-router-dom";

import logo from "../../assets/logo_header.svg";
import { Navbar } from "../Navbar";

import './style.scss';

export function Header() {
  return (
    <div className="header">
      <Link to="">
        <img src={logo} alt="Logo" className="header_logo" />
      </Link>
      <Navbar />
    </div>
  );
}