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
    
      sh label: '', script: 'docker run --name=simple -d -p 7000:7800 burk1212/simplenodejs' 
  }
 
  stage('Running image on k8s'){
  sh label: '', script: '''kubectl create deployment simplenodejs --image burk1212/simplenodejs
kubectl expose deployment/simplenodejs --port=80 --name=nodejs-svc --type=LoadBalancer'''
  }
 
} // end
