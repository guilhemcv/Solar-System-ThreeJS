import React from 'react';
import { Link } from 'react-router-dom';
import { planets } from './data/Planets'
import './App.css';

export const Accueil = () => {


  return (
    <div className='accueil'>
      <h1 className='titre'>Bienvenue sur les planetes</h1>
      <nav>
        {planets.map((p) => (
          <div className='platitle' key={p.url}>
          <Link to={`/${p.url}`}>
           <img className='rotate-center' src={p.imageAccueil} width={p.width} alt="planet" srcset="" />
          </Link>
          <h2 className='planet'>{p.name}</h2>
          </div>
        ))}
      </nav>
    </div>
  );
};
