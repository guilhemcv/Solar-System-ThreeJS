/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import sky from './assets/sky.jpg';
import { planets } from './data/Planets';
import { Footer } from './Footer';
import up from './assets/up-arrow.png';
import { Navbar } from './Navbar';

export const Planet = () => {
  const { planet } = useParams();
  const [loaded, setIsLoaded] = useState(false);
  const [planetWidth, setPlanetWidth] = useState(window.innerWidth);
  const [planetHeight, setPlanetHeight] = useState(window.innerHeight);
  const [planetToShow, setPlanetToShow] = useState({
    name: '',
  });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked === true) {
      setIsClicked(!isClicked);
      setPlanetHeight(window.innerHeight * 0.2);
      setPlanetWidth(window.innerWidth * 0.2);
    } else {
      setPlanetHeight(window.innerHeight);
      setPlanetWidth(window.innerWidth);
    }
  }, [isClicked]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setPlanetWidth(window.innerWidth);
      setPlanetHeight(window.innerHeight);
    });
    const planetToShow = planets.find((p) => p.url === planet);
    setPlanetToShow(planetToShow);
    const scene = new THREE.Scene();
    const manager = new THREE.LoadingManager();

    manager.onStart = function (url, itemsLoaded, itemsTotal) {
      console.log(
        'Started loading file: ' +
          url +
          '.\nLoaded ' +
          itemsLoaded +
          ' of ' +
          itemsTotal +
          ' files.'
      );
      setIsLoaded(false);
    };

    manager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total);
    };

    manager.onLoad = function () {
      console.log('all items loaded');
      setInterval(() => {
        setIsLoaded(true);
      }, 3000);
    };
    manager.onError = function () {
      console.log('there has been an error');
    };
    let camera = '';
    if (window.innerWidth <= 730) {
      camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
    } else {
      camera = new THREE.PerspectiveCamera(
        planetToShow.height,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
    }
    camera.position.set(0, 0, 10);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
      alpha: true,
      antialias: true,
    });
    const skyTexture = new THREE.TextureLoader().load(sky);

    scene.background = skyTexture;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(planetWidth, planetHeight);

    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 200;

    const worldTexture = new THREE.TextureLoader(manager);
    const worldGeometry = new THREE.SphereGeometry(1, 40, 40);
    const worldMaterial = new THREE.MeshBasicMaterial({
      map: worldTexture.load(planetToShow.image),
    });
    const world = new THREE.Mesh(worldGeometry, worldMaterial);
    scene.add(world);

    if (planetToShow.anneaux === true) {
      const geometry = new THREE.RingGeometry(1.2, 2, 32);
      const ringTexture = new THREE.TextureLoader().load(planetToShow.texture);
      const material = new THREE.MeshBasicMaterial({
        map: ringTexture,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = 30;

      scene.add(mesh);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      controls.autoRotate = true;
      controls.autoRotateSpeed = planetToShow.speed;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }, [planet]);

  return (
    <div className="global">
      <div className="page-planet">
        {window.location.hash === '#info' && window.innerWidth > 730 ? (
          ''
        ) : (
          <Navbar lien="#info" planet={planetToShow.name} />
        )}
        <div className={!loaded ? 'show loading pulsate-bck' : 'hidden'}>
          <h2>Chargement...</h2>
        </div>
        <canvas className={!loaded ? 'hidden' : 'show'} id="bg"></canvas>
      </div>

      <div id="info">
        <img
          className="imagedescri"
          src={planetToShow.imageDescri}
          alt="planete"
          width="700px"
        />
        <div className="descri">
          <h1 style={{ marginBottom: '30px' }}>{planetToShow.name}</h1>
          <p style={{ marginBottom: '20px' }}>{planetToShow.description}</p>
          <ul>
            <li>Distance du soleil : {planetToShow.distanceFromSun}</li>
            <li>Superficie : {planetToShow.superficie}</li>
            <li>Rayon : {planetToShow.rayon}</li>
            <li>Durée du jour : {planetToShow.dureeJour}</li>
            <li>Masse : {planetToShow.masse}</li>
            <li>Période Orbitale : {planetToShow.periodeOrbitale}</li>
            <li>Age : {planetToShow.age}</li>
          </ul>
          <a href="#bg" className="top pulsate-fwd">
            <img src={up} alt="" srcset="" />
            <p>(retour)</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
