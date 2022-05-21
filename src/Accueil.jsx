import React from 'react';
import { Link } from 'react-router-dom';
import { planets } from './data/Planets';
import './App.css';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Accueil = () => {
  return (
    <div>
      <Navbar/>
      <div className="accueil">
        <h1 className="titre">Bienvenue sur les planetes</h1>
      </div>
      <Footer />
    </div>
  );
};
