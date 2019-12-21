node {
  checkout scm
  // This step should not normally be used in your script. Consult the inline help for details.
withDockerRegistry(credentialsId: 'burk1212', url: 'https://hub.docker.com/') {
    def customImage = docker.build("burk1212/simplenodejs")
    
    customImage.push()
}
}
