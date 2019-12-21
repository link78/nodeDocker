node {
  checkout scm
  // This step should not normally be used in your script. Consult the inline help for details.
docker.withRegistry('https://registry.hub.docker.com','burk1212') {
    def customImage = docker.build("burk1212/simplenodejs")
    
    customImage.push()
}
}
