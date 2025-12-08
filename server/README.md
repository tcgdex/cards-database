# TCGdex/server

The server running the TCGdex API.

## Installing/Running

### Using NodeJS/NPM

You will need NPM/NodeJS installed

1. Install deps for both this directory and the parent directory

```
npm install
```

2. Compile the database

```
npm run compile
```

If you do not have `bun` installed globally, you may need to install it with `npm install bun`.

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
