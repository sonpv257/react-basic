import React from "react";
import './Nav.css';
import './Nav.min.css';
import { VscMenu } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
        };
    }

    toggleMenu = () => {
        this.setState({ menuActive: !this.state.menuActive });
    }

    closeMenu = () => {
        this.setState({ menuActive: false });
    }

    handleClickOutside = (event) => {
        if (this.state.menuActive && !event.target.closest('.nav-wrapper') && !event.target.closest('.nav-toggle')) {
            this.closeMenu();
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    render() {
        return (
            <>
            <header className="header">
                <div className="navbar nav-container">
                    <div className="nav-logo">
                        <NavLink to="/home" className="brand">Brand</NavLink>
                    </div>
                    <div className="nav-menu">
                        <nav className="nav">
                            <div className="nav-toggle" onClick={this.toggleMenu}>
                                <VscMenu />
                            </div>
                            <ul className={`nav-wrapper ${this.state.menuActive ? "active" : ""}`}>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/home" onClick={this.closeMenu}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/user" onClick={this.closeMenu}>Users</NavLink>
                                </li>                                
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/todos" onClick={this.closeMenu}>Todos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about" onClick={this.closeMenu}>About</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            </>
        )
    }
}

export default Nav;
