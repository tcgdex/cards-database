<p align="center">
	<a href="https://www.tcgdex.net">
		<img src="https://www.tcgdex.net/assets/og.png" width="90%" alt="TCGdex Main Image">
	</a>
</p>
<p align="center">
	<a href="https://discord.gg/NehYTAhsZE">
		<img src="https://img.shields.io/discord/857231041261076491?color=%235865F2&label=Discord" alt="Discord Link">
	</a>
	<a href="https://github.com/tcgdex/cards-database/issues">
		<img src="https://img.shields.io/github/issues/tcgdex/cards-database?style=flat-square&color=%2344CC11" alt="Issue count">
	</a>
	<a href="https://github.com/tcgdex/cards-database/stargazers">
		<img src="https://img.shields.io/github/stars/tcgdex/cards-database?style=flat-square" alt="Github stars">
	</a>
	<a href="https://github.com/tcgdex/compiler">
		<img src="https://img.shields.io/github/workflow/status/tcgdex/cards-database/Compile?style=flat-square" alt="Compiler build passing" />
	</a>
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square" alt="All Contributors Badge" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

# TCGdex - Pokémon TCG Cards Database

A Multilanguage Pokémon TCG Database with Cards Pictures and most of the informations contained on the cards.

## Getting Started

_If you need help for using/editing the database, [join us on Discord](https://discord.gg/NehYTAhsZE)!_

### Using the Database

_The full documentation is available at <https://www.tcgdex.dev>_

- The easiest way to interact with the database is by using one of our SDKs listed below.
- You can also direcly use the endpoints at `api.tcgdex.net` (see the documentation).
- You can build the API yourself by using our `Dockerfile` and using it on the port 3000

#### SDKs / API Wrappers

We currently officially support theses SDKs

- [Javascript/Typescript SDK](https://github.com/tcgdex/javascript-sdk)
- [PHP SDK](https://github.com/tcgdex/php-sdk)
- [Java SDK](https://github.com/tcgdex/java-sdk)

### Editing the Database

There is three sub folders that will allow you to edit some faces of the database

- `/data`: Contains Cards Data architectured around `SerieName/SetName/CardLocalId` folders
- `/meta`: Contains informations for the project (definitions files, Translations for some fields)
- `/server`: The server that allow to communicate with the database

## Translations

We have a big effort on translating datas for older sets

_note: numbers updated manually_

|             | English | French | German | Italian | Portuguese | Spanish |
|-------------|---------|--------|--------|---------|------------|---------|
| Cards       | 14419   | 9846   | 6590   | 6576    | 6593       | 6590    |
| Translated  | 100%    | 68.2%  | 45.7%  | 45.6%   | 45.7%      | 45.7%   |

_want to help translating? each object fields on cards that have at least en,fr,es,de,it or pt can have the others!,_
_Also we have another translation files located at `meta/translations`_

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

TL::DR
- Fork
- make your changes
- pull request

## Deprecation

As of February 2021, the v1 API is no longer supported.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.avior.me/"><img src="https://avatars.githubusercontent.com/u/15822031?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Avior</b></sub></a><br /><a href="https://github.com/tcgdex/cards-database/commits?author=Aviortheking" title="Code">💻</a> <a href="#data-Aviortheking" title="Data">🔣</a></td>
    <td align="center"><a href="https://github.com/JuneTwooo"><img src="https://avatars.githubusercontent.com/u/1458019?v=4?s=100" width="100px;" alt=""/><br /><sub><b>June</b></sub></a><br /><a href="https://github.com/tcgdex/cards-database/issues?q=author%3AJuneTwooo" title="Bug reports">🐛</a> <a href="#data-JuneTwooo" title="Data">🔣</a></td>
    <td align="center"><a href="https://github.com/Kevin-Adrea"><img src="https://avatars.githubusercontent.com/u/36231620?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin-Adrea</b></sub></a><br /><a href="https://github.com/tcgdex/cards-database/issues?q=author%3AKevin-Adrea" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Maxopoly"><img src="https://avatars.githubusercontent.com/u/12138136?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maxopoly</b></sub></a><br /><a href="#data-Maxopoly" title="Data">🔣</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Licenses

This database is not produced, endorsed, supported or affiliated with Nintendo or The Pokémon Company

The Database is licensed under the MIT License. A copy of the license is available in [LICENSE](./LICENSE)
