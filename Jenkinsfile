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
        docker.withRegistry('https://registry.hub.docker.com',"DOCKER_ID') {
               def customImage= docker.build("burk1212/test-nodejs-cicd:${env.BUILD_NUMBER}")
    	          customImage.push()
                  customImage.push("latest")
             } // end of docker build
        }
      }

}
                           
  }
