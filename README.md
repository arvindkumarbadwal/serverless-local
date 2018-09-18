# Serverless Rest API with DynamoDB [Local Environment]
This example explain how to run a serverless service locally, It provides a REST API to manage User stored in a DynamoDB.

## Pre-requisites
Install Node
```bash
npm install -g serverless
sudo apt install default-jre
```

## Setup
```bash
npm install
serverless dynamodb install
serverless dynamodb migrate
```

## Run service offline
```bash
serverless offline start
```

## Migration
```bash
serverless dynamodb migrate
```

## Seed
```bash
serverless dynamodb seed --seed={seedkey}
```

## Links
* [Serverless Framework](https://www.npmjs.com/package/serverless)
* [Serverless Dynamodb Local Plugin](https://www.npmjs.com/package/serverless-dynamodb-local)
* [Serverless Offline Plugin](https://www.npmjs.com/package/serverless-offline)
