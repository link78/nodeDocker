node {
  checkout scm
  stage('uploading to docker hub'){
    steps{
      sript {
         // This step should not normally be used in your script. Consult the inline help for details.
docker.withRegistry('https://registry.hub.docker.com','burk1212') {
    def customImage = docker.build("burk1212/simplenodejs")
    
    customImage.push()
        }
      }
    }
  }
  stage('Remove Unused docker images'){
    steps{
      sh "docker rmi $dockerRegistry:$BUILD_NUMBER"
    }
  }
 
} // end
