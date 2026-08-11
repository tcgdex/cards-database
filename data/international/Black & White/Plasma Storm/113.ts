import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Watchog",
		'fr-fr': "Miradar",
		'es-es': "Watchog",
		'it-it': "Watchog",
		'pt-br': "Watchog",
		'de-de': "Kukmarda"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		505,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Second Bite",
				'fr-fr': "Double Morsure",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Using luminescent matter, it makes its eyes and body glow and stuns attacking opponents.",
	},

	thirdParty: {
		cardmarket: 280852,
		tcgplayer: 90499
	}
}

export default card
