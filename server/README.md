# TCGdex/server

The server running the TCGdex API.

## Installing/Running

### Using NodeJS/NPM

You will need NPM/NodeJS installed

1. Install deps for both this directory and the parent directory

```
npm install
cd ..
npm install
cd server
```

2. Compile the database

```
cd ..
npm run compile
cd server
npm run compile
```

3. run the server !

Dev mode
```
npm run dev
```

Production mode

```
npm run build
npm run start
```

### Envs

you can add environment variables to add features to the server:
- SENTRY_DSN: the DSN to a sentry compatible server to allow to catch errors

### Using Docker

Go to the parent directory and build the Dockerfile!

## Build configs

```bash
# generate ts config from openapi
npx openapi-typescript ./public/v2/openapi.yaml -o ./src/openapi.ts

# Generate GraphQL from ts config
bun a.ts test.ts Card > out.gql
```
