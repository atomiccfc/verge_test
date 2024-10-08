import * as THREE from 'https://unpkg.com/three@0.132.2/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0x404040);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
const fov = 70;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 1, 5);
camera.lookAt(scene.position);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.getElementById('v3d-container').appendChild(renderer.domElement);

scene.add(directionalLight);
scene.add(ambientLight);
scene.background = new THREE.Color(0xcccccc);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Add additional lights
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(3, 10, -10);
scene.add(dirLight);

// Load a GLTF model
const loader = new GLTFLoader();
loader.load('cube.glb', function (gltf) {
    gltf.scene.scale.set(0.02, 0.02, 0.02);
    scene.add(gltf.scene);
    camera.lookAt(gltf.scene.position);
    controls.update();
}, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, function (error) {
    console.log('An error happened', error);
});

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
