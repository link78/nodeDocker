pipeline {
  agent {
    docker {
      image 'node:carbon'
      args '-p 7800:7800'
    }

  }
  stages {
    stage('Building App') {
      steps {
        sh '''sudo chown -R 985:977 "/.npm"
'''
        sh 'npm install'
      }
    }

    stage('Testing App') {
      steps {
        echo 'Testing nodejs -app'
      }
    }

    stage('Deploying') {
      steps {
        echo 'deploying nodejs-app on localhost:7800'
      }
    }

  }
}