const cmd = require('node-cmd');

cmd.run('live-server --host=0.0.0.0 --port=8080 --entry-file=my-app.html', function (err, data, stderr) {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    console.log(`Output: ${data}`);
    console.error(`Stderr: ${stderr}`);
});