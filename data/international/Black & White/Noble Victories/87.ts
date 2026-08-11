import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		611,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dual Chop",
				'fr-fr': "Double Baffe",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],

	retreat: 2,

	description: {
		'en-us': "Since a broken tusk will not grow back, they diligently sharpen their tusks on river rocks after they've been fighting.",
	},

	thirdParty: {
		cardmarket: 280210,
		tcgplayer: 85558
	}
}

export default card
