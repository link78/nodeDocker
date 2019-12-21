pipeline {
  checkout scm
  agent any
  
  stage('Pushing Image'){
    step {
      script{
         // This step should not normally be used in your script. Consult the inline help for details.
docker.withRegistry('https://registry.hub.docker.com','burk1212') {
    def customImage = docker.build("burk1212/simplenodejs")
    
    customImage.push()
        }
  }
    }
  }
     
  stage('Remove Unused docker images'){
    
      sh "docker rmi $dockerRegistry:$BUILD_NUMBER"
    
  }
 
} // end
