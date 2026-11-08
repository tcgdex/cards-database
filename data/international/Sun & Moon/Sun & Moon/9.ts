import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'it-it': "Rowlet",
		'pt-br': "Rowlet",
		'de-de': "Bauz"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		722,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leafage",
				'fr-fr': "Feuillage",
				'es-es': "Follaje",
				'it-it': "Fogliame",
				'pt-br': "Folhagem",
				'de-de': "Blattwerk"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This wary Pokémon uses photosynthesis to store up energy during the day, while becoming active at night.",
	},

	thirdParty: {
		cardmarket: 294120,
		tcgplayer: 126880
	}
}

export default card
