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
        sh '''withDockerRegistry(credentialsId: \'DOCKER_ID\', url: \'https://registry.hub.docker.com\') {
               def customImage= docker.build("burk1212/test-nodejs-cicd:${env.BUILD_NUMBER}")
    	          customImage.push()
                  customImage.push("latest")
}'''
        }
      }

    }
  }
