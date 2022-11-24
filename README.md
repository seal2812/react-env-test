# Graffitidetection Tool
This application contains the user interface for the tool used by DSB operations to detect graffiti on the outside of trains

[![code analyze](https://github.com/DanskeStatsbaner/react-seal-test /actions/workflows/1.analyze.yml/badge.svg)](https://github.com/DanskeStatsbaner/react-seal-test /actions/workflows/1.analyze.yml)
[![2.Build and Deploy](https://github.com/DanskeStatsbaner/react-seal-test /actions/workflows/2.build_deploy.yml/badge.svg)](https://github.com/DanskeStatsbaner/react-seal-test /actions/workflows/2.build_deploy.yml)

## Prerequisites
- NodeJS v14

## Development

Replace the .env.example, with .env
```sh
XXXX=<description>
XXXX=<description>
XXXX=<description>
```

Install the project's dependencies:
```sh
npm install
```

In the project directory, you can run:
```sh
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
```sh
npm run build
``` 

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Deployment
CI/CD has been set up, and the way to go about is to commit to the master branch who will automatically deploy to our DEV environment on Azure.
Once the needed test has been performed on our DEV environment on Azure, we will [SWAP](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#swap-operation-steps) the development slot with production.

## Environment

| Local | Development | Production |
| :--- | :---- | :--- |
| http://localhost:3000 | https://verificationtool-dev.azure.dsb.dk/ | https://verificationtool.azure.dsb.dk/|
