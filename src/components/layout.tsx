import {Link} from "react-router-dom";

export function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand"  to="/">GreenShadow</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav ">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/products">Products</Link></li>
                                <li><Link className="dropdown-item" to="/crop">Crops</Link></li>
                                <li><Link className="dropdown-item" to="/staff">Staff</Link></li>
                                <li><Link className="dropdown-item" to="/field">Fields</Link></li>
                                <li><Link className="dropdown-item" to="/vehicle">Vehicles</Link></li>
                                <li><Link className="dropdown-item" to="/equipment">Equipments</Link></li>
                                <li><Link className="dropdown-item" to="/logs">Logs</Link></li>
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>

                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><Link className="dropdown-item" to="/logout">LogOut</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export function Footer(){
    return (
        <div className="text-center p-4 border-top">
           {/* <img src="" alt="" width="200px" height="200px"/>*/}
            GreenShadow Crop Monitoring System @2025
        </div>
    )
}


