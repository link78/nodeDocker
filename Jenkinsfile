pipeline {
  agent any
  
  environment {
  dockerImage = ''
  }
  stages {
    stage('Building App') {
      steps {
        sh 'npm install'
        sh 'npm --version'
      }
    }

    stage('Build docker image') {
      steps {
        script {
          dockerImage= docker.build("burk1212/simple-nodejs-cicd:${env.BUILD_NUMBER}"
                                    dockerImage.push()
      }
      }
    }
                                        stage('Push Image){
                                              steps{
                                                script {
                                                docker.withRegistry('https://registry.hub.docker.com','DOCKER_ID') {
                                                  
                                                dockerImage.push("latest")
                                                }
                                                }
                                              }
                                              }

  }
}
