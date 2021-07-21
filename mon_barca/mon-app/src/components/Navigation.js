import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/calendar" activeClassName="nav-active">
                Calendrier
            </NavLink>
            <NavLink exact to="/players" activeClassName="nav-active">
                Joueurs
            </NavLink>
            <NavLink exact to="/classement" activeClassName="nav-active">
                Classement
            </NavLink>
        </div>
    );
};

export default Navigation;