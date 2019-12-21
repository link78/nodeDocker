node {
  checkout scm
 
  
  stage('Pushing Image'){
         // This step should not normally be used in your script. Consult the inline help for details.
docker.withRegistry('https://registry.hub.docker.com','burk1212') {
  IMAGE_NAME="burk1212/simplenodejs:${BUILD_NUMBER}"
  def customImage = docker.build(IMAGE_NAME)
    
    customImage.push()
        }
  }
     
  stage('Running latest images on docker'){
    IMAGE_NAME="burk1212/simplenodejs:${BUILD_NUMBER}"
      sh label: '', script: 'docker run --name=simple -d -p 7000:7800 IMAGE_NAME' 
  }
  
 
} // end
