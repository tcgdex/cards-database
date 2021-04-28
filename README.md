# Pokemon TCGdex

A Multilanguage Pokémon TCG Database with Pictures and most of the informations contained on the cards

## Use the datas

The easiest way to use the datas is via our [Javascript/Typescript SDK](https://github.com/tcgdex/javascript-sdk).

You can however build this yourself via our [compiler](https://github.com/tcgdex/compiler) or download the already build [compiled database](https://github.com/tcgdex/distribution).

## Changelogs

### V2

this is a complete rework of the database to make it easier to Add or edit any cards

the new folder architecture is this:

-data
  - Serie Name <- Each .ts files contains informations for the corresponding serie
    - Set Name <- Each .ts files contains informations for the corresponding set
      - Card Identifier <- Each .ts files contains informations for the corresponding card

### V1 - [Last Commit](https://github.com/tcgdex/cards-database/tree/8f9e9536567d2ba712fa8bb0ac147c8040903470)

This is the initial Release Containing everything into Ids

# Contributing

A card is missing or has incorrect informations? feel free to contribute to the database via the [Issues](https://github.com/tcgdex/cards-database/issues) or with a [Pull Request](https://github.com/tcgdex/cards-database/pulls)
