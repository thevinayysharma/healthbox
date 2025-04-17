// import * as THREE from 'https://cdn.skypack.dev/three';
// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
import * as THREE from 'https://cdn.skypack.dev/three@0.134.0';


export function renderLDLHDL(container, data) {
  console.log("working");
  console.log("renderLDLHDL function is being called");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const ldl = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
  );
  ldl.position.x = -1;
  scene.add(ldl);

  const hdl = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  );
  hdl.position.x = 1;
  scene.add(hdl);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    ldl.rotation.y += 0.01;
    hdl.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
}
