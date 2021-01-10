echo ">>> Building"
npm run build
npm run export
cp -r out/* src/main/webapp/
echo ">>> Packaging"
mvn package
echo ">>> Deploying"
sudo cp ~/Jenkins-Maven-NPM/target/Jenkins.war /opt/wildfly/standalone/deployments/ 