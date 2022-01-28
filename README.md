```bash
## clone this repo to a local directory
git clone https://github.com/eshaparenko/cypress-example-kitchensink.git

## cd into the cloned repo
cd cypress-example-kitchensink

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8080` which hosts the Kitchen Sink App.

You can verify this by opening your browser and navigating to: [`http://localhost:8080`](http://localhost:8080)

You should see the Kitchen Sink App up and running. We are now ready to run Cypress tests.

```bash
## launch the cypress test runner
npm run cy:open
npx cypress run --record --key 3ebe81e7-7d8a-4917-81ca-6add910a67ba
## run tests with run parameters
## --config-file: config file location
## --record: record the results on the Dashboard
## --spec: spec location
## --key: Dashboard key
cypress run --config-file cypress/configurations/customCypress.json --record --browser chrome --spec **/todoPageObject.spec.js --key 3ebe81e7-7d8a-4917-81ca-6add910a67ba

```
### 2. Install & write tests in Cypress

[Follow these instructions to install and write tests in Cypress.](https://on.cypress.io/installing-cypress)

### 3. Cypress configuring

[Follow these instructions to configure Cypress.](https://docs.cypress.io/guides/references/configuration#Options)


How to run:
накидал структуру реального проекта
добавил пример пейджобджекта
скачаешь, запусти npm install в консоли
потом npm run cy:open
запустится ui сайпреса, нажмешь ран увилишь как оно бегает


