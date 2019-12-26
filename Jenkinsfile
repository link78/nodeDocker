node {
  checkout scm
 
  
  stage('Building and Pushing Image'){
         // This step should not normally be used in your script. Consult the inline help for details.
          docker.withRegistry('https://registry.hub.docker.com','DOCKER_ID') {
          IMAGE_NAME="burk1212/simplenodejs:${env.BUILD_NUMBER}"
          def customImage = docker.build(IMAGE_NAME)
          customImage.push("latest")
        }
  }
    stage('Remove old image container'){
    
     sh label: '', script: 'docker rm -f cicd' 
      
 }
  stage('Running latest images on docker'){
    
      sh label: '', script: 'docker run --name=cicd -d -p 7000:7800 burk1212/simplenodejs' 
  }
 
  
 
} // end
