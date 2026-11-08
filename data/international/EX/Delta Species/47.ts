import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Calm Mind",
				'fr-fr': "Plénitude",
				'de-de': "Calm Mind"
			},
			effect: {
				'en-us': "Remove 3 damage counters from Kirlia.",
				'fr-fr': "Retirez à Kirlia 3 marqueurs de dégât.",
				'de-de': "Remove 3 damage counters from Kirlia."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Boom",
				'fr-fr': "Psycho-boom",
				'de-de': "Psychic Boom"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276810,
		tcgplayer: 86463
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

