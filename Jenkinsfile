pipeline {
  agent any
  stages {
    stage('Building App') {
      steps {
        sh 'npm install'
        sh 'npm --version'
      }
    }

    stage('Build docker image') {
      steps {
        echo 'Testing nodejs -app'
        sh 'def dockerImage= docker.build("burk1212/simple-nodejs-cicd:${env.BUILD_NUMBER}"'
      }
    }

  }
}