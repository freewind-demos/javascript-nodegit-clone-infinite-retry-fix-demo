const Git = require('nodegit')

const bitBucketUrl = 'https://bitbucket.org/Freewind/java-hello-world-demo.git'
const localPath = './local-repo/java-hello-world-demo'

let failedAuthTry = 1

const cloneOptions = {
    fetchOpts: {
        callbacks: {
            credentials: function (url, userName) {
                console.log('---------------- credentials (tries: ' + failedAuthTry + ')---------------')
                // https://github.com/nodegit/nodegit/issues/1133
                if (failedAuthTry > 2) {
                    console.warn('Authentication is failed with ' + failedAuthTry + ' tries, please check your username and password')
                    throw 'should not try infinitely'
                }
                failedAuthTry += 1
                return Git.Cred.userpassPlaintextNew('invalid-username', 'invalid-password')
            }
        }
    }
}

Git.Clone(bitBucketUrl, localPath, cloneOptions)
    .then(function (repo) {
        console.log('clone to: ' + repo)
    })
    .catch(function (error) {
        console.error(error)
    })