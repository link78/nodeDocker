pipeline {
  agent any
  stages {
    stage('Building App') {
      steps {
        sh 'npm install'
        sh 'npm --version'
      }
    }

    stage('Build AND Push docker image') {
      steps {
        scripts {
        docker.withRegistry('https://registry.hub.docker.com','DOCKER_ID') {
               IMAGE_NAME="burk1212/simplenodejs:${env.BUILD_NUMBER}"
               def customImage = docker.build(IMAGE_NAME)
                    customImage.push("latest")
        }
             } // end of docker build
        }
      }

}
                           
  }
