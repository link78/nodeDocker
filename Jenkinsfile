pipeline {
  agent any
  stages {
    stage('Building App') {
      steps {
        sh 'npm install'
        sh 'npm --version'
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