import "./header.scss";
import Logo from "../../assets/logo/logo2.svg";
import CallIcon from "../../assets/icons/call-icon.svg";

export default function Header() {
  return (
    <header className="mainHeader">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="callBox">
            <img src={CallIcon} alt="CallIcon" />
          </div>
        </div>
      </div>
    </header>
  );
}
