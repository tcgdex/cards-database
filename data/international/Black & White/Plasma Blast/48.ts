import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Last-Chance Chop",
				'fr-fr': "Dernière Chance",
			},
			effect: {
				'en-us': "If this Pokémon's remaining HP is 10, this attack does 70 more damage.",
				'fr-fr': "S'il reste 10 PV à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Seismic Toss",
				'fr-fr': "Frappe Atlas",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It happily carries heavy cargo to toughen up. It willingly does hard work for people.",
	},

	thirdParty: {
		cardmarket: 281069,
		tcgplayer: 86985
	}
}

export default card
