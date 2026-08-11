import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'de-de': "Rokkaiman"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		552,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},

			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing Tire-Bouchon",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Protected by thin membranes, their eyes can see even in the dead of night. They live in groups of a few individuals.",
	},

	thirdParty: {
		cardmarket: 280947,
		tcgplayer: 86539
	}
}

export default card
