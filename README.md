## Start

### Config

Update your `~/.aws/credentials` with your AWS credentials:

```
[CHOOSE_A_PROFILE_NAME]
aws_access_key_id = CHANGE_IT_HERE
aws_secret_access_key = CHANGE_IT_HERE
```


Create a file called `api/serverless.env.yml` on the root of this project with the following content:

```
default_env: &default_env
  SERVICE: 'myservice'
  REGION: 'us-west-2' # CHANGE YOUR REGION
  STAGE: 'dev'

dev:
  <<: *default_env
  PROFILE: 'CHANGE_IT_HERE'
  ACCOUNT_ID: 'CHANGE_IT_HERE'
  ACCOUNT_CANONICAL_ID: 'CHANGE_IT_HERE'
  STAGE: 'dev'
```


### Using custom domain?

It's important to notice that your domain/subdomain may take up to 40min to be initialized.

Run `sls create_domain` to setup your custom domain, like `api.yourdomain.com`. You should read a message like this:

```
Serverless: Domain was created, may take up to 40 mins to be initialized.
```

To change the `basePath` it's required to run `npm run remove` before. It will remove your entire infrastructure managed by serverless, be careful.


### Not using custom domain?

If you are not using a custom domain, remove the following section from `serverless.yml`:

```
customDomain:
  basePath: ""
  domainName: ${self:provider.environment.API_DOMAIN}
  stage: dev
```


### Develop Lambda Functions

In your project root run:

`npm start`

to list all the options for the serverless offline plugin run:

`sls offline --help`


### Deploy Lambda Functions & API Gateway

`npm run deploy`


### Remove Lambda Functions & API Gateway

`npm run remove`

### IMPORTANT

These endpoints provide public access to the lambda functions. If you need to protect your endpoints, read about implementing *authorizers*.

Check out my other project [https://github.com/hlibco/serverless-typescript](https://github.com/hlibco/serverless-typescript) to create private endpoints using authorizers and JWT (Json Web Token). It comes with a UI to isue tokens and use them in the header of HTTP requests.

---


## Read it later
https://www.npmjs.com/package/serverless-domain-manager
