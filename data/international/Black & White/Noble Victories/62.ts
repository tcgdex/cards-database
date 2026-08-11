import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'es-es': "Timburr",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'de-de': "Praktibalk"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		532,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Pummel",
				'fr-fr': "Martelage",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It fights by swinging a piece of lumber around. It is close to evolving when it can handle the lumber without difficulty.",
	},

	thirdParty: {
		cardmarket: 280185,
		tcgplayer: 89914
	}
}

export default card
