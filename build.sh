echo ">>> Building"
npm run build
npm run export

rm -rf src/main/webapp/test/*
mkdir src/main/webapp/test
cp -r out/* src/main/webapp/test