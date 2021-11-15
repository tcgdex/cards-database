# TCGdex META

this folder contains data that allow to build and quickly edit the database

## Codeshift

simple file that contains an easy way to edit multiple entries of the database

run it from the root folder of the project with jscodeshift added using `npm i jscodeshift`

```bash
npx jscodeshift -t ./meta/codeshift.ts --extensions=ts --parser=ts ./data/Serie/Set --print --dry
```

## Definitions

Contains the differents standards of API/Data definition for the built database

- `openapi.yaml`: Open API definition
- `graphql.gql`: GraphQL definitions
- `api.d.ts`: API definition for the SDKs

## Translations

Contains the different translations used by the Compiler that allow to build it in multiple languages

it is managed by the `schema.json` file in the same folder

_note: en.json is not here because it is used as base language_

## legals.ts

File containing the current Standard and Expanded filters for the legal field of each cards
