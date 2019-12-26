pipeline {
  agent any
  
  stages {
    stage('Building App') {
      steps {
        sh 'npm install'
       
      }
    }

    stage('Build docker image') {
      steps {
        script {
          def dockerImage= docker.build("burk1212/simple-nodejs-cicd:${env.BUILD_NUMBER}"
           dockerImage.push()
      }
      }
    }
     stage('Push Image){
        steps{
        script {
               docker.withRegistry('https://registry.hub.docker.com','docker_id') {
               IMAGE_NAME="burk1212/simple-nodejs-cicd:${env.BUILD_NUMBER}"
             def dockerImage = docker.build(IMAGE_NAME)
                 dockerImage.push()
        }
                }
        }
  }
 }

  }
}
