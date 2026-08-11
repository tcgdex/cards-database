import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		613,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Icicle Punch",
				'fr-fr': "Poing Stalactite",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its nose is always running. It sniffs the snot back up because the mucus provides the raw material for its moves.",
	},

	thirdParty: {
		cardmarket: 279993,
		tcgplayer: 84524
	}
}

export default card
