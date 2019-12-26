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
               docker.withRegistry('https://registry.hub.docker.com','DOCKER_ID') {
                    def dockerImage = docker.push("latest")
                }
        }
  }
 }

  }
}
