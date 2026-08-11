import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Cofagrigus",
		'fr-fr': "Tutankafer",
		'es-es': "Cofagrigus",
		'it-it': "Cofagrigus",
		'pt-br': "Cofagrigus",
		'de-de': "Echnatoll"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Spirit Juggling",
				'fr-fr': "Jeu d’Esprits",
				'es-es': "Malabarismo de Espíritus",
				'it-it': "Giocoliere delle Anime",
				'pt-br': "Malabarismo de Almas",
				'de-de': "Seelenbalance"
			},
			effect: {
				'en-us': "Discard any number of your Benched Pokémon. This attack does 30 more damage for each Benched Pokémon you discarded in this way.",
				'fr-fr': "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
				'es-es': "Descarta cualquier cantidad de tus Pokémon en Banca. Este ataque hace 30 puntos de daño más por cada Pokémon en Banca que hayas descartado de esta manera.",
				'it-it': "Scarta un numero qualsiasi di Pokémon che hai in panchina. Questo attacco infligge 30 danni in più per ogni Pokémon in panchina scartato in questo modo.",
				'pt-br': "Descarte qualquer número dos seus Pokémon no Banco. Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco descartado desta forma.",
				'de-de': "Lege beliebig viele Pokémon von deiner Bank auf deinen Ablagestapel. Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der auf diese Weise von deiner Bank auf deinen Ablagestapel gelegten Pokémon zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Grave robbers who mistake them for real coffins and get too close end up trapped inside their bodies.",
	},

	thirdParty: {
		cardmarket: 365737,
		tcgplayer: 178913
	}
}

export default card
