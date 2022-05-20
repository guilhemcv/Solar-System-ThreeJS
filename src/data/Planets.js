import mercure from '../assets/mercure.jpeg';
import venus from '../assets/venus.jpeg';
import terre from '../assets/8081_earthmap10k.jpg';
import mars from '../assets/mars.jpeg';
import jupiter from '../assets/jupiter.jpeg';
import saturne from '../assets/saturne.jpeg';
import uranus from '../assets/uranus.jpeg';
import neptune from '../assets/neptune.jpeg';
import soleil from '../assets/soleil.jpeg';
import sun from '../assets/soleilaccueil.png';
import mercury from '../assets/mercureaccueil.png';
import venusaccueil from '../assets/venusaccueil.png';

export const planets = [
  { name: 'Soleil', url: 'soleil', image: soleil, height: 11.7, speed: 0.1, imageAccueil: sun, width: "500px" },
  { name: 'Mercure', url: 'mercure', image: mercure, height: 12, speed: 3.0, imageAccueil: mercury, width: "80px" },
  { name: 'Venus', url: 'venus', image: venus, height: 12, speed: 3.0, imageAccueil: venusaccueil, width: "150px" },
  { name: 'Terre', url: 'terre', image: terre, height: 12, speed: 3.0 },
  { name: 'Mars', url: 'mars', image: mars, height: 12, speed: 3.0 },
  { name: 'Jupiter', url: 'jupiter', image: jupiter, height: 12, speed: 3.0 },
  { name: 'Saturne', url: 'saturne', image: saturne, height: 12, speed: 3.0 },
  { name: 'Uranus', url: 'uranus', image: uranus, height: 12, speed: 3.0 },
  { name: 'Neptune', url: 'neptune', image: neptune, height: 12, speed: 3.0 },
];
