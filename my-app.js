import * as v3d from './node_modules/verge3d/build/v3d.module.js';

const myApp = new v3d.App('v3d-container');
const url = '20160825.glb';



myApp.loadScene(url, function() {
    console.log('Scene loaded', myApp);
    const light = new v3d.AmbientLight(0xffffff, 1); // Мягкий рассеянный свет
myApp.scene.add(light);
    myApp.enableControls();
    myApp.run();
}, function(err) {
    console.error('Error loading scene:', err);
});