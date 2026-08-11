import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		404,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Quick Turn",
				'fr-fr': "Vif Retournement",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
	},

	thirdParty: {
		cardmarket: 280269,
		tcgplayer: 86944
	}
}

export default card
