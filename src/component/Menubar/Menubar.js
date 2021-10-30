import React from 'react';
import { NavLink } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#e3f2fd'}}>
                <div className="container-fluid">
                    {/* btn deleted */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink  to="/home" activeStyle={{fontWeight: "bold",color: "red"}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/services" activeStyle={{fontWeight: "bold",color: "red"}}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/services" activeStyle={{fontWeight: "bold",color: "red"}}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/myOrder" activeStyle={{fontWeight: "bold",color: "red"}}>Your Order</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/manageOrders" activeStyle={{fontWeight: "bold",color: "red"}}>Manage Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/login" activeStyle={{fontWeight: "bold",color: "red"}}>Login</NavLink>
                            </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Menubar;