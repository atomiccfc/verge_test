import * as v3d from './node_modules/verge3d/build/v3d.module.js';

const myApp = new v3d.App('v3d-container');
const url = 'cube.glb';

const loader = new v3d.GLTFLoader()

// load a glTF resource
loader.load(
    // resource URL
    'cube.glb',

    // called when the resource is loaded
    function(gltf) {
        console.log('Is Loaded', gltf);
        myApp.scene.add(gltf.scene);

        gltf.animations; // array of v3d.AnimationClip
        gltf.scene; // v3d.Scene
        gltf.scenes; // array of v3d.Scene
        gltf.cameras; // array of v3d.Camera
        gltf.asset; // object
        gltf.world; // object
    },

    // called while loading is progressing
    function(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },

    // called when loading has errors
    function(error) {
        console.log('An error happened',error);
    }
);
myApp.loadScene(url, function() {
    console.log('Is Loaded', myApp.scene);

    myApp.scene.add(material);

    myApp.scene.background = new v3d.Color(0x000000);
    myApp.enableControls();
    myApp.run();
});

