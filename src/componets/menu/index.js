import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assests/img/Logo.png'; 
import './Menu.css'
import Button from '../Button';
//import ButtonLink from './componets/ButtonLink';

function Menu() {
    return (
        <nav className= "Menu">
           <Link to="/">
           <img className="Logo" src={Logo} alt="Gabiflix"/>
           </Link>

           <Button as={Link} className="ButtonLink" to="/cadastro/video">
               Novo Vídeo
           </Button>
        </nav>
    )
} 

export default Menu;
//31min 