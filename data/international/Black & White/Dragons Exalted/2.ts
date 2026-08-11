import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'es-es': "Skiploom",
		'it-it': "Skiploom",
		'pt-br': "Skiploom",
		'de-de': "Hubelupf"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bullet Seed",
				'fr-fr': "Balle Graine",
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It blooms when the weather warms. It floats in the sky to soak up as much sunlight as possible.",
	},

	thirdParty: {
		cardmarket: 280441,
		tcgplayer: 89258
	}
}

export default card
