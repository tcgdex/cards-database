import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
		'es-es': "Starly",
		'it-it': "Starly",
		'pt-br': "Starly",
		'de-de': "Staralili"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		396,
	],

	hp: 60,

	types: [
		"Colorless",
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
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Because they are weak individually, they form groups. However, they bicker if the group grows too big.",
	},

	thirdParty: {
		cardmarket: 280973,
		tcgplayer: 89526
	}
}

export default card
