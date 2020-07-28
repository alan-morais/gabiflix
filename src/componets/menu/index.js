import React from 'react';
import Logo from '../../assests/img/Logo.png'; 
import './Menu.css'
import Button from '../Button';
//import ButtonLink from './componets/ButtonLink';

function Menu() {
    return (
        <nav className= "Menu">
           <a href="/">
           <img className="Logo" src={Logo} alt="Gabiflix"/>
           </a>

           <Button as="a" className="ButtonLink" href="/">
               Novo Vídeo
           </Button>
        </nav>
    )
} 

export default Menu;