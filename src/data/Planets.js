import mercure from '../assets/mercure.jpeg';
import venus from '../assets/venus.jpeg';
import moon from '../assets/moon.png';
import terre from '../assets/8081_earthmap10k.jpg';
import mars from '../assets/mars.jpeg';
import jupiter from '../assets/jupiter.jpeg';
import saturne from '../assets/saturne.jpeg';
import uranus from '../assets/uranus.jpeg';
import neptune from '../assets/neptune.jpeg';
import soleil from '../assets/soleil.jpeg';
import soleilAccueil from '../assets/soleildescri.jpeg';
import mercuryAccueil from '../assets/mercurydescri.jpeg';
import venusAccueil from '../assets/venusdescri.jpeg';
import terreAccueil from '../assets/earthdescri.jpeg';
import terreNuit from '../assets/earthNight.jpg';
import luneAccueil from '../assets/moondescri.jpeg';
import marsAccueil from '../assets/marsdescri.jpeg';
import jupiterAccueil from '../assets/jupiterdescri.jpeg';
import saturneAccueil from '../assets/saturndescri.jpeg';
import uranusAccueil from '../assets/uranusdescri.jpeg';
import neptuneAccueil from '../assets/neptunedescri.jpeg';
import texture from '../assets/ringd.png';

export const planets = [
  {
    name: 'Soleil',
    url: 'soleil',
    image: soleil,
    height: 15,
    speed: 1.5,
    width: '500px',
    imageDescri: soleilAccueil,
    description:
      "Le Soleil est l'étoile la plus proche de la Terre, dont elle est distante d'environ 150 millions de kilomètres. Le Soleil est situé à 8,5 kparsecs du centre de la Voie lactée. Dans la classification des étoiles, le soleil est une étoile de type G2. La masse du Soleil représente la majeure partie de la masse du système solaire. Elle est utilisée comme unité de masse pour les étoiles. L'énergie solaire, d'une importance capitale pour la Terre et notamment pour la vie, est produite par les réactions nucléaires qui se déroulent au coeur du Soleil. Agé d'environ 5 milliards d'années, le Soleil continuera à briller, avec une luminosité augmentant lentement, pendant une durée équivalente, avant d'évoluer en géante rouge et finalement de mourir.",
      distanceFromSun: '',
      superficie: '6,087 7 × 10 puissance 12 km2',
      dureeJour: '58j 15h 30m',
      rayon: '696 340 km',
      periodeOrbitale: "250 millions d'années",
      masse: '2,0 × 10 puissance 30 kg ou environ 333 000 masses terrestres',
      age: '4,603 milliards ans',
  },
  {
    name: 'Mercure',
    url: 'mercure',
    image: mercure,
    height: 15,
    speed: 1.5,
    width: '80px',
    imageDescri: mercuryAccueil,
    description:
      "Mercure, la planète la plus proche du Soleil, est aussi la plus petite depuis que Pluton n'est plus considérée comme une planète. Sa trajectoire apparente dans le ciel rend son observation depuis la Terre extrêmement difficile : Mercure ne s'écarte jamais de plus de 28° du Soleil et la meilleure résolution télescopique ne dépasse pas 700 kilomètres.",
    distanceFromSun: '57,91 millions km',
    superficie: '74,8 millions km²',
    dureeJour: '58j 15h 30m',
    rayon: '2 439,7 km',
    periodeOrbitale: '88 jours',
    masse: '3,285 × 10^23 kg (0,055 M⊕)',
    age: '4,503 milliards ans',
  },
  {
    name: 'Venus',
    url: 'venus',
    image: venus,
    height: 15,
    speed: 1.5,
    imageDescri: venusAccueil,
    description:
      "Deuxième planète à partir du Soleil, Vénus gravite sur une orbite quasi circulaire d'un rayon moyen de 108 millions de kilomètres. De ce fait, Vénus reçoit un rayonnement solaire presque deux fois plus intense que la Terre, et sa période de révolution sidérale est de 224,7 jours terrestres. Paradoxalement, la rotation de la planète est extrêmement lente (243 jours terrestres) et s'effectue ainsi dans le sens rétrograde. Le caractère circulaire et une très faible inclinaison de cette orbite n'entraînent pas d'effets saisonniers très marqués.",
    distanceFromSun: '108,2 millions km',
    superficie: '460,2 millions km²',
    dureeJour: '116j 18h 0m',
    rayon: '6 051,8 km',
    periodeOrbitale: '225 jours',
    masse: '4,867 × 10 puissance 24 kg',
    age: '4,503 milliards ans',
  },
  {
    name: 'Terre',
    url: 'terre',
    image: terre,
    height: 15,
    speed: 1.5,
    imageDescri: terreAccueil,
    description:
      "Parmi les huit planètes du Système solaire, la Terre est l'une des quatre planètes telluriques, solides, de composition (roches silicatées et fer) et de densité moyenne voisines (entre 3,9 pour Mars et 6,1 pour Mercure), la densité moyenne de notre planète étant de 5,52.",
    distanceFromSun: '149 millions km',
    superficie: '510,1 millions km²',
    dureeJour: '24h',
    rayon: '6 378,137 km',
    periodeOrbitale: '365 jours',
    masse: '5,973 6 × 10 puissance 24 kg',
    age: '4,543 milliards ans',
  },
  {
    name: 'Terre (nuit)',
    url: 'terre-nuit',
    image: terreNuit,
    height: 15,
    speed: 1.5,
    imageDescri: terreAccueil,
    description:
      "Parmi les huit planètes du Système solaire, la Terre est l'une des quatre planètes telluriques, solides, de composition (roches silicatées et fer) et de densité moyenne voisines (entre 3,9 pour Mars et 6,1 pour Mercure), la densité moyenne de notre planète étant de 5,52.",
      distanceFromSun: '149 millions km',
      superficie: '510,1 millions km²',
      dureeJour: '24h',
      rayon: '6 378,137 km',
      periodeOrbitale: '365 jours',
      masse: '5,973 6 × 10 puissance 24 kg',
      age: '4,053 milliards ans',
  },
  {
    name: 'Lune',
    url: 'lune',
    image: moon,
    height: 15,
    speed: 1.5,
    imageDescri: luneAccueil,
    description:
      "La Lune avec un « L » majuscule est l'unique satellite naturel de la Terre ; elle résulte sans doute d'une collision il y a 4,4 milliards d'années entre notre planète naissante et un petit corps céleste appelé Théia. Les Hommes, qui l'observent depuis longtemps, ont remarqué qu'elle présentait des phases successives qui revenaient tous les 29,53 jours, un cycle appelé lunaison. En étudiant sa surface à l'œil nu puis avec des instruments ils ont découvert qu'elle comportait des zones sombres, les mers, et des zones claires. Les mers sont de grandes plaines de lave solidifiée. Ce magma très fluide est remonté des profondeurs après un intense bombardement de la Lune par des astéroïdes il y a un peu moins de 4 milliards d'années.",
    distanceFromSun: '57,91 millions km',
    superficie: '37 millions km2',
    dureeJour: '29j',
    rayon: '1 737,4 km',
    periodeOrbitale: '27 jours',
    masse: '7,6 × 10^22 kg (0,055 M⊕)',
    age: '4,503 milliards ans',
  },
  {
    name: 'Mars',
    url: 'mars',
    image: mars,
    height: 15,
    speed: 1.5,
    imageDescri: marsAccueil,
    description:
      'Mars est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse. Son éloignement au Soleil est compris entre 1,381 et 1,666 UA, avec une période orbitale de 669,58 jours martiens.',
    distanceFromSun: '227,9 millions km',
    superficie: '144,8 millions km²',
    dureeJour: '1j 0h 37m',
    rayon: ' 3 389,5 km',
    periodeOrbitale: '687 jours',
    masse: '6,39 × 10 puissance 23 kg (0,107 M⊕)',
    age: '4,503 milliards ans',
  },
  {
    name: 'Jupiter',
    url: 'jupiter',
    image: jupiter,
    height: 15,
    speed: 1.5,
    imageDescri: jupiterAccueil,
    description:
      'Cinquième planète du système solaire, Jupiter a une composition proche de celle du Soleil, mais sa masse n´a pas été suffisante pour déclencher des réactions nucléaires et former une étoile. Son atmosphère d´hydrogène combiné à d´autres éléments peu abondants, donne des nuages de couleur vive agités d´ouragans violents provoqués par un dégagement de chaleur intense.',
    distanceFromSun: '778,5 millions km',
    superficie: '61,42 milliards km²',
    dureeJour: '0j 9h 56m',
    rayon: '69 911 km',
    periodeOrbitale: '12 ans',
    masse: '1,898 × 10 puissance 27 kg (317,8 M⊕)',
    age: '4,503 milliards ans',
  },
  {
    name: 'Saturne',
    url: 'saturne',
    image: saturne,
    height: 15,
    speed: 1.5,
    anneaux: true,
    texture: texture,
    imageDescri: saturneAccueil,
    description:
      "À l'instar de Jupiter, Saturne constitue, avec son cortège de satellites, un système planétaire en miniature, mais, surtout, offre le spectacle somptueux de ses anneaux, découverts dès 1610 par Galilée et interprétés en tant qu'anneaux par le Hollandais Christiaan Huygens en 1655. Saturne a été visitée au XXe siècle à trois reprises par des sondes spatiales de la Nasa : Pioneer-11 à la fin d'août et au début de septembre 1979, Voyager-1 en novembre 1980 et Voyager-2 en août 1981. Ces engins, en exploration du Système solaire, n'ont fait que la survoler. La sonde Cassini a tourné treize années en orbite autour d'elle entre juillet 2004 et septembre 2017 et a bouleversé les connaissances sur Saturne. L'exploitation des données recueillies prendra plusieurs décennies.",
    distanceFromSun: '1,434 milliard km',
    superficie: '42,7 milliards km²',
    dureeJour: '0j 10h 42m',
    rayon: '58 232 km',
    periodeOrbitale: '29 ans',
    masse: '5,683 × 10 puissance 26 kg (95,16 M⊕)',
    age: '4,503 milliards ans',
  },
  {
    name: 'Uranus',
    url: 'uranus',
    image: uranus,
    height: 15,
    speed: 1.5,
    imageDescri: uranusAccueil,
    description:
      "Inconnue des Anciens, pour lesquels Saturne marquait la limite du système solaire, Uranus n'a été découvert que le 13 mars 1781 par le musicien et astronome William Herschel qui, observant par hasard dans son jardin la constellation des Gémeaux à l'aide d'un télescope de 16 cm d'ouverture, remarqua un objet qui n'était pas ponctuel comme une étoile. Il crut d'abord avoir découvert une nouvelle comète mais le calcul de son orbite révéla vite que cet objet était en fait une planète gravitant sur une orbite circulaire à 2,9 milliards de kilomètres du Soleil en moyenne. Uranus est 19 fois plus loin de notre étoile que la Terre et deux fois plus loin que Saturne. Même si William Herschel souhaitait que la planète porte le nom de Georgium Sidus, il lui sera finalement attribué le nom du dieu du ciel dans la mythologie grecque : Ouranos, sur les recommandations de Johann Bode.",
    distanceFromSun: '2,871 milliards km',
    superficie: '8,083 milliards km²',
    dureeJour: '0j 17h 14m',
    rayon: '25 362 km',
    periodeOrbitale: '84 ans',
    masse: '8,681 × 10 puissance 25 kg (14,54 M⊕)',
    age: '4,503 milliards ans',
  },
  {
    name: 'Neptune',
    url: 'neptune',
    image: neptune,
    height: 15,
    speed: 1.5,
    imageDescri: neptuneAccueil,
    description:
      "Neptune, huitième planète du Système solaire, gravite sur une orbite quasi circulaire à environ 4,5 milliards de kilomètres du Soleil qu'elle met 165 ans à parcourir. Son plan équatorial est incliné de près de 30° par rapport au plan de son orbite. Bien que trois fois plus petit que Jupiter, Neptune est une planète géante qui est composée à 99 % d'hydrogène et d'hélium. Avec un diamètre de 49.520 kilomètres, Neptune est à peine plus petit qu'Uranus. Cependant, sa masse est légèrement supérieure, de l'ordre de 17,2 fois celle de la Terre (contre 14,5 fois pour Uranus), ce qui lui confère la masse volumique moyenne la plus élevée des planètes géantes (1,76 g/cm3). Comme Neptune est notablement moins massif que Jupiter ou Saturne, donc moins 'comprimé' par la gravité, il contient une plus grande proportion d'éléments plus lourds que l'hydrogène et l'hélium.",
    distanceFromSun: '4,495 milliards km',
    superficie: '7,618 milliards km²',
    dureeJour: '0j 16h 6m',
    rayon: '24 622 km',
    periodeOrbitale: '165 ans',
    masse: '1,024 × 10 puissance 26 kg (17,15 M⊕)',
    age: '4,503 milliards ans',
  },
];
