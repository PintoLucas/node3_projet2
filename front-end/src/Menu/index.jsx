import React, {useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Menu() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        setCurrentPage(location.pathname); // Set the current page when the location changes
      }, [location]);
    

    function signOut() {
        localStorage.clear();
        navigate('/');
    }

    return (
        <>{currentPage !== '/' && (
            <div className="column menu">
                <div>
                    <div className="menu-link inline align-items">
                        <p>•</p>
                        <Link to="/listfurnitures">Accueil</Link>
                    </div>
                    <div className="menu-link inline align-items">
                        <p>•</p>
                        <Link to="/addfurniture">Ajouter meuble</Link>
                    </div>
                </div>
                <div className="disconnect">
                    <p onClick={signOut}>Déconnexion</p>
                </div>
            </div>
        )}
        </>
    )
}

export default Menu
