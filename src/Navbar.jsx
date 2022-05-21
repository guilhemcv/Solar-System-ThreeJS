import React, { useState,useEffect } from 'react';
import { planets } from './data/Planets';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';

export const Navbar = ({lien, planet}) => {
  const [showLien, setShowLien] = useState("");
  const [title, setTitle] = useState("");
  let navigate = useNavigate();


  useEffect(() => {
    if (lien) {
      setShowLien(lien);
    }
  }, [lien]);

  useEffect(() => {
    if (planet) {
      setTitle(planet);
    }
  } , [planet])


  const handleChange = (event) => {
    navigate(`/${event.target.value}#bg`);
  };

  return (
    <div>
      <nav>
        <img src={logo} alt="logo navbar" height="60px" srcset="" />
        <p className='title'><a href={showLien}>{title} - Cliquer pour + de détails</a></p>
        <select name="planete" id="" onChange={(e) => handleChange(e)}>
          <option value="">Choisir une planète :</option>
          {planets.map((p) => (
            <option className="planet" value={p.url}>
              {p.name}
            </option>
          ))}
        </select>
      </nav>
    </div>
  );
};
