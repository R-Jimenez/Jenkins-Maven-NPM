echo ">>> Packaging"
mvn package

echo ">>> Deploying"
sudo cp ~/Jenkins-Maven-NPM/target/Jenkins.war /opt/wildfly/standalone/deployments/ 