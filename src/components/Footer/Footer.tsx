import logo from "../../assets/logo_footer.svg";

import './style.scss';

export function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Logo" className="footer_logo" />
      <p className='footer_mentions'>&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
}