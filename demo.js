const Git = require('nodegit');

Git.Clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', './local-repo/').
then(function(repo) {
    console.log('clone to: ./local-repo');
});