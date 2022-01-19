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

### Using Docker

Go to the parent directory and build the Dockerfile!
