node {
  checkout scm
 
  
  stage('Pushing Image'){
         // This step should not normally be used in your script. Consult the inline help for details.
docker.withRegistry('https://registry.hub.docker.com','burk1212') {
  def customImage = docker.build("burk1212/simplenodejs:${env.BUILD_ID}")
    
    customImage.push()
        }
  }
     
  stage('Running latest images'){
    
      sh label: '', script: 'docker run -d -p --name simple -d -p 7000:7800 burk1212/simplenodejs'
    
  }
 
} // end
