import logo from './assets/Logo Horizontal Black 2.png';
import { Link } from 'react-router-dom';
import './header.css'
export default function Header(){
    return <div className="navbar navbar-expand-md">
    <div className="container-fluid">
        <div className="navbar-brand"><img src={logo} alt=".."/></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#head">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="head" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Services" className="nav-link">Service</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Aboutus" className="nav-link">About Us</Link>
                </li>
                
            </ul>
        </div>
    </div>
  </div>;
}