import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import sky from './assets/sky.jpg';
import { planets } from './data/Planets';


export const Planet = () => {
  const { planet } = useParams();
  const [planetToShow, setPlanetToShow] = useState({
    name: '',
  });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const planetToShow = planets.find((p) => p.url === planet);
    setPlanetToShow(planetToShow);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      planetToShow.height,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(0, 0, 10);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
      alpha: true,
      antialias: true,
    });
    const skyTexture = new THREE.TextureLoader().load(sky);

    scene.background = skyTexture;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 200;

    const worldTexture = new THREE.TextureLoader().load(planetToShow.image);
    const worldGeometry = new THREE.SphereGeometry(1, 40, 40);
    const worldMaterial = new THREE.MeshBasicMaterial({
      map: worldTexture,
    });
    const world = new THREE.Mesh(worldGeometry, worldMaterial);
    scene.add(world);

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
    <div>
      <canvas id="bg"></canvas>
    </div>
  );
};
