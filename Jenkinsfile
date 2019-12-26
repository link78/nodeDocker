node {
  
  
  
    stage('Building App') {
     
        sh 'npm install'
       
      
    }

    stage('Build docker image') {
      
          def dockerImage= docker.build("burk1212/simple-nodejs-cicd:${env.BUILD_NUMBER}"
           dockerImage.push()
 
    }
     stage('Push Image){
        
               docker.withRegistry('https://registry.hub.docker.com','docker_id') {
               IMAGE_NAME="burk1212/simple-nodejs-cicd:${env.BUILD_NUMBER}"
             def dockerImage = docker.build(IMAGE_NAME)
                 dockerImage.push()
       }
  }
 
 

  
}
