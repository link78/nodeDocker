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
        scripts {
        withDockerRegistry(credentialsId: \'DOCKER_ID\', url: \'https://registry.hub.docker.com\') {
               def customImage= docker.build("burk1212/test-nodejs-cicd:${env.BUILD_NUMBER}")
    	          customImage.push()
                  customImage.push("latest")
             } // end of docker build
        }
      }

}
                           
  }
