# nodejs with aws CI/CD anf jenkins
Script for installing aws codedeploy agen, nodejs
#!/bin/bash
sudo yum update -y
sudo yum install -y ruby
sudo yum install -y wget
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install -y nodejs
# installing codedeploy agent
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo mkdir -p /var/www/nodejs
cd /var/www/nodejs
npm install
sudo node index.js
