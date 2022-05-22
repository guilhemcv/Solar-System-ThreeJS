import React from 'react';
import './App.css';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import planetes from './assets/planetesAccueil.png';
import fusee from './assets/fuseeAccueil.png';

export const Accueil = () => {
  return (
    <div>
      <Navbar />
      <div className="accueil">
        <img
          src={fusee}
          className="imgfusee"
          alt="fusée"
          srcset=""
        />
        <h1 className="titre fade-in">
          Départ imminent pour le système solaire...
        </h1>
        <div className="flicker-in-1 paraphoto">
          <p className="paragraphe flicker-in-1">
            Toujours plus loin, toujours plus haut... Le monde a toujours voulu
            découvrir ce qui se cache au dessus de nos têtes. Aujourd'hui, il
            est possible de voyager depuis son ordinateur, alors sélectionnez
            une planète dans le menu du haut et préparez vous au décollage...
          </p>
          <img
            src={planetes}
            className="planetesacc"
            alt="planètes"
            srcset=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
