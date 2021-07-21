import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Messi from '../joueurs_info/Messi';
import Fati from '../joueurs_info/Fati';
import Aguero from '../joueurs_info/Aguero';
import Braithwaite from '../joueurs_info/Braithwaite';
import Dembele from '../joueurs_info/Dembele';
import Depay from '../joueurs_info/Depay';
import Griezmann from '../joueurs_info/Griezmann';
import Coutinho from '../joueurs_info/Coutinho';
import Riqui from '../joueurs_info/Riqui';
import Pjanic from '../joueurs_info/Pjanic';
import Moriba from '../joueurs_info/Moriba';
import Pedri from '../joueurs_info/Pedri';
import Dejong from '../joueurs_info/Dejong';
import Busquets from '../joueurs_info/Busquets';
import Roberto from '../joueurs_info/Roberto';
import Emerson from '../joueurs_info/Emerson';
import Dest from '../joueurs_info/Dest';
import Alba from '../joueurs_info/Alba';
import Umtiti from '../joueurs_info/Umtiti';
import Pique from '../joueurs_info/Pique';
import Mingueza from '../joueurs_info/Mingueza';
import Garcia from '../joueurs_info/Garcia';
import Lenglet from '../joueurs_info/Lenglet';
import Araujo from '../joueurs_info/Araujo';
import Neto from '../joueurs_info/Neto';
import Terstegen from '../joueurs_info/Terstegen';

const Players = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Joueurs</h1>
            <br />
            <p id="sous-titre">Attaquants</p>
            <br />
            <Messi />
            <Fati />
            <Aguero />
            <Braithwaite />
            <Dembele />
            <Depay />
            <Griezmann />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <p id="sous-titre">Milieux de terrains</p>
            <br/>
            <Coutinho />
            <Riqui />
            <Pjanic />
            <Moriba />
            <Pedri />
            <Dejong />
            <Busquets />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <p id="sous-titre">Défenseurs</p>
            <br />
            <Roberto />
            <Emerson />
            <Dest />
            <Alba />
            <Umtiti />
            <Pique />
            <Mingueza />
            <Garcia />
            <Lenglet />
            <Araujo />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/><br/><br/><br/><br/><br /><br /><br />
            <p id="sous-titre">Gardiens</p>
            <br />
            <Neto />
            <Terstegen />
            <br />
        </div>
    );
};

export default Players;