import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
const Sidebar = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                     />
                    <span className="brand-text font-weight-light">Gestion ITE Paris</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">{user.name}</a>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link active">
                                <i className="nav-icon fas fa-chart-bar"></i>
                                <p>
                                    Dashboard
                                </p>
                            </a>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fab fa-critical-role"></i>
                                <p>
                                    Gestion Roles
                                    <i className="fas fa-angle-left right"></i>
                                    <span className="badge badge-info right">6</span>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/layout/top-nav.html" className="nav-link">
                                        <i className="fa fa-list nav-icon"></i>
                                        <p>Liste Roles</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-user"></i>
                                <p>
                                    Gestion Utilisateurs
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/charts/chartjs.html" className="nav-link">
                                        <i className="fa fa-list nav-icon"></i>
                                        <p>Liste Utilisateurs</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>
                                    Gestion Clients
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/UI/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Liste Clients</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-table"></i>
                                <p>
                                    Gestion des Categories
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/tables/simple.html" className="nav-link">
                                        <i className="fa fa-list nav-icon"></i>
                                        <p>Liste Categorie</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon 	fa fa-product-hunt"></i>
                                <p>
                                    Gestion Produits
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <i className="fa fa-list nav-icon"></i>
                                        <p> <Link to='/product'>liste des produit</Link></p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}



export default Sidebar;
