# :rocket: generator-addon-azure-deploy

[![NPM version](https://img.shields.io/npm/v/generator-addon-azure-deploy.svg)](https://www.npmjs.com/package/generator-addon-azure-deploy)
[![Build status](https://img.shields.io/travis/sinedied/addon-firebase/master.svg)](https://travis-ci.org/sinedied/addon-azure-deploy)
![Node version](https://img.shields.io/node/v/generator-addon-azure-deploy.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Add Azure deployment to ngX-Rocket apps

This add-on configures Azure and adds a `deploy` script to deploy your application using [Azure blob storage](https://azure.microsoft.com/services/storage/blobs/?WT.mc_id=generatoraddonazuredeploy-github-yolasors) hosting.

The setup and deployment is done through the [@azure/ng-deploy](https://github.com/Azure/ng-deploy-azure) tool.

## Requirements

An [Azure account](https://azure.microsoft.com/?WT.mc_id=generatoraddonazuredeploy-github-yolasors) is needed to use this add-on.
You can create a free account following [this link](https://azure.microsoft.com/free/?WT.mc_id=generatoraddonazuredeploy-github-yolasors).

## Usage

Using [create-ngx](https://github.com/ngx-rocket/create-ngx) you can get started directly without installing anything:

1. Generate a new project and follow instructions:
   ```sh
   npm init ngx --addons addon-azure-deploy
   ```

2. Deploy your app
   ```sh
   npm run deploy
   ```

### With local installation

If you prefer to use it locally, install [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket) and this add-on:

```sh
npm install -g generator-ngx-rocket generator-addon-azure-deploy
```

Then:

1. Generate a new project and follow instructions:
   ```sh
   ngx new
   ```

2. Deploy your app
   ```sh
   npm run deploy
   ```

See [ngX-Rocket CLI](https://github.com/generator-ngx-rocket/tree/master/cli) for more information.
