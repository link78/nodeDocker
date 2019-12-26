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
        sh '''docker.withRegistry(\'https://registry.hub.docker.com\',\'DOCKER_ID\') {
  IMAGE_NAME="burk1212/simplenodejs-cicd:${env.BUILD_NUMBER}"
  def customImage = docker.build(IMAGE_NAME)
    
    customImage.push("latest")
        }'''
        }
      }

    }
  }