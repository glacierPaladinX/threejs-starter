import * as THREE from "three";

let app = {
  el: document.getElementById("app"),
  scene: null,
  renderer: null,
  camera: null,
  cube: null
};

const init = () => {
  app.renderer = new THREE.WebGLRenderer();
  console.log(app.renderer);
  app.renderer.setSize(window.innerWidth, window.innerHeight);
  app.el.appendChild(app.renderer.domElement);

  app.scene = new THREE.Scene();

  app.camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  app.cube = new THREE.Mesh(geometry, material);
  app.scene.add(app.cube);
  app.camera.position.z = 5;
};

const render = () => {
  requestAnimationFrame(render);

  app.cube.rotation.x += 0.01;
  app.cube.rotation.y += 0.01;

  app.renderer.render(app.scene, app.camera);
};

init();
render();
