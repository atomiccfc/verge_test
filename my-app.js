import * as v3d from './node_modules/verge3d/build/v3d.module.js';

const myApp = new v3d.App('v3d-container');
const url = 'cube.glb';



myApp.loadScene(url, function() {
    console.log('Scene loaded', myApp);
    myApp.enableControls();
    myApp.run();

});